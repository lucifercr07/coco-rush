import React from 'react';
import { Button } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';
import './style.scss';
import { Quantity, Discount } from '../../../components';

function HeartIcon() {
  return <div className="descriptionElement">
    <FavoriteIcon style={{ fontSize: '50px' }} />
  </div>;
}

function ProductName(props) {
  return <div className="descriptionElement">
    <h1>{props.product.name || 'Chocolate Name'}</h1>
  </div>
}

function Description(props) {
  return <div className="descriptionElement">
    <p>{props.product.description || 'Randomest one liner description containing no useful information what so ever'}</p>
    {/* <p>{"This delicious treat is perfect for any occasion, let it be birthdays, anniversaries, special events, or just for self pamper. Made with the finest and richest indulgent ingredients, everything we create at Coco Rush is full of awesomeness, because you are too!"}</p> */}
  </div>
}

function Price(props) {
  let newPrice = props.product.unitPrice, oldPrice = 0;
  const percentOff = props.product.discount;
  if (_.isNumber(percentOff) && percentOff !== 0) {
    oldPrice = newPrice;
    newPrice = oldPrice * (100 - percentOff) / 100;
  }

  return <div className="descriptionElement price">
    <Discount newPrice={newPrice} oldPrice={oldPrice} percentOff={percentOff} type="dark" />
  </div>
}

function Actions(props) {
  return <div className="descriptionElement">
    <Grid container alignItems="center" justify="center">
      <Grid item xs={12} md={10}>
        <Quantity {...props} type="light" />
      </Grid>
      <Grid item xs={12} md={10}>
        <Button
          variant="contained"
          fullWidth={true}
          className="cart-button"
          onClick={() => props.addToCart(props.product.id, props.quantity)}
        >
          Add to cart
        </Button>
      </Grid>
    </Grid>
  </div>
}

export default function ProductElements(props) {
  return <center>
    <HeartIcon />
    <ProductName {...props} />
    <Price {...props} />
    <Actions {...props} />
    <Description {...props} />
  </center>
}