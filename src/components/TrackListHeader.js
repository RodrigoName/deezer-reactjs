import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { lightGrey } from '../styles';

class TrackListHeader extends React.Component {
  render() {
    const { color } = this.props;
    if (this.props.selected.type === 'playlist') {
      const { title, duration, nb_tracks, picture_medium } = this.props.selected;
      let minutes, seconds, hours;
      if (duration > 3599) {
        hours = Math.floor(duration / 3600);
        minutes = Math.floor((duration - hours * 3600) / 60);
        seconds = duration - hours * 3600 - minutes * 60;
      } else {
        hours = null;
        minutes = Math.floor(duration / 60);
        seconds = duration - minutes * 60;
      }

      return (
        <React.Fragment>
          <StyledDiv color={color}>
            <img src={picture_medium} alt="" />
            <div className="details">
              <h1>{title}</h1>
              <p>{nb_tracks} Tracks</p>
              <p>{hours ? `${hours}h ${minutes}m` : `${minutes}m ${seconds}s`}</p>
            </div>
          </StyledDiv>
        </React.Fragment>
      );
    }

    if (this.props.object.type === 'track') {
      const { title, duration, md5_image, artist } = this.props.object;
      const minutes = Math.floor(duration / 60);
      const seconds = duration - minutes * 60;

      return (
        <React.Fragment>
          <StyledDiv color={color}>
            <img
              src={`https://e-cdns-images.dzcdn.net/images/cover/${md5_image}/264x264-000000-80-0-0.jpg`}
              alt="song cover"
            />
            <div className="details">
              <h1>{title}</h1>
              <p>{artist.name}</p>
              <p>{`${minutes}m ${seconds}s`}</p>
            </div>
          </StyledDiv>
        </React.Fragment>
      );
    }
  }
}

const StyledDiv = styled.div`
  flex-basis: 30%;
  padding: 2rem;
  display: flex;
  img {
    &:hover {
      outline: 1px solid ${(props) => (props.color ? props.color : 'none')};
    }
  }

  .details {
    font-size: 1.5rem;
    font-family: sans-serif;
    color: ${lightGrey};
    align-self: flex-end;
    margin-left: 1rem;

    h1 {
      margin-top: 0.3rem;
    }

    p {
      font-size: 1rem;
      margin-top: 0.1rem;
    }
  }

  @media only screen and (max-width: 700px) {
    .details {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 450px) {
    /* flex-basis: 15%; */

    img {
      margin: 0 auto;
      height: 10rem;
    }
    .details {
      display: none;
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    selected: state.selected,
    color: state.color,
  };
};

export default connect(mapStateToProps)(TrackListHeader);
