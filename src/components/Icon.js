import React from 'react';
import styled from 'styled-components';

class Icon extends React.Component {
  renderIcon = () => {
    switch (this.props.icon) {
      case 'backward':
        return (
          <StyledSvg
            fill={this.props.fill}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <path d="M13 12l11-7v14l-11-7zm-11 0l11-7v14l-11-7zm-2 6h2v-12h-2v12z" />
          </StyledSvg>
        );
      case 'forward':
        return (
          <StyledSvg
            fill={this.props.fill}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <path d="M0 19v-14l11 7-11 7zm11 0v-14l11 7-11 7zm13-13h-2v12h2v-12z" />
          </StyledSvg>
        );
      case 'playpause':
        if (this.props.current === 'play') {
          return (
            <StyledSvg
              data-playpause="play"
              fill={this.props.fill}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24">
              <path data-playpause="play" d="M3 22v-20l18 10-18 10z" />
            </StyledSvg>
          );
        }
        return (
          <StyledSvg
            data-playpause="pause"
            fill={this.props.fill}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <path data-playpause="pause" d="M10 24h-6v-24h6v24zm10-24h-6v24h6v-24z" />
          </StyledSvg>
        );
      case 'tracklist':
        return (
          <StyledSvg
            fill={this.props.fill}
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd">
            <path d="M12 21h-12v-2h12v2zm4-9l8-1v6.681c-.002 1.555-1.18 2.319-2.257 2.319-.907 0-1.743-.542-1.743-1.61 0-.96.903-1.852 2-2.073v-2.317l-4 .5v4.181c-.002 1.555-1.18 2.319-2.257 2.319-.907 0-1.743-.542-1.743-1.61 0-.96.903-1.852 2-2.073v-5.317zm-4 4.976h-12v-2h12v2zm0-3.976h-12v-2h12v2zm12-4h-24v-2h24v2zm0-4h-24v-2h24v2z" />
          </StyledSvg>
        );
      case 'fav':
        if (this.props.heart === 'empty') {
          return (
            <StyledSvg
              data-type="fav"
              fill={this.props.fill}
              className="empty"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24">
              <path
                data-type="fav"
                d="M17.516 3c2.382 0 4.487 1.564 4.487 4.712 0 4.963-6.528 8.297-10.003 11.935-3.475-3.638-10.002-6.971-10.002-11.934 0-3.055 2.008-4.713 4.487-4.713 3.18 0 4.846 3.644 5.515 5.312.667-1.666 2.333-5.312 5.516-5.312zm0-2c-2.174 0-4.346 1.062-5.516 3.419-1.17-2.357-3.342-3.419-5.515-3.419-3.403 0-6.484 2.39-6.484 6.689 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-4.586-3.414-6.689-6.484-6.689z"
              />
            </StyledSvg>
          );
        }
        return (
          <StyledSvg
            data-type="fav"
            fill={this.props.fill}
            className="filled"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <path
              data-type="fav"
              d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"
            />
          </StyledSvg>
        );

      default:
        return <div></div>;
    }
  };
  render() {
    return <React.Fragment>{this.renderIcon()}</React.Fragment>;
  }
}

const StyledSvg = styled.svg`
  cursor: pointer;
  fill: ${(props) => (props.fill ? props.fill : 'black')};
  transition: all 1s;

  @media only screen and (max-width: 1000px) {
    cursor: default;
  }
`;

export default Icon;
