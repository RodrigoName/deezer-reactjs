import React from 'react';
import SearchOptions from './SearchOptions';
import SearchBody from './SearchBody';
import { connect } from 'react-redux';
import { toggleSearchWingow } from '../actions';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

class SearchWindow extends React.Component {
  onCloseWindow = () => {
    const { toggleSearchWingow } = this.props;
    toggleSearchWingow(false);
  };

  render() {
    const { color, showSearchWindow } = this.props;
    return (
      <AnimatePresence>
        {showSearchWindow ? (
          <StyledSearchWindow
            color={color}
            key="searchwindow"
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', duration: 1 }}>
            <div className="close-div" onClick={this.onCloseWindow}>
              <span className="close-button">&times;</span>
            </div>
            <SearchOptions />
            <SearchBody />
          </StyledSearchWindow>
        ) : null}
      </AnimatePresence>
    );
  }
}

const StyledSearchWindow = styled(motion.div)`
  height: calc(100vh - 3.5rem);
  width: 100%;
  background-color: #333;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

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
    right: 2rem;
    top: 1rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      /* transform: translateY(-2px); */
      border: 1px solid ${(props) => props.color || 'white'};
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
    color: state.color,
    showSearchWindow: state.showSearchWindow,
  };
};

export default connect(mapStateToProps, { toggleSearchWingow })(SearchWindow);
