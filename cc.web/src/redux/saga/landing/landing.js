// Imports: Dependencies
import {
  delay,
  takeEvery,
  takeLatest,
  put,
  call
} from 'redux-saga/effects';
import {
  ACTIONS,
  actionCreators
} from '../../Landing'
// Worker: Increase Counter Async (Delayed By 4 Seconds)
export function* validatePayloadAndGetProducts(action) {
  try {
    // Dispatch Action To Redux Store
    yield put(actionCreators.getAllProductsRequested());
    try {
      // yield call()
    } catch (err) {
      yield put(actionCreators.getAllProductsFailed(err));
    }
    console.log('Sup biatch');
  } catch (error) {
    console.log(error);
  }
};
