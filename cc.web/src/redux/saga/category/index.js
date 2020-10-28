import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects';
import * as sideEffects from './category';
import { ACTIONS } from '../../category'

export default function createCounterSaga() {
  // Create any common func for api call if required.

  return function* counter() {
    yield takeLatest(ACTIONS.INCREASE_COUNTER, sideEffects.increaseCounter);
    yield takeLatest(ACTIONS.DECREASE_COUNTER, sideEffects.decreaseCounter);
  };
}