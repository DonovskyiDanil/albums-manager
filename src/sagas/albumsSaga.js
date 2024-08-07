import { call, put, takeEvery } from 'redux-saga/effects';
import dataService from '../data-service';
import ACTION_TYPES from '/Users/danildonovskij/Desktop/program/React/Albums/albums-manager/src/store/actions/actionTypes.js'; 


function* fetchAlbums() {
  try {
    const response = yield call(dataService.get, '/albums');
    yield put({ type: ACTION_TYPES.GET_ALBUMS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: ACTION_TYPES.GET_ALBUMS_ERROR, payload: error.message });
  }
}


export function* watchFetchAlbums() {
  yield takeEvery(ACTION_TYPES.GET_ALBUMS_REQUEST, fetchAlbums);
}
