import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects';
import * as sideEffects from './landing';
import { ACTIONS } from '../../Landing'

export default function createCounterSaga() {
  // Create any common func for api call if required.

  return function* counter() {
    yield takeLatest(ACTIONS.GET_ALL_PRODUCTS, sideEffects.validatePayloadAndGetProducts);
    };
}