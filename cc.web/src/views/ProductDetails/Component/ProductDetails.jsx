import React from 'react';
import { Paper } from '@material-ui/core';
import { INR_SYMBOL } from '../../../constants'
import './style.scss';

class ProductDetails extends React.Component {
  render() {
    let {
      productName,
    } = this.props;
    if (!productName) {
      productName = 'Chocolate'
    }
    return (
      <div className="container">
        <center className="left-column">
          <img src="chocolate.jpg" alt="" className="img" />
        </center>
        <div className="right-column">
          <Paper style={{ padding: '20px', backgroundColor: '#F8D9B2' }}>
            <div className="product-description">
              <h1>{productName}</h1>
              <p>The preferred choice of a vast range of chocolate lovers. Creamy nutty and what not!!! The preferred choice of a vast range of chocolate lovers. Creamy nutty and what not!!!The preferred choice of a vast range of chocolate lovers. Creamy nutty and what not!!!</p>
            </div>

            <div className="product-price">
              <span>{`${INR_SYMBOL} 148`}</span>
              <a href="#" className="cart-btn">Add to cart</a>
              <div className="quantity buttons_added">
                <input type="button" value="-" className="minus" />
                <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" className="input-text qty text" size="4" pattern="" inputmode="" />
                <input type="button" value="+" className="plus" />
              </div>
            </div>
          </Paper>
        </div>
      </div>
    )
  }
} export default ProductDetails;