import { all, takeLatest, call, fork, put } from 'redux-saga/effects';

import api from '../../utils/api';
import { error } from '../../utils/toaster';
import { createNewUser, closeNewUserPopup } from '../../redux/ducks/dashboard/newUser';
import { closeEditUserPopup } from '../../redux/ducks/dashboard/editUser';


function* createNewUserIterator({ payload }) {
  try {
    yield call(api.post, '/user', payload, { suppressAuth: true });
    yield put(createNewUser.success());
    yield put(closeNewUserPopup());
    yield put(closeEditUserPopup());
  } catch (e) {
    yield call(console.log, '[ERROR] at createNewUserSaga', e);
    yield call(error, e.message);
    yield put(createNewUser.failure());
  }
}

function* createNewUserSaga() {
  yield takeLatest(
    createNewUser.REQUEST,
    createNewUserIterator
  );
}


export default function* () {
  yield all([
    fork(createNewUserSaga)
  ]);
}