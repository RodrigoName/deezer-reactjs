const INITIAL_STATE = {
  popular: {},
  search: {},
};

const fetchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_POPULAR':
      return { ...state, popular: action.payload };
    case 'FETCH_SEARCH':
      return { ...state, search: { ...state.search, all: action.payload } };
    case 'FETCH_SEARCH_TRACKS':
      return { ...state, search: { ...state.search, tracks: action.payload } };
    case 'FETCH_SEARCH_ARTISTS':
      return { ...state, search: { ...state.search, artists: action.payload } };
    case 'FETCH_SEARCH_ALBUMS':
      return { ...state, search: { ...state.search, albums: action.payload } };
    case 'DELETE_SEARCH':
      return { ...state, search: {} };
    default:
      return state;
  }
};

export default fetchReducer;
