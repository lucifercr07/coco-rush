import _ from 'lodash';
import * as actions from './actions'

const initialState = {
  fetching: false,
  productsByCategory: {
    bars: [],
    truffle: [],
    special: [],
    nutties: [],
    hampers: [],
    baskets: [],
  },
  error: ''
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SEGREGATE_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        productsByCategory: action.products
      };
    default:
      return {
        ...state
      };
  }
};
// Exports
export default productsReducer;
