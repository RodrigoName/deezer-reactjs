import React from 'react';
import styled from 'styled-components';
import { lightGrey, darkGrey } from '../styles';
import Icon from './Icon';
import Deezer from './icons/Deezer';
import { connect } from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
  changeCurrentSong,
  nowPlaying,
  changeColor,
  defineTrackList,
  newSelect,
} from '../actions';

class SongCard extends React.Component {
  cardClickHandler = (e) => {
    if (e.target.dataset.type === 'fav') this.clickFav();
    if (e.target.dataset.type === 'deezer') this.clickDeezer();
    if (!e.target.dataset.type) this.changeCurrentSong();
  };

  clickFav = () => {
    const { song, favorites, addToFavorites, removeFromFavorites } = this.props;
    if (favorites.indexOf(song) === -1) addToFavorites(song);
    else removeFromFavorites(song);
  };

  clickDeezer = () => {};

  changeCurrentSong = () => {
    const {
      song,
      currentSong,
      changeCurrentSong,
      nowPlaying,
      changeColor,
      trackList,
      defineTrackList,
      newSelect,
      stateSearchOption,
      songs,
      favorites,
      from,
    } = this.props;
    if (currentSong !== song) {
      changeCurrentSong(song);
      newSelect(song);
    }
    if (from === 'search' && trackList !== songs.search[stateSearchOption]) {
      defineTrackList(songs.search[stateSearchOption]);
    }
    if (from === 'favorites' && trackList !== favorites) {
      defineTrackList(favorites);
    }
    nowPlaying();
    changeColor();
  };

  render() {
    const { song, favorites, color } = this.props;
    const { title, duration, artist, album, md5_image, link } = song;
    let heart;
    heart = favorites.indexOf(song) === -1 ? 'empty' : 'full';
    const minutes = Math.floor(duration / 60);
    const seconds = duration - minutes * 60;
    let strSec = seconds.toString();
    if (strSec.length === 1) strSec = `0${strSec}`;
    return (
      <StyledSongCard onClick={this.cardClickHandler} color={color}>
        <div className="left-div">
          <div className="img-div">
            <img
              src={`https://e-cdns-images.dzcdn.net/images/cover/${md5_image}/264x264-000000-80-0-0.jpg`}
              alt="song logo"
            />
          </div>
          <div data-type="fav" className="icon" onClick={this.onClickHandler}>
            <Icon icon="fav" fill={color} song={this.props.song} heart={heart} />
          </div>
          <div className="details">
            <div>
              {title} <span className="artist-name">- {artist.name}</span>{' '}
              <span className="album-name">| {album.title}</span>
            </div>
            <div>{`${minutes}:${strSec}`}</div>
          </div>
        </div>
        <div className="right-div">
          <div className="deezer">
            <a href={link} target="blank">
              <Deezer />
            </a>
          </div>
        </div>
      </StyledSongCard>
    );
  }
}

const StyledSongCard = styled.div`
  cursor: pointer;
  border-bottom: 1px solid ${(props) => (props.color ? props.color : 'white')};
  color: ${lightGrey};
  width: 100%;
  padding: 0.5rem;
  transition: background-color 0.2s, border-bottom 1s;
  font-family: sans-serif;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: ${darkGrey};
  }

  .left-div {
    display: flex;
    align-items: center;

    .img-div {
      margin-left: 2rem;
      img {
        height: 5rem;
      }
    }

    .icon {
      margin: 0 2rem;
    }
  }

  .right-div {
    display: flex;
    align-items: center;

    .deezer {
      margin-right: 2rem;
    }
  }

  @media only screen and (max-width: 1000px) {
    cursor: default;

    .right-div {
      .deezer {
        a {
          cursor: default;
        }
      }
    }
  }

  @media only screen and (max-width: 700px) {
    font-size: 0.8rem;

    .left-div {
      .details {
        .album-name {
          display: none;
        }
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .left-div {
      .img-div {
        margin-left: 0;
      }
      .details {
        .artist-name {
          display: none;
        }
      }
    }

    .right-div {
      .deezer {
        margin-right: 0;
      }
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
    currentSong: state.currentSong,
    stateSearchOption: state.searchOption,
    trackList: state.trackList,
    favorites: state.favorites,
    color: state.color,
  };
};

export default connect(mapStateToProps, {
  addToFavorites,
  removeFromFavorites,
  changeCurrentSong,
  nowPlaying,
  changeColor,
  defineTrackList,
  newSelect,
})(SongCard);
