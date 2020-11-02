// Imports: Dependencies
import {
  put,
  call,
} from 'redux-saga/effects';
import { isEmpty, capitalize } from 'lodash';
import {
  ACTIONS,
  actionCreators
} from '../../Landing'
import { actionCreators as productsActionCreators } from '../../Products';

import { landing } from '../../../gateway'

export function* validatePayloadAndGetProducts(action) {
  try {
    const response = yield call(landing.getProducts);
    yield put(actionCreators.getAllProductsCompleted(response));
    yield put(productsActionCreators.segregateProductsByCategory(segregateProductsByCategory(response)));
  } catch (err) {
    console.log(err);
    yield put(actionCreators.getAllProductsFailed(err));
  }
};

function segregateProductsByCategory(products) {
  if (isEmpty(products)) {
    // Show Error
  }
  const categories = ['nutties', 'truffle', 'bars', 'special', 'baskets', 'hampers', 'chocolate beans'];
  const productsByCategory = {}

  categories.forEach(category => {
    productsByCategory[category] = products.filter(product =>
      product.categoryName.includes(capitalize(category))
    )
  })
  return productsByCategory;
}
