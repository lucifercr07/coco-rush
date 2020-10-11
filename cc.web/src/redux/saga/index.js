// Imports: Dependencies
import { all, fork} from 'redux-saga/effects';
// Imports: Redux Sagas
import createCounterSagas from './counter';
// Redux Saga: Root Saga

export function* rootSaga () {
    const counter = createCounterSagas();
  yield all([
    counter(),
  ]);
};