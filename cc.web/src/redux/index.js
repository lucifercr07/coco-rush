// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import counter from './Counter/counter';
import checkout from './Checkout/checkout';
import landing from './Landing/landing';
// Redux: Root Reducer
const rootReducer = combineReducers({
  counter,
  checkout,
  landing,
});
// Exports
export default rootReducer;
