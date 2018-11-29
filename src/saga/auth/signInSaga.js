import { all, takeLatest, call, fork, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import api from '../../utils/api';
import { error } from '../../utils/toaster';
import { setToken } from '../../utils/auth';
import { signIn } from '../../redux/ducks/auth/signIn';

import * as routes from '../../routes';


function* signInIterator({ payload }) {
  try {
    const { data } = yield call(api.post, '/tenant/login', payload, { suppressAuth: false });
    yield call(setToken, data.token);
    yield put(signIn.success());
    yield put(push(routes.USERS));
  } catch (e) {
    yield call(console.log, '[ERROR] at signInSaga', e.message);
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