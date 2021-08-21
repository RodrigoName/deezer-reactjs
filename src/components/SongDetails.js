import React from 'react';
import Header from './Header';
import Player from './Player';

class SongDetails extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Player />
      </div>
    );
  }
}

export default SongDetails;
