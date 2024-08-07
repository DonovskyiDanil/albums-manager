import ACTION_TYPES from './actionTypes';


export const fetchAllAlbumsAction = () => ({
  type: ACTION_TYPES.GET_ALBUMS_ACTION,
});

export const fetchAllAlbumsRequest = () => ({
  type: ACTION_TYPES.GET_ALBUMS_REQUEST,
});

export const fetchAllAlbumsSuccess = (payload) => ({
  type: ACTION_TYPES.GET_ALBUMS_SUCCESS,
  payload,
});

export const fetchAllAlbumsError = (payload) => ({
  type: ACTION_TYPES.GET_ALBUMS_ERROR,
  payload,
});


export const fetchUserAlbumAction = (albumId) => ({
  type: ACTION_TYPES.GET_USER_ALBUM_ACTION,
  payload: albumId,
});

export const fetchUserAlbumRequest = () => ({
  type: ACTION_TYPES.GET_USER_ALBUM_REQUEST,
});

export const fetchUserAlbumSuccess = (payload) => ({
  type: ACTION_TYPES.GET_USER_ALBUM_SUCCESS,
  payload,
});

export const fetchUserAlbumError = (payload) => ({
  type: ACTION_TYPES.GET_USER_ALBUM_ERROR,
  payload,
});
