import { all, takeLatest, call, fork, put } from 'redux-saga/effects';

import api from '../../utils/api';
import { error } from '../../utils/toaster';
import { signUp } from '../../redux/ducks/auth/signUp';


function* signUpIterator({ payload }) {
  try {
    yield call(console.log, payload);
    yield call(api.post, '/tenant', payload, { suppressAuth: false });
    yield put(signUp.success());
  } catch (e) {
    yield call(console.log, '[ERROR] at signUpSaga', e);
    yield call(error, e.message);
    yield put(signUp.failure());
  }
}

function* signUpSaga() {
  yield takeLatest(
    signUp.REQUEST,
    signUpIterator
  );
}


export default function* () {
  yield all([
    fork(signUpSaga)
  ]);
}