import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  photos: [],
  loading: false,
  error: null,
};

const photosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.GET_ALBUM_PHOTOS_REQUEST:
      return { ...state, loading: true, error: null };
    case ACTION_TYPES.GET_ALBUM_PHOTOS_SUCCESS:
      return { ...state, photos: payload, loading: false };
    case ACTION_TYPES.GET_ALBUM_PHOTOS_ERROR:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default photosReducer;
