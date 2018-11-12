import { all, takeLatest, call, fork, put } from 'redux-saga/effects';

import { signIn } from '../../redux/ducks/auth/signIn';


function* signInIterator({ payload }) {
  try {
    yield call(console.log, '[POST] request to $HOST/sign-in', payload);
    yield put(signIn.success());
  } catch (e) {
    yield call(console.log, '[ERR] shit happend at $HOST/sign-in', e);
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