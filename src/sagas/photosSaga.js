import { call, put, takeEvery } from 'redux-saga/effects';
import dataService from '../data-service';
import ACTION_TYPES from '/Users/danildonovskij/Desktop/program/React/Albums/albums-manager/src/store/actions/actionTypes.js'; 


function* fetchPhotos(action) {
  try {
    const response = yield call(dataService.get, `/photos?albumId=${action.payload}`);
    yield put({ type: ACTION_TYPES.GET_ALBUM_PHOTOS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: ACTION_TYPES.GET_ALBUM_PHOTOS_ERROR, payload: error.message });
  }
}


export function* watchFetchPhotos() {
  yield takeEvery(ACTION_TYPES.GET_ALBUM_PHOTOS_REQUEST, fetchPhotos);
}
