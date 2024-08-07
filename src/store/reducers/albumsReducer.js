import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  albums: [],
  loading: false,
  error: null,
};

const albumsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.GET_ALBUMS_REQUEST:
      return { ...state, loading: true };
    case ACTION_TYPES.GET_ALBUMS_SUCCESS:
      return { ...state, albums: payload, loading: false };
    case ACTION_TYPES.GET_ALBUMS_ERROR:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default albumsReducer;
