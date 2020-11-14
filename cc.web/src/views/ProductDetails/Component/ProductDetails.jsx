import React from 'react';
import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import qs from 'query-string'
import { Layout } from '../../../components'
import ProductElements from './ProductElements';
import './style.scss';

class ProductDetails extends React.Component {
  componentDidMount() {
    const { id } = qs.parse(window.location.search);
    this.props.getProductDetails(id);
  }
  render() {
    const {
      productDetails,
      quantity,
      onAddClick,
      onRemoveClick,
      addToCart,
    } = this.props
    const productElementsProps = {
      product: productDetails,
      quantity,
      onAddClick,
      onRemoveClick,
      addToCart,
    }
    return (
      <Layout {...this.props}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} sm={5}>
            <img src="chocolate.jpg" alt="" className="img" />
          </Grid>
          <Grid item xs={12} sm={5} container>
            <Paper className="description" elevation={3}>
              <ProductElements {...productElementsProps} />
            </Paper>
          </Grid>
        </Grid>
      </Layout>
    )
  }
} export default ProductDetails;
