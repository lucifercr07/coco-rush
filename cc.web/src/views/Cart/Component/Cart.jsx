import React from 'react';
import { Paper, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Layout } from '../../../components';
import CartItem from './CartItem';
import SummaryTable from './Summary';
import PromoCode from './PromoCode';
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
}));



function CartActions(props) {
  return <>
    <Grid item xs={12} container style={{ paddingTop: '20px' }}>
      <PromoCode {...props} />
    </Grid>
    <Grid item xs={12} style={{ padding: '20px 0px 10px 0px' }}>
      <Button variant="contained" fullWidth={true} className="secondary-button">Continue Shopping</Button>
    </Grid>
    <Grid item xs={12} style={{ paddingBottom: '10px' }}>
      <Button variant="contained" fullWidth={true} className="primary-button">Proceed to checkout</Button>
    </Grid>
  </>
}

function CartTable(props) {
	const classes = useStyles();
	return <table style={{ width: '100%' }}>
		<tbody>
			{props.cartItems.map(item => (
				<tr key={item._id} className={classes.productRow}>
					<CartItem product={item} />
				</tr>
			))}
		</tbody>
	</table>
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
              <CartTable cartItems={cartItems} />
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper className={classes.paper} elevation={3}>
              <Grid container direction="row">
                <Grid item xs={12}>
                  <h2 style={{ fontWeight: "bold", paddingBottom: '10px' }}>
                    Order Summary
                  </h2>
                </Grid>
                <Grid item xs={12}>
                  <SummaryTable cartItems={cartItems} {...props} />
                </Grid>
                <CartActions />
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Layout >
  )
}
