import React from 'react';
import styled from 'styled-components';
import SongsList from './SongsList';
import { connect } from 'react-redux';

class TrackListBody extends React.Component {
  render() {
    const songs = this.props.trackList.data;
    return (
      <StyledTrackListBody className="BODY">
        <SongsList songs={songs} from="tracklist" />
      </StyledTrackListBody>
    );
  }
}

const StyledTrackListBody = styled.div`
  flex-basis: 70%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 450px) {
    /* flex-basis: 85%; */
  }
`;

const mapStateToProps = (state) => {
  return {
    trackList: state.trackList,
  };
};

export default connect(mapStateToProps)(TrackListBody);
