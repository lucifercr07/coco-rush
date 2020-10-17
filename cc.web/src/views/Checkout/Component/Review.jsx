import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import './style.scss'
import { INDIA_DELIVERY_COST_LIST } from '../../../../src/constants';

const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99', quantity: 2 },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45', quantity: 5 },
  { name: 'Product 3', desc: 'Something else', price: '$6.51', quantity: 1 },
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11', quantity: 3 },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review(props) {
  const classes = useStyles();

  const {
    customer,
    address
  } = props;

  return (
    <React.Fragment>
      <div className="shipping__text"
        style={{fontWeight: 'bold', fontSize: '20px', marginBottom: '4px'}}>
        Order Summary
      </div>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>&nbsp;
            <Typography variant="body2"> x {product.quantity}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Shipping Charges" />
          <Typography variant="body2" className={classes.listItem}>
            {INDIA_DELIVERY_COST_LIST[address.state.value]}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            $34.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div className="shipping__text"
            style={{fontWeight: 'bold', fontSize: '20px', marginBottom: '4px'}}>
            Shipping Details
          </div>
          <div className="shipping__text">
            {customer.firstName.value + " " + customer.lastName.value}
            <br/>
            {customer.phoneNumber.value}
            <br/>
            {customer.emailAddress.value}
          </div>
          <p></p>
          <div className="shipping__text">
            {address.addressLine1.value + " " + address.addressLine2.value}
            <br/>
            {address.city.value + ", " + address.state.value}
            <br/>
            {address.country.value + ", " + address.postalCode.value}
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}