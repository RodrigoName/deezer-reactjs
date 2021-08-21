import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class FavoritesHeader extends React.Component {
  render() {
    const { color } = this.props;
    return (
      <React.Fragment>
        <StyledDiv color={color}>
          <p>My Favorites Songs</p>
        </StyledDiv>
      </React.Fragment>
    );
  }
}

const StyledDiv = styled.div`
  flex-basis: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.color ? props.color : 'white')};
  font-size: 2rem;
  padding-top: 1rem;
  font-family: sans-serif;
  cursor: default;
  transition: all 1s;

  @media only screen and (max-width: 700px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

const mapStateToProps = (state) => {
  return {
    selected: state.selected,
    color: state.color,
  };
};

export default connect(mapStateToProps)(FavoritesHeader);
