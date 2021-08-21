const selectReducer = (state = {}, action) => {
  switch (action.type) {
    case 'NEW_SELECT':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default selectReducer;
