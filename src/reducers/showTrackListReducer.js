const showTrackList = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_TRACKLIST':
      return action.payload;
    default:
      return state;
  }
};

export default showTrackList;
