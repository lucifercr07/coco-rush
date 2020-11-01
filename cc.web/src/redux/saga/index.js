// Imports: Dependencies
import { all, fork} from 'redux-saga/effects';
// Imports: Redux Sagas
import createCounterSagas from './counter';
import createLandingSagas from './landing';
import createCartSagas from './cart';
// Redux Saga: Root Saga

export function* rootSaga () {
    const counter = createCounterSagas();
    const landing = createLandingSagas();
    const cart = createCartSagas();
    
  yield all([
    counter(),
    landing(),
    cart(),
  ]);
};
