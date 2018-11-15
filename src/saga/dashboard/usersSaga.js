import { all, takeLatest, call, fork, put } from 'redux-saga/effects';

import api from '../../utils/api';
import { error } from '../../utils/toaster';
import { fetchUsers } from '../../redux/ducks/dashboard/users';


function* fetchUsersIterator({ payload }) {
  try {
    const params = Object.keys(payload).map((key) => payload[key]
      ? `${encodeURIComponent(key)}=${encodeURIComponent(payload[key])}`
      : null).join('&');

    const { data } = yield call(api.get, `/user?${params}`, {}, { suppressAuth: true });
    yield put(fetchUsers.success(data));
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