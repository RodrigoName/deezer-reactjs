import React from 'react';
import styled from 'styled-components';
import SongsList from './SongsList';
import { connect } from 'react-redux';

class FavoritesBody extends React.Component {
  render() {
    const songs = this.props.favorites;
    return (
      <StyledFavoritesBody className="BODY">
        <SongsList songs={songs} from="favorites" />
      </StyledFavoritesBody>
    );
  }
}

const StyledFavoritesBody = styled.div`
  margin-top: 1rem;
  flex-basis: 95%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

export default connect(mapStateToProps)(FavoritesBody);
