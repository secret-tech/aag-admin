import { all, takeLatest, call, fork, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import api from '../../utils/api';
import { error } from '../../utils/toaster';
import { getToken, removeToken } from '../../utils/auth';
import { signOut } from '../../redux/ducks/auth/signOut';

import * as routes from '../../routes';


function* signOutIterator({ payload }) {
  try {
    const token = yield call(getToken);
    yield call(api.post, '/tenant/logout', { token }, { suppressAuth: false });
    yield call(removeToken);
    yield put(signOut.success());
    yield put(push(routes.SIGN_IN));
  } catch (e) {
    yield call(console.log, '[ERROR] at signOutSaga', e);
    yield call(error, e.message);
    yield put(signOut.failure());
  }
}

function* signOutSaga() {
  yield takeLatest(
    signOut.REQUEST,
    signOutIterator
  );
}


export default function* () {
  yield all([
    fork(signOutSaga)
  ]);
}