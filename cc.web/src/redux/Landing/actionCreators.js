import * as actions from './actions';

export const getAllProducts = () => ({
  type: actions.GET_ALL_PRODUCTS
});

export const getAllProductsCompleted = response => ({
  type: actions.GET_ALL_PRODUCTS_COMPLETED,
  response,
});

export const getAllProductsFailed = error => ({
  type: actions.GET_ALL_PRODUCTS_FAILED,
  error,
});
