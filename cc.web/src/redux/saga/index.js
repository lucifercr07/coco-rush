// Imports: Dependencies
import { all, fork} from 'redux-saga/effects';
// Imports: Redux Sagas
import createCounterSagas from './counter';
import createLandingSagas from './landing';
// Redux Saga: Root Saga

export function* rootSaga () {
    const counter = createCounterSagas();
    const landing = createLandingSagas();
  yield all([
    counter(),
    landing(),
  ]);
};
