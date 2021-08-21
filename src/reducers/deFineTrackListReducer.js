const defineTrackListReducer = (state = {}, action) => {
  switch (action.type) {
    case 'DEFINE_TRACKLIST':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default defineTrackListReducer;
