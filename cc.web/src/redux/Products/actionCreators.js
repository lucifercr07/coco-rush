import * as actions from './actions';

export const segregateProductsByCategory = products => ({
  type: actions.SEGREGATE_PRODUCTS_BY_CATEGORY,
  products,
});
