import { all, takeLatest, call, fork, put } from 'redux-saga/effects';

import api from '../../utils/api';
import { error } from '../../utils/toaster';
import { fetchUsers } from '../../redux/ducks/dashboard/users';
import { createNewUser } from '../../redux/ducks/dashboard/newUser';
import { updateUser } from '../../redux/ducks/dashboard/editUser';


function* fetchUsersIterator({ payload }) {
  try {
    const params = payload ? Object.keys(payload).reduce((acc, key, index) => {
      if (payload[key]) return `${acc}${encodeURIComponent(key)}=${encodeURIComponent(payload[key])}&`;
      return acc;
    }, '') : '';

    const { data } = yield call(api.get, `/user?${params}`, {}, { suppressAuth: true });
    yield call(console.log, '--------- merge users ---------', data);
    yield put(fetchUsers.success(data));
  } catch (e) {
    yield call(console.log, '[ERROR] at signInSaga', e);
    yield call(error, e.message);
    yield put(fetchUsers.failure());
  }
}

function* fetchUsersSaga() {
  yield all([
    takeLatest(
      fetchUsers.REQUEST,
      fetchUsersIterator
    ),
    takeLatest(
      createNewUser.SUCCESS,
      fetchUsersIterator
    ),
    takeLatest(
      updateUser.SUCCESS,
      fetchUsersIterator
    ),
  ]);
}


export default function* () {
  yield all([
    fork(fetchUsersSaga)
  ]);
}