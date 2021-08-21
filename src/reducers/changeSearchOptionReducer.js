const changeSearchOptionReducer = (state = 'tracks', action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH':
      return action.payload;
    default:
      return state;
  }
};
export default changeSearchOptionReducer;
