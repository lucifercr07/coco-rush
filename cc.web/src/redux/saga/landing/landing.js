// Imports: Dependencies
import {
  put,
  call
} from 'redux-saga/effects';
import {
  ACTIONS,
  actionCreators
} from '../../Landing'

import { landing } from '../../../gateway'

export function* validatePayloadAndGetProducts(action) {
  try {
    // Dispatch Action To Redux Store
    yield put(actionCreators.getAllProductsRequested());
    try {
      const response = yield call(landing.getProducts)
      console.log(response);
    } catch (err) {
      console.log(err);
      yield put(actionCreators.getAllProductsFailed(err));
    }
  } catch (error) {
    console.log(error);
  }
};
