// Imports: Dependencies
import { all, fork} from 'redux-saga/effects';
// Imports: Redux Sagas
import createCounterSagas from './counter';
import createLandingSagas from './landing';
import createCartSagas from './cart';
import createProductDetailsSagas from './productDetails';
// Redux Saga: Root Saga

export function* rootSaga () {
    const counter = createCounterSagas();
    const landing = createLandingSagas();
    const cart = createCartSagas();
    const productDetails = createProductDetailsSagas();
    
  yield all([
    counter(),
    landing(),
    cart(),
    productDetails(),
  ]);
};
