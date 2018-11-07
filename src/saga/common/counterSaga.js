import { all, takeLatest, call, fork } from 'redux-saga/effects';

import { COUNTER_INCREMENT } from '../../redux/ducks/common/counter';


function* counterIterator() {
  yield call(console.log, 'saga called');
}

function* counterSaga() {
  yield takeLatest(
    COUNTER_INCREMENT,
    counterIterator
  );
}


export default function* () {
  yield all([
    fork(counterSaga)
  ]);
}