const playPauseReducer = (state = 'paused', action) => {
  switch (action.type) {
    case 'PLAY':
      return 'playing';
    case 'PAUSE':
      return 'paused';
    default:
      return state;
  }
};

export default playPauseReducer;
