import React from 'react';
import { Paper, Card, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Form, InputGroup } from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Layout } from '../../../components';
import { INR_SYMBOL } from '../../../constants';
import './style.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  paper: {
    // padding: theme.spacing(1),
    // textAlign: 'center',
  },
  img: {
    // margin: 'auto',
    // display: 'block',
    maxWidth: '100%',
    // maxHeight: '100%',
  },
  productRow: {
    borderBottom: '1px solid',
    borderColor: '#d4d4d4 !important',
    "&:last-child": {
      border: 'none'
    }
  },
  productItem: {
    // flexGrow: 1,
    padding: '16px 0px'
  },
}));

const cartItems = [
  {
    _id: 231231312,
    title: 'Chocolate Name a really really long name',
    price: 322,
    quantity: 1,
    img: "chocolate.jpg"
  },
  {
    _id: 89211312,
    title: 'Oreo Truffel and another long name',
    price: 123,
    quantity: 6,
    img: "chocolate3.jpg"
  },
  {
    _id: 21221312,
    title: 'Chocolate Name a really really long name',
    price: 322,
    quantity: 1,
    img: "profile.jpg"
  },
  {
    _id: 9291211312,
    title: 'Oreo Truffel and another long name',
    price: 123,
    quantity: 6,
    img: "chocolate5.jpg"
  },
  {
    _id: 9291211312,
    title: 'Oreo Truffel',
    price: 123,
    quantity: 6,
    img: ""
  },
]

function CartRow(props) {
  const classes = useStyles();

  return (
    <td >
      <div className={classes.productItem}>
        <Grid container>
          <Grid item xs={4} sm={2} >
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="chololate" src={props.product.img} />
            </ButtonBase>
          </Grid>
          <Grid item xs={8} sm={8} container>
            <Grid item xs={12} container direction="column" style={{ padding: '0px 10px' }}>
              <Grid item xs={12} sm={12}>
                <h5 style={{ fontWeight: 300 }}>{props.product.title}</h5>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form.Group>
                  <InputGroup size='sm'>
                    <InputGroup.Prepend className="quanity-width">
                      <Button variant="outlined" fullWidth={true} className="quanity-button" >
                        < RemoveIcon />
                      </Button>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="text"
                      placeholder="QTY"
                      value={props.product.quantity}
                      className="quanity-input"
                    />
                    <InputGroup.Append className="quanity-width">
                      <Button variant="outlined" fullWidth={true} className="quanity-button" >
                        < AddIcon />
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Form.Group>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button variant="outlined" fullWidth={true} className="cart-button">Remove</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={2} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding:'10px 0px 0px' }} >
            <h5 style={{ fontWeight: 500 }}>{INR_SYMBOL} {props.product.price * props.product.quantity}</h5>
          </Grid>
        </Grid>
      </div>
    </td>
  );
}

export default function Cart(props) {
  const classes = useStyles();
  return (
    <Layout {...props}>
      <div className={classes.root}>
        <Grid container spacing={3} direction="row">
          <Grid item xs={12}>
            <h2>Shopping Cart</h2>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper className={classes.paper} style={{ padding: '0px 10px' }}>
              <table style={{ width: '100%' }}>
                <tbody>
                  {cartItems.map(item => (
                    <tr key={item._id} className={classes.productRow}>
                      <CartRow product={item} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <Card >
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
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Layout >
  )
}
