import React from 'react';
import SongsList from './SongsList';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';
import { css } from '@emotion/react';

class SearchBody extends React.Component {
  renderResults = () => {
    const { searchForm, songs, stateSearchOption } = this.props;
    if (searchForm.values && !songs.search[stateSearchOption]) {
      const { color } = this.props;
      return (
        <div>
          <ClipLoader color={color} css={loadingCSS} />
        </div>
      );
    }

    if (Object.keys(songs.search).length > 0) {
      let list;
      if (stateSearchOption === 'tracks') list = songs.search.tracks;
      if (stateSearchOption === 'artists') list = songs.search.artists;
      if (stateSearchOption === 'albums') list = songs.search.albums;
      return <SongsList songs={list} from="search" />;
    }
  };

  render() {
    return <StyledSearchBody>{this.renderResults()}</StyledSearchBody>;
  }
}

const StyledSearchBody = styled.div`
  margin-top: 1rem;
  flex-basis: 80%;
  background-color: #333;
  /* height: calc(100vh - 15rem); */
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
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
    searchForm: state.form.searchForm,
    stateSearchOption: state.searchOption,
    songs: state.songs,
    color: state.color,
  };
};

export default connect(mapStateToProps)(SearchBody);
