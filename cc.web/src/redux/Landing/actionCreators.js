import * as actions from './actions';

export const getAllProducts = data => ({
  type: actions.GET_ALL_PRODUCTS,
  data,
});

export const getAllProductsRequested = () => ({
  type: actions.GET_ALL_PRODUCTS_REQUESTED
});

export const getAllProductsCompleted = response => ({
  type: actions.GET_ALL_PRODUCTS_COMPLETED,
  response,
});

export const getAllProductsFailed = error => ({
  type: actions.GET_ALL_PRODUCTS_FAILED,
  error,
});
