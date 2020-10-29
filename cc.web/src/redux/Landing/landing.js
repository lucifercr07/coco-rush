import _ from 'lodash';
import * as actions from './actions'

const initialState = {
  fetching: false,
}

const landingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ALL_PRODUCTS_REQUESTED:
      return {
        ...state,
        fetching: true,
      };

    case actions.GET_ALL_PRODUCTS_COMPLETED:
      return {
        ...state,
        fetching: false,
      };

    case actions.GET_ALL_PRODUCTS_FAILED:
      return {
        ...state,
        fetching: false,
      };
  }
};
// Exports
export default landingReducer;