const INITIAL_STATE = localStorage.getItem('favoriteSongs')
  ? JSON.parse(localStorage.getItem('favoriteSongs'))
  : [];

const favoritesReducer = (state = INITIAL_STATE, action) => {
  let newFav;
  let stringified;
  switch (action.type) {
    case 'ADD_FAVORITE':
      newFav = [...state, action.payload];
      stringified = JSON.stringify(newFav);
      localStorage.setItem('favoriteSongs', stringified);
      return newFav;
    case 'REMOVE_FAVORITE':
      newFav = state.filter((element) => element !== action.payload);
      stringified = JSON.stringify(newFav);
      localStorage.setItem('favoriteSongs', stringified);
      return newFav;
    default:
      return state;
  }
};
export default favoritesReducer;
