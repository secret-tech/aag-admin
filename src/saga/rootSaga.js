import { all, fork } from 'redux-saga/effects';

import counter from './common/counterSaga';

import signInSaga from './auth/signInSaga';

export default function* () {
  yield all([
    fork(counter),
    fork(signInSaga)
  ]);
}
