import { all, takeLatest, call, fork, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import api from '../../utils/api';
import { setToken } from '../../utils/auth';
import { error } from '../../utils/toaster';
import { signUp } from '../../redux/ducks/auth/signUp';

import * as routes from '../../routes';


function* signUpIterator({ payload }) {
  try {
    const { data } = yield call(api.post, '/tenant', payload, { suppressAuth: false });
    yield put(signUp.success());
    yield call(setToken, data.token);
    yield put(push(routes.USERS));
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