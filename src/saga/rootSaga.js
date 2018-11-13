import { all, fork } from 'redux-saga/effects';

import counter from './common/counterSaga';

import signUpSaga from './auth/signUpSaga';
import signInSaga from './auth/signInSaga';
import signOutSaga from './auth/signOutSaga';

export default function* () {
  yield all([
    fork(counter),
    fork(signUpSaga),
    fork(signInSaga),
    fork(signOutSaga)
  ]);
}
