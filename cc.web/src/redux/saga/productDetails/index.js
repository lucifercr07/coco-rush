import { takeLatest } from 'redux-saga/effects';
import * as sideEffects from './productDetails';
import { ACTIONS } from '../../ProductDetails'

export default function createProductsSaga() {
  // Create any common func for api call if required.

  return function* products() {
    yield takeLatest(ACTIONS.GET_PRODUCT_DETAILS, sideEffects.getProductDetails);
  };
}
