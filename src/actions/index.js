import deezer from '../api/deezer';

export const fetchPopular = () => {
  return async (dispatch) => {
    const response = await deezer.get('/playlist/948759923');

    dispatch({ type: 'FETCH_POPULAR', payload: response.data });
  };
};

export const fetchSearchResults = (e) => {
  return async (dispatch) => {
    const response = await deezer.get('/search', { params: { q: e.target.value } });

    dispatch({ type: 'FETCH_SEARCH', payload: response.data.data });
  };
};

export const fetchSearchTracks = (e) => {
  return async (dispatch) => {
    const response = await deezer.get('/search', { params: { q: `track:"${e.target.value}"` } });

    dispatch({ type: 'FETCH_SEARCH_TRACKS', payload: response.data.data });
  };
};

export const fetchSearchArtists = (e) => {
  return async (dispatch) => {
    const response = await deezer.get('/search', { params: { q: `artist:"${e.target.value}"` } });

    dispatch({ type: 'FETCH_SEARCH_ARTISTS', payload: response.data.data });
  };
};

export const fetchSearchAlbums = (e) => {
  return async (dispatch) => {
    const response = await deezer.get('/search', { params: { q: `album:"${e.target.value}"` } });

    dispatch({ type: 'FETCH_SEARCH_ALBUMS', payload: response.data.data });
  };
};

export const deleteSearch = () => {
  return { type: 'DELETE_SEARCH' };
};

export const newSelect = (properties) => {
  return { type: 'NEW_SELECT', payload: properties };
};

export const defineTrackList = (properties) => {
  let trackList;
  if (!properties.type) {
    trackList = properties;
  }
  if (properties.type === 'playlist') {
    trackList = properties.tracks.data;
  }
  return { type: 'DEFINE_TRACKLIST', payload: trackList };
};

export const showTrackList = (boolean) => {
  return { type: 'SHOW_TRACKLIST', payload: boolean };
};

export const showFavorites = (boolean) => {
  return { type: 'SHOW_FAVORITES', payload: boolean };
};

export const addToFavorites = (song) => {
  return { type: 'ADD_FAVORITE', payload: song };
};

export const removeFromFavorites = (song) => {
  return { type: 'REMOVE_FAVORITE', payload: song };
};

export const changeCurrentSong = (song) => {
  return { type: 'CHANGE_CURRENT_SONG', payload: song };
};

export const nowPlaying = () => {
  return { type: 'PLAY' };
};

export const nowPaused = () => {
  return { type: 'PAUSE' };
};

export const updateTime = (array) => {
  return { type: 'UPDATE_TIME', payload: array };
};

export const generateRGB = () => {
  let r = 0;
  let g = 0;
  let b = 0;
  while (r <= 60 && g <= 60 && b <= 60) {
    r = Math.trunc(Math.random() * 255) + 1;
    g = Math.trunc(Math.random() * 255) + 1;
    b = Math.trunc(Math.random() * 255) + 1;
  }
  return `rgb(${r},${g},${b})`;
};

export const changeColor = () => {
  const color = generateRGB();
  return { type: 'CHANGE_COLOR', payload: color };
};

export const toggleSearchWingow = (boolean) => {
  return { type: 'TOGGLE_SEARCH', payload: boolean };
};

export const changeSearchOption = (searchOption) => {
  return { type: 'CHANGE_SEARCH', payload: searchOption };
};

export const changeAnimationDivLeft = (value) => {
  return { type: 'CHANGE_LEFT', payload: value };
};
