import { call, put, takeEvery } from 'redux-saga/effects';
import ACTION_TYPES from '/Users/danildonovskij/Desktop/program/React/Albums/albums-manager/src/store/actions/actionTypes.js';
import dataService from '../data-service';  


const fetchAllUsersSuccess = (payload) => ({ type: ACTION_TYPES.GET_USERS_SUCCESS, payload });
const fetchAllUsersError = (payload) => ({ type: ACTION_TYPES.GET_USERS_ERROR, payload });
const createUserSuccess = (payload) => ({ type: ACTION_TYPES.POST_USER_SUCCESS, payload });
const createUserError = (payload) => ({ type: ACTION_TYPES.POST_USER_ERROR, payload });
const updateUserSuccess = (payload) => ({ type: ACTION_TYPES.PUT_USER_SUCCESS, payload });
const updateUserError = (payload) => ({ type: ACTION_TYPES.PUT_USER_ERROR, payload });
const deleteUserSuccess = (payload) => ({ type: ACTION_TYPES.DELETE_USER_SUCCESS, payload });
const deleteUserError = (payload) => ({ type: ACTION_TYPES.DELETE_USER_ERROR, payload });


function* fetchAllUsersSaga() {
  try {
    const users = yield call(dataService.get, '/users');
    yield put(fetchAllUsersSuccess(users.data));
  } catch (error) {
    yield put(fetchAllUsersError(error.message));
  }
}

function* createUserSaga(action) {
  try {
    const newUser = yield call(dataService.post, '/users', action.payload);
    yield put(createUserSuccess(newUser.data));
  } catch (error) {
    yield put(createUserError(error.message));
  }
}


function* updateUserSaga(action) {
  try {
    const updatedUser = yield call(dataService.put, `/users/${action.payload.id}`, action.payload);
    yield put(updateUserSuccess(updatedUser.data));
  } catch (error) {
    yield put(updateUserError(error.message));
  }
}


function* deleteUserSaga(action) {
  try {
    yield call(dataService.delete, `/users/${action.payload}`);
    yield put(deleteUserSuccess(action.payload));
  } catch (error) {
    yield put(deleteUserError(error.message));
  }
}


export function* watchUserActions() {
  yield takeEvery(ACTION_TYPES.GET_USERS_ACTION, fetchAllUsersSaga);
  yield takeEvery(ACTION_TYPES.POST_USER_ACTION, createUserSaga);
  yield takeEvery(ACTION_TYPES.PUT_USER_ACTION, updateUserSaga);
  yield takeEvery(ACTION_TYPES.DELETE_USER_ACTION, deleteUserSaga);
}
