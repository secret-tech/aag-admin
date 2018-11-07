import { all, fork } from 'redux-saga/effects';

import counter from './common/counterSaga';

export default function* () {
  yield all([
    fork(counter)
  ]);
}
