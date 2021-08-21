const changeAnimationDivReducer = (state = '4rem', action) => {
  switch (action.type) {
    case 'CHANGE_LEFT':
      return action.payload;
    default:
      return state;
  }
};
export default changeAnimationDivReducer;
