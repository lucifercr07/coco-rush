import _ from 'lodash';
import * as actions from './actions'

const initialState = {
  fetching: false,
  productDetails: {},
  error: ''
}

const productDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PRODUCT_DETAILS:
      return {
        ...state,
        fetching: true,
      };

    case actions.GET_PRODUCT_DETAILS_COMPLETED:
      return {
        ...state,
        fetching: false,
        productDetails: action.response
      };
    case actions.GET_PRODUCT_DETAILS_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.error
      };
    case actions.INCREASE_QUANTITY:
      return {
        ...state,
        quantity: action.quantity + 1,
      };
    case actions.DECREASE_QUANTITY:
      return {
        ...state,
        quantity: action.quantity > 1 ? action.quantity - 1 : 1
      };
    default:
      return {
        ...state
      };
  }
};
// Exports
export default productDetailsReducer;
