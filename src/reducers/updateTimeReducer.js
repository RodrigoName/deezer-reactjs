const updateTimeReducer = (state = null, action) => {
  switch (action.type) {
    case 'UPDATE_TIME':
      return action.payload;
    default:
      return state;
  }
};

export default updateTimeReducer;
