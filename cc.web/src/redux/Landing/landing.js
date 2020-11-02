import _ from 'lodash';
import * as actions from './actions'

const initialState = {
  fetching: false,
  products: [],
  error: ''
}

const landingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ALL_PRODUCTS:
      return {
        ...state,
        fetching: true,
      };

    case actions.GET_ALL_PRODUCTS_COMPLETED:
      return {
        ...state,
        fetching: false,
        products: action.response
      };

    case actions.GET_ALL_PRODUCTS_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.error
      };
    default:
      return {
        ...state
      };
  }
};
// Exports
export default landingReducer;
