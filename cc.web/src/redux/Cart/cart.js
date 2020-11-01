import _ from 'lodash';
import * as actions from './actions'

// Initial State
const initialState = {
  products: [],
};

const cartReducer = (state = initialState, action) => {

  switch (action.type) {
    case actions.SET_CART_PRODUCTS:
      return {
        ...state,
        products: action.products
      }
    default:
      return { ...state };
  }
};
// Exports
export default cartReducer;
