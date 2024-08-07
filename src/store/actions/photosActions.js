import ACTION_TYPES from './actionTypes';


export const fetchAlbumPhotosAction = (albumId) => ({
  type: ACTION_TYPES.GET_ALBUM_PHOTOS_ACTION,
  payload: albumId,
});

export const fetchAlbumPhotosRequest = () => ({
  type: ACTION_TYPES.GET_ALBUM_PHOTOS_REQUEST,
});

export const fetchAlbumPhotosSuccess = (payload) => ({
  type: ACTION_TYPES.GET_ALBUM_PHOTOS_SUCCESS,
  payload,
});

export const fetchAlbumPhotosError = (payload) => ({
  type: ACTION_TYPES.GET_ALBUM_PHOTOS_ERROR,
  payload,
});
