import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router-dom';

import {
  Checkout,
  Landing,
  Products,
  ProductDetails
} from './views'

export default (
  <Route path="/">
    {/* <Route component={Landing}> */}
      <Route exact path="/" component={Landing} />
    {/* </Route> */}
    <Route path="/checkout" component={Checkout} />
    <Route path="/products" component={Products} />
    <Route path="/productDetails" component={ProductDetails} />
  </Route>
)
