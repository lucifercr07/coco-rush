// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import counter from './Counter/counter';
import checkout from './Checkout/checkout';
// import category from './category/category';
// Redux: Root Reducer
const rootReducer = combineReducers({
  counter,
  checkout,
});
// Exports
export default rootReducer;