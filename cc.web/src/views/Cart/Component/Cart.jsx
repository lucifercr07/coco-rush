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
    fontFamily: 'Amatic SC',
  },
  paper: {
    padding: '10px 20px',
  },
  img: {
    maxWidth: '100%',
  },
  productRow: {
    borderBottom: '1px solid',
    borderColor: '#d4d4d4 !important',
    "&:last-child": {
      border: 'none'
    }
  },
  productItem: {
    padding: '20px 0px'
  },
}));

const cartItems = [
  {
    _id: 231231312,
    title: 'Chocolate Name',
    price: 322,
    quantity: 1,
    img: "chocolate.jpg"
  },
  {
    _id: 89211312,
    title: 'Oreo Truffel',
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

function ProductImage(props) {
  const classes = useStyles();
  return <ButtonBase className={classes.image}>
    <img className={classes.img} alt="chololate" src={props.imageSrc} />
  </ButtonBase>
}

function CartRow(props) {
  const classes = useStyles();

  return (
    <td >
      <div className={classes.productItem}>
        <Grid container>
          <Grid item xs={4} sm={2} >
            <ProductImage imageSrc={props.product.img} />
          </Grid>
          <Grid item xs={8} sm={8} container>
            <Grid item xs={12} container direction="row" spacing={0} style={{ padding: '0px 10px' }}>
              <Grid item xs={12}>
                <h2 style={{ fontWeight: 300, width: '100%' }}>{props.product.title}</h2>
                <br />
              </Grid>
              <Grid item xs={12}>
                <Grid item xs={12} sm={4}>
                  <Form.Group>
                    <InputGroup size="sm">
                      <InputGroup.Prepend className="quanity-width">
                        <button variant="outlined" className="quanity-button" >
                          < RemoveIcon />
                        </button>
                      </InputGroup.Prepend>
                      <Form.Control
                        type="text"
                        placeholder="QTY"
                        value={props.product.quantity}
                        className="quanity-input"
                      />
                      <InputGroup.Append className="quanity-width">
                        <button variant="outlined" className="quanity-button" >
                          < AddIcon />
                        </button>
                      </InputGroup.Append>
                    </InputGroup>
                  </Form.Group>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid item xs={12} sm={4}>
                  <Button variant="contained" fullWidth={true} size="small" className="remove-button">Remove</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={2} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '10px 10px 0px 0px' }} >
            <h5 style={{ fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', fontWeight: 800, color: '#654321' }}>{INR_SYMBOL} {props.product.price * props.product.quantity}</h5>
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
        <Grid container spacing={3} direction="row" justify="center">
          <Grid item xs={12} md={11}>
            <h1 style={{ fontWeight: 900 }}>Shopping Cart</h1>
          </Grid>
          <Grid item xs={12} md={7}>
            <Paper className={classes.paper} elevation={3}>
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
