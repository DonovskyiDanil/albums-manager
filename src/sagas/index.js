import { all } from 'redux-saga/effects';
import { watchUserActions } from './usersSaga';
import { watchFetchPhotos } from './photosSaga';
import { watchFetchAlbums } from './albumsSaga';

function* rootSaga() {
  yield all([
    watchUserActions(),
    watchFetchPhotos(),
    watchFetchAlbums()
  ]);
}

export default rootSaga;
