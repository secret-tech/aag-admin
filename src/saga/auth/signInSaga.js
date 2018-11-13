import { all, takeLatest, call, fork, put } from 'redux-saga/effects';

import api from '../../utils/api';
import { error } from '../../utils/toaster';
import { setToken } from '../../utils/auth';
import { signIn } from '../../redux/ducks/auth/signIn';


function* signInIterator({ payload }) {
  try {
    const { data } = yield call(api.post, '/tenant/login', payload, { suppressAuth: false });
    yield call(setToken, data.accessToken);
    yield call(console.log, data);
    yield put(signIn.success());
  } catch (e) {
    yield call(console.log, '[ERROR] at signInSaga', e);
    yield call(error, e.message);
    yield put(signIn.failure());
  }
}

function* signInSaga() {
  yield takeLatest(
    signIn.REQUEST,
    signInIterator
  );
}


export default function* () {
  yield all([
    fork(signInSaga)
  ]);
}