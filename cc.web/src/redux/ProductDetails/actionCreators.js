import * as actions from './actions';

export const getProductDetails = id => ({
  type: actions.GET_PRODUCT_DETAILS,
  id
});

export const getProductDetailsCompleted = response => ({
  type: actions.GET_PRODUCT_DETAILS_COMPLETED,
  response,
});

export const getProductDetailsFailed = error => ({
  type: actions.GET_PRODUCT_DETAILS_FAILED,
  error,
});
