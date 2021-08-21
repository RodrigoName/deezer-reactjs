const showTrackList = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SEARCH':
      return action.payload;
    default:
      return state;
  }
};

export default showTrackList;
