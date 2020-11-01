import React from 'react';
import { Paper, Card, Grid } from '@material-ui/core';
import './style.scss'
import { Layout } from '../../../components';

class Cart extends React.Component {
  state = {
    renderHeader: window.innerWidth > 649,
  }

  updateDimensions = () => {
    const renderHeader = window.innerWidth > 649;
    this.setState({ renderHeader });
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    return (
      <Layout {...this.props}>
        <h1>Shopping Cart</h1>

        <div class="shopping-cart">
          {window.innerWidth > 649 && <Paper style={{ padding: '10px' }}>
            <div class="column-labels">
              <label class="product-image">Image</label>
              <label class="product-details">Product</label>
              <label class="product-price">Price</label>
              <label class="product-quantity">Quantity</label>
              <label class="product-removal">Remove</label>
              <label class="product-line-price">Total</label>
            </div>
          </Paper>}
          <Paper style={{ padding: '10px' }}>
            <div class="product">
              <div class="product-image">
                <img src="https://s.cdpn.io/3/dingo-dog-bones.jpg" />
              </div>
              <div class="product-details">
                <div class="product-title">Dingo Dog Bones</div>
                <p class="product-description">The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.</p>
              </div>
              <div class="product-price">12.99</div>
              <div class="product-quantity">
                <input type="number" value="2" min="1" />
              </div>
              <div class="product-removal">
                <button class="remove-product">
                  Remove
              </button>
              </div>
              <div class="product-line-price">25.98</div>
            </div>

            <div class="product">
              <div class="product-image">
                <img src="chocolate3.jpg" />
              </div>
              <div class="product-details">
                <div class="product-title">Nutro™ Adult Lamb and Rice Dog Food</div>
                <p class="product-description">Who doesn't like lamb and rice? We've all hit the halal cart at 3am while quasi-blackout after a night of binge drinking in Manhattan. Now it's your dog's turn!</p>
              </div>
              <div class="product-price">45.99</div>
              <div class="product-quantity">
                <input type="number" value="1" min="1" />
              </div>
              <div class="product-removal">
                <button class="remove-product">
                  Remove
              </button>
              </div>
              <div class="product-line-price">45.99</div>
            </div>
          </Paper>

          <Card style={{ padding: '10px' }}>
            <div class="totals">
              <div class="totals-item">
                <label>Subtotal</label>
                <div class="totals-value" id="cart-subtotal">71.97</div>
              </div>
              <div class="totals-item">
                <label>Shipping</label>
                <div class="totals-value" id="cart-shipping">15.00</div>
              </div>
              <div class="totals-item totals-item-total">
                <label>Grand Total</label>
                <div class="totals-value" id="cart-total">90.57</div>
              </div>
            </div>

            <button class="checkout">Checkout</button>
          </Card>
        </div>
      </Layout >
    )
  }
}

export default Cart;
