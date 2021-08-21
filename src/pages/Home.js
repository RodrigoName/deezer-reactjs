import React from 'react';
import SearchBar from '../components/SearchBar';
import Favorites from '../components/Favorites';
import Player from '../components/Player';
import Header from '../components/Header';
import { connect } from 'react-redux';
import {
  fetchPopular,
  fetchSearchResults,
  deleteSearch,
  newSelect,
  defineTrackList,
} from '../actions';
import styled from 'styled-components';
import TrackList from '../components/TrackList';
import SearchWindow from '../components/SearchWindow';
import ClipLoader from 'react-spinners/ClipLoader';
import { css } from '@emotion/react';

class Home extends React.Component {
  componentDidMount() {
    // this.props.fetchPopular();
    this.fetchState();
  }

  onSearchChange = (e) => {
    if (e.target.value !== '') {
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => this.props.fetchSearchResults(e), 500);
    } else {
      this.props.deleteSearch();
    }
  };

  fetchState = () => {
    this.props.fetchPopular().then(() => {
      const { popular } = this.props;
      this.props.newSelect({ ...popular });
      this.props.defineTrackList({ ...popular });
    });
  };

  renderHeader = () => {
    const { selected, trackList, color } = this.props;
    if (Object.entries(selected).length === 0)
      return (
        <div>
          <ClipLoader color={color} css={loadingCSS} />
        </div>
      );
    return (
      <React.Fragment>
        <Header object={selected} />

        <TrackList object={selected} trackList={trackList} />
        <Favorites />

        <Player />
      </React.Fragment>
    );
  };

  render() {
    return (
      <StyledHomeDiv>
        <SearchBar onSearchChange={this.onSearchChange} />
        <SearchWindow />
        {this.renderHeader()}
      </StyledHomeDiv>
    );
  }
}

const StyledHomeDiv = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const loadingCSS = css`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const mapStateToProps = (state) => {
  return {
    popular: state.songs.popular,
    search: state.songs.search,
    selected: state.selected,
    showTrackList: state.showTrackList.show,
    trackList: state.trackList,
    color: state.color,
  };
};

export default connect(mapStateToProps, {
  fetchPopular,
  fetchSearchResults,
  deleteSearch,
  newSelect,
  defineTrackList,
})(Home);
