import React from 'react';
import { Paper, TextField, Grid, Button } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Form, InputGroup } from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Layout } from '../../../components';
import { INR_SYMBOL } from '../../../constants';
import './style.scss';

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
    _id: 9254711312,
    title: 'Oreo Truffel',
    price: 123,
    quantity: 6,
    img: ""
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    fontFamily: 'Amatic SC',
    fontColor: '#654321',
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
  input: {
    borderRadius: '0px',
  }
}));

function ProductImage(props) {
  const classes = useStyles();
  return <ButtonBase className={classes.image}>
    <img className={classes.img} alt="chololate" src={props.imageSrc} />
  </ButtonBase>
}

function ProductDetails(props) {
  return <Grid item xs={12} container direction="row" spacing={0} style={{ padding: '0px 10px' }}>
    <Grid item xs={12}>
      <h2 style={{ fontWeight: '500', width: '100%' }}>{props.product.title}</h2>
    </Grid>
    <Grid item xs={12}>
      <Grid item xs={12} sm={4}>
        <Quantity product={props.product} />
      </Grid>
    </Grid>
    <Grid item xs={12}>
      <Grid item xs={12} sm={4}>
        <Button variant="contained" fullWidth={true} size="small" className="secondary-button">
          Remove
        </Button>
      </Grid>
    </Grid>
  </Grid>
}

function Quantity(props) {
  return <Form.Group>
    <InputGroup size="sm">
      <InputGroup.Prepend className="quanity-width">
        <button variant="outlined" className="primary-button" >
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
        <button variant="outlined" className="primary-button" >
          < AddIcon />
        </button>
      </InputGroup.Append>
    </InputGroup>
  </Form.Group>
}

function CartRow(props) {
  const classes = useStyles();
  return <td >
    <div className={classes.productItem}>
      <Grid container>
        <Grid item xs={4} sm={2} >
          <ProductImage imageSrc={props.product.img} />
        </Grid>
        <Grid item xs={8} sm={8} container>
          <ProductDetails product={props.product} />
        </Grid>
        <Grid item xs={12} sm={2} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '10px 10px 0px 0px' }} >
          <h5 style={{ fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', fontWeight: 800, color: '#654321' }}>{INR_SYMBOL} {props.product.price * props.product.quantity}</h5>
        </Grid>
      </Grid>
    </div>
  </td>
}

function SummaryTable(props) {
  const noOfItems = cartItems.reduce((accumulator, { quantity }) => accumulator + quantity, 0);
  const subTotal = cartItems.reduce((accumulator, { quantity, price }) => accumulator + quantity * price, 0);
  const gstValue = Math.round(((subTotal * 16.6 / 100) + Number.EPSILON) * 100) / 100;
  const shipping = 0;
  const total = subTotal + gstValue + shipping;
  return <table className="summaryTable">
    <tbody>
      <tr>
        <td>No. of items</td>
        <td>{noOfItems}</td>
      </tr>
      <tr>
        <td>SubTotal</td>
        <td>{INR_SYMBOL} {subTotal}</td>
      </tr>
      <tr>
        <td>GST</td>
        <td>{INR_SYMBOL} {gstValue}</td>
      </tr>
      <tr>
        <td>Shipping Charges</td>
        <td>{INR_SYMBOL} {shipping}</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold', fontSize: '30px' }}>Total</td>
        <td style={{ fontWeight: 'bold', fontSize: '18px' }}>{INR_SYMBOL} {total}</td>
      </tr>
    </tbody>
  </table>
}

function PromoCode(props) {
  const CssTextField = withStyles({
    root: {
      paddingRight:'1em',
      '& .MuiOutlinedInput-root': {
        borderRadius:0,
        '&:hover fieldset': {
          borderColor: '#c58c4a',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#654321',
        },
      },
    },
  })(TextField);
  return <>
    <Grid item xs={8}>
      <CssTextField
        placeholder="Enter Coupon Code"
        fullWidth={true}
        variant="outlined"
        size="small"
        />
    </Grid>
    <Grid item xs={4}>
      <Button variant="contained" fullWidth={true} className="primary-button" >Apply</Button>
    </Grid>
  </>
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
            <Paper className={classes.paper} elevation={3}>
              <Grid container direction="row">
                <Grid item xs={12}>
                  <h2 style={{ fontWeight: "bold", paddingBottom: '10px' }}>Order Summary</h2>
                </Grid>
                <Grid item xs={12}>
                  <SummaryTable {...props} />
                </Grid>
                <Grid item xs={12} container style={{ paddingTop: '20px' }}>
                  <PromoCode {...props} />
                </Grid>
                <Grid item xs={12} style={{ padding: '20px 0px 10px 0px' }}>
                  <Button variant="contained" fullWidth={true} className="secondary-button">Continue Shopping</Button>
                </Grid>
                <Grid item xs={12} style={{ paddingBottom: '10px' }}>
                  <Button variant="contained" fullWidth={true} className="primary-button">Proceed to checkout</Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Layout >
  )
}
