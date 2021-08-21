const changeCurrentSongReducer = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_CURRENT_SONG':
      return action.payload;
    default:
      return state;
  }
};
export default changeCurrentSongReducer;
