import React, { createRef } from 'react';
import Icon from './Icon';
import {
  showTrackList,
  nowPlaying,
  nowPaused,
  changeCurrentSong,
  updateTime,
  addToFavorites,
  removeFromFavorites,
  changeColor,
  newSelect,
} from '../actions';
import { connect } from 'react-redux';
import styled from 'styled-components';

class Player extends React.Component {
  constructor() {
    super();

    this.audioRef = createRef();
  }

  onTimeUpdateHandler = (e) => {
    const { updateTime } = this.props;
    const current = Math.trunc(e.target.currentTime);
    const minutes = Math.floor(current / 60);
    const seconds = current - minutes * 60;
    let strMin = minutes.toString();
    let strSec = seconds.toString();
    if (strMin.length === 1) strMin = `0${strMin}`;
    if (strSec.length === 1) strSec = `0${strSec}`;
    const str = `${strMin}:${strSec}`;
    updateTime([str, current]);
  };

  dragHandler = (e) => {
    this.audioRef.current.currentTime = e.target.value;
  };

  onBackwardClick = () => {
    const {
      trackList: { data },
      currentSong,
      changeCurrentSong,
      changeColor,
      newSelect,
    } = this.props;
    const previousSongIndex = data.indexOf(currentSong) - 1;
    if (previousSongIndex >= 0) changeCurrentSong(data[previousSongIndex]);
    changeColor();
    newSelect(data[previousSongIndex]);
  };

  onForwardClick = () => {
    const {
      trackList: { data },
      currentSong,
      changeCurrentSong,
      changeColor,
      newSelect,
    } = this.props;
    const nextSongIndex = data.indexOf(currentSong) + 1;
    if (nextSongIndex < data.length) changeCurrentSong(data[nextSongIndex]);
    changeColor();
    newSelect(data[nextSongIndex]);
  };

  onPlayPauseClick = (e) => {
    if (e.target.dataset.playpause === 'play') this.onPlayClick();
    if (e.target.dataset.playpause === 'pause') this.onPauseClick();
  };

  onPlayClick = () => {
    const { nowPlaying, playPause, currentSong, trackList, changeCurrentSong } = this.props;
    if (playPause === 'paused' && currentSong) nowPlaying();
    if (!currentSong) {
      changeCurrentSong(trackList.data[0]);
      nowPlaying();
    }
  };

  onPauseClick = () => {
    const { nowPaused, playPause } = this.props;
    if (playPause === 'playing') nowPaused();
  };

  toggleTrackList = (boolean) => {
    const { showTrackList } = this.props;
    showTrackList(boolean);
  };

  clickFav = () => {
    const { currentSong, favorites, addToFavorites, removeFromFavorites } = this.props;
    if (currentSong) {
      if (favorites.indexOf(currentSong) === -1) addToFavorites(currentSong);
      else removeFromFavorites(currentSong);
    }
  };

  componentDidUpdate() {
    const { playPause, currentSong } = this.props;
    if (playPause === 'playing' && currentSong) this.audioRef.current.play();
    if (playPause === 'paused' || !currentSong) this.audioRef.current.pause();
  }

  render() {
    const { currentSong, playPause, currentTime, favorites, color } = this.props;
    const songTitle = currentSong ? `${currentSong.title} - ${currentSong.artist.name}` : null;
    const preview = currentSong ? currentSong.preview : null;
    const currentPlayPause = playPause === 'playing' ? 'pause' : 'play';
    let heart;
    if (currentSong && favorites.indexOf(currentSong) !== -1) heart = 'full';
    else heart = 'empty';

    let endTime;
    let minutes;
    let seconds;
    if (currentSong) {
      minutes = Math.floor(currentSong.duration / 60);
      seconds = currentSong.duration - minutes * 60;
      endTime = `${minutes}:${seconds}`;
    } else endTime = '--';
    const actualTime = currentTime ? currentTime[0] : '--';
    const animationPercentage = currentTime ? (currentTime[1] / currentSong.duration) * 100 : null;
    const barAnim = currentTime
      ? {
          transform: `translateX(${animationPercentage}%)`,
        }
      : null;

    return (
      <StyledPlayer color={color}>
        <p className="song-title">{songTitle}</p>
        <div className="time-control">
          <p>{actualTime}</p>
          <div className="bar">
            <input
              min={0}
              max={currentSong ? currentSong.duration : 0}
              value={currentTime ? currentTime[1] : 0}
              onChange={this.dragHandler}
              type="range"
            />
            <div className="animate-bar" style={barAnim}></div>
          </div>
          <p>{endTime}</p>
        </div>
        <div className="play-control">
          <div onClick={this.onBackwardClick}>
            <Icon icon="backward" fill={color} />
          </div>
          <div onClick={this.onPlayPauseClick}>
            <Icon icon="playpause" current={currentPlayPause} fill={color} />
          </div>
          <div onClick={this.onForwardClick}>
            <Icon icon="forward" fill={color} />
          </div>
        </div>
        <div className="tracklist-and-like">
          <div onClick={() => this.toggleTrackList(!this.props.trackListIsOnScreen)}>
            <Icon icon="tracklist" fill={color} />
          </div>
          <div onClick={this.clickFav}>
            <Icon icon="fav" heart={heart} fill={color} />
          </div>
        </div>
        <audio onTimeUpdate={this.onTimeUpdateHandler} ref={this.audioRef} src={preview}></audio>
      </StyledPlayer>
    );
  }
}

const StyledPlayer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 3.5rem;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
  background-color: black;
  z-index: 13;
  p.song-title {
    color: white;
    position: absolute;
    left: 50%;
    top: 0.5rem;
    transform: translateX(-50%);
    font-size: 0.8rem;
    letter-spacing: 2px;
  }

  .time-control {
    flex-grow: 3;
    order: 1;
    width: 50%;
    display: flex;
    text-align: center;

    .bar {
      /* background-color: aqua; */
      background: ${(props) => (props.color ? props.color : 'black')};
      width: 100%;
      height: 3px;
      position: relative;
      border-radius: 1rem;
      overflow: hidden;
      align-self: center;
      transition: all 1s;
    }

    .animate-bar {
      background: rgb(204, 204, 204);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(0%);
      pointer-events: none;
    }

    input {
      width: 100%;
      height: 16px;
      cursor: pointer;
      -webkit-appearance: none;
      background-color: transparent;
      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 16px;
        width: 3px;
      }
    }
    p {
      padding: 0rem;
      font-size: 0.9rem;
      color: ${(props) => (props.color ? props.color : 'white')};
      flex-basis: 15%;
      transition: all 1s;
    }
  }

  .play-control {
    flex-grow: 1;
    width: 25%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    svg {
      cursor: pointer;
    }
  }

  .tracklist-and-like {
    width: 25%;
    justify-content: space-evenly;
    flex-grow: 1;
    order: 2;
    display: flex;
  }

  @media only screen and (max-width: 1000px) {
    .time-control {
      .animate-bar {
        cursor: default;
      }
    }

    .play-control {
      svg {
        cursor: default;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    p.song-title {
      display: none;
    }
    .time-control {
      display: none;
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    currentSong: state.currentSong,
    playPause: state.playPause,
    currentTime: state.currentTime,
    favorites: state.favorites,
    trackList: state.trackList,
    trackListIsOnScreen: state.showTrackList,
    color: state.color,
  };
};

export default connect(mapStateToProps, {
  showTrackList,
  nowPlaying,
  nowPaused,
  changeCurrentSong,
  updateTime,
  addToFavorites,
  removeFromFavorites,
  changeColor,
  newSelect,
})(Player);
