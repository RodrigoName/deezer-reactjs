import React from 'react';
import Home from '../pages/Home';
import GlobalStyle from './GlobalStyle';

class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Home />
        {/* <SongDetails /> */}
      </div>
    );
  }
}

export default App;
