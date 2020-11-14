// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import counter from './Counter/counter';
import checkout from './Checkout/checkout';
import landing from './Landing/landing';
import cart from './Cart/cart';
import products from './Products/products';
import productDetails from './ProductDetails/productDetails';
// Redux: Root Reducer
const rootReducer = combineReducers({
  counter,
  checkout,
  landing,
  cart,
  products,
  productDetails,
});
// Exports
export default rootReducer;
