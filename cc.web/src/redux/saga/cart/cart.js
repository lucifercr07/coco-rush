// Imports: Dependencies
import {
  put,
  call
} from 'redux-saga/effects';
import {
  ACTIONS,
  actionCreators
} from '../../Cart'
import { isEmpty, head } from 'lodash';

// import { landing } from '../../../gateway'

const getAndParseProductsInLocalStorage = () => {
  const valuesInCart = window.localStorage.getItem('CART');
  let parsedCartValues = [];
  if (valuesInCart) {
    parsedCartValues = JSON.parse(valuesInCart);
  }
  return parsedCartValues;
}

export function* getProductsInCart() {
  yield put(actionCreators.setCartProducts(getAndParseProductsInLocalStorage()));
}

export function* deleteProductFromCart(action) {
  const valuesInCart = getAndParseProductsInLocalStorage();
  const updatedCartProducts = valuesInCart.filter(product => product.id !== action.id)
  window.localStorage.setItem('CART', JSON.stringify(updatedCartProducts));
  yield put(actionCreators.setCartProducts(updatedCartProducts));
}

export function* updateProductQuantity(action) {
  const valuesInCart = getAndParseProductsInLocalStorage();
  const { id, quantity } = action.body;
  const updatedCartProducts = valuesInCart.map(product => {
    if (product.id === id) {
      product.quantity = quantity;
    }
    return product;
  });
  window.localStorage.setItem('CART', JSON.stringify(updatedCartProducts));
  yield put(actionCreators.setCartProducts(updatedCartProducts));
}

export function* addProductToCart(action) {
  const valuesInCart = getAndParseProductsInLocalStorage();
  const { id, quantity } = action.body;
  const productIdInCart = valuesInCart.filter(product => product.id === id);
  let finalQuantity = quantity;
  if (isEmpty(valuesInCart) || isEmpty(productIdInCart)) {
    valuesInCart.push({ id, quantity: finalQuantity });
  }
  if (!isEmpty(productIdInCart)) {
    finalQuantity += head(productIdInCart).quantity || 0;
    valuesInCart.forEach(product => { if (product.id === id) product.quantity = finalQuantity })
  }
  
  window.localStorage.setItem('CART', JSON.stringify(valuesInCart));
  yield put(actionCreators.setCartProducts(valuesInCart));
}
