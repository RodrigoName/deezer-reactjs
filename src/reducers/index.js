import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
import fetchReducer from './fetchReducer';
import selectReducer from './selectReducer';
import defineTrackListReducer from './deFineTrackListReducer';
import showTrackListReducer from './showTrackListReducer';
import favoritesReducer from './favoritesReducer';
import changeCurrentSongReducer from './changeCurrentSongReducer';
import playPauseReducer from './playPauseReducer';
import updateTimeReducer from './updateTimeReducer';
import changeColorReducer from './changeColorReducer';
import toggleSearchWindowReducer from './toggleSearchWindowReducer';
import changeSearchOptionReducer from './changeSearchOptionReducer';
import changeAnimationDivReducer from './changeAnimationDivReducer';
import showFavoritesReducer from './showFavoritesReducer';

export default combineReducers({
  form: reducer,
  searchOption: changeSearchOptionReducer,
  currentSong: changeCurrentSongReducer,
  playPause: playPauseReducer,
  currentTime: updateTimeReducer,
  songs: fetchReducer,
  favorites: favoritesReducer,
  selected: selectReducer,
  trackList: defineTrackListReducer,
  showTrackList: showTrackListReducer,
  showFavorites: showFavoritesReducer,
  color: changeColorReducer,
  showSearchWindow: toggleSearchWindowReducer,
  animationDivLeft: changeAnimationDivReducer,
});
