import { takeLatest } from 'redux-saga/effects';
import * as sideEffects from './cart';
import { ACTIONS } from '../../Cart'

export default function createCartSaga() {
  // Create any common func for api call if required.

  return function* cart() {
    yield takeLatest(ACTIONS.GET_CART_PRODUCTS, sideEffects.getProductsInCart);
    yield takeLatest(ACTIONS.DELETE_PRODUCT, sideEffects.deleteProductFromCart);
    yield takeLatest(ACTIONS.UPDATE_QUANTITY, sideEffects.updateProductQuantity);
    yield takeLatest(ACTIONS.ADD_PRODUCT, sideEffects.addProductToCart);
  };
}
