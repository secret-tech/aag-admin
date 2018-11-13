import { all, takeLatest, call, fork, put } from 'redux-saga/effects';

import api from '../../utils/api';
import { error } from '../../utils/toaster';
import { fetchUsers } from '../../redux/ducks/dashboard/users';


function* fetchUsersIterator({ payload }) {
  try {
    const { data } = yield call(api.get, '/user', {}, { suppressAuth: true });
    yield call(console.log, data);
    yield put(fetchUsers.success());
  } catch (e) {
    yield call(console.log, '[ERROR] at signInSaga', e);
    yield call(error, e.message);
    yield put(fetchUsers.failure());
  }
}

function* fetchUsersSaga() {
  yield takeLatest(
    fetchUsers.REQUEST,
    fetchUsersIterator
  );
}


export default function* () {
  yield all([
    fork(fetchUsersSaga)
  ]);
}