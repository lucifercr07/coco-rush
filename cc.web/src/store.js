// Imports: Dependencies
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// Imports: Redux Root Reducer
import rootReducer from './redux';
// Imports: Redux Root Saga
import { rootSaga } from './redux/saga';
// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();
// Redux: Store
const store = createStore(
    rootReducer,
    applyMiddleware(
        sagaMiddleware,
    ),
);
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);
// Exports
export default store;