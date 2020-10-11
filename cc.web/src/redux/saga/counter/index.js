import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects';
import * as sideEffects from './counter';
import {ACTIONS} from '../../Counter'

export default function createCounterSaga() {
  // Create any common func for api call if required.

  return function* counter() {
    yield takeLatest(ACTIONS.INCREASE_COUNTER, sideEffects.increaseCounter);
    yield takeLatest(ACTIONS.DECREASE_COUNTER, sideEffects.decreaseCounter);
  };
}