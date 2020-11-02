import * as actions from './actions';

export const getCartValues = () => ({
  type: actions.GET_CART_PRODUCTS
});

export const addProductToCart = (id, quantity) => ({
  type: actions.ADD_PRODUCT,
  body: { id, quantity }
});

export const deleteProductFromCart = id => ({
  type: actions.DELETE_PRODUCT,
  id
});

export const setCartProducts = products => ({
  type: actions.SET_CART_PRODUCTS,
  products
})

export const updateCartProduct = (id, quantity) => ({
  type: actions.UPDATE_QUANTITY,
  body: { id, quantity }
});
