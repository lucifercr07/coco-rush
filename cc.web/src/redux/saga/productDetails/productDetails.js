// Imports: Dependencies
import {
  put,
  call,
} from 'redux-saga/effects';
import { actionCreators } from '../../ProductDetails';

import { productDetails } from '../../../gateway'

export function* getProductDetails(action) {
  try {
    const response = yield call(productDetails.getProductDetails, action.id);
    console.log('in Saga')
    console.log(response);
    yield put(actionCreators.getProductDetailsCompleted(response));
  } catch (err) {
    console.log(err);
    yield put(actionCreators.getProductDetailsFailed(err));
  }
};
