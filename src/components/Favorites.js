import React from 'react';
import FavoritesHeader from './FavoritesHeader';
import FavoritesBody from './FavoritesBody';
import DownArrow from './icons/DownArrow';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { showFavorites } from '../actions';
import { motion, AnimatePresence } from 'framer-motion';

class Favorites extends React.Component {
  onCloseWindow = () => {
    const { showFavorites } = this.props;
    showFavorites(false);
  };
  render() {
    const { shouldShowFavorites } = this.props;
    return (
      <AnimatePresence>
        {shouldShowFavorites ? (
          <StyledDiv
            key="tracklist"
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', duration: 1 }}>
            <div className="close-div" onClick={this.onCloseWindow}>
              <DownArrow />
            </div>
            <FavoritesHeader />
            <FavoritesBody />
          </StyledDiv>
        ) : null}
      </AnimatePresence>
    );
  }
}

const StyledDiv = styled(motion.div)`
  position: absolute;
  top: 0;
  height: calc(100vh - 3.5rem);
  width: 100%;
  z-index: 12;
  background-color: black;

  display: flex;
  flex-direction: column;

  .close-div {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 3rem;
    top: 1rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      transform: translateY(-2px);
    }

    .close-button {
      font-size: 2.5rem;
      color: ${(props) => props.color || 'white'};
      transition: all 1s;
    }
  }

  @media only screen and (max-width: 1000px) {
    .close-div {
      cursor: default;
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    shouldShowFavorites: state.showFavorites,
  };
};

export default connect(mapStateToProps, { showFavorites })(Favorites);
