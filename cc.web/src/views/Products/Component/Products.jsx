import React from 'react';
import { isEmpty, capitalize } from 'lodash';
import { Container, Grid } from '@material-ui/core';
import { Layout } from '../../../components';
import ProductCarousel from './ProductCarousel';
import './style.scss';

const categories = ['nutties', 'truffle', 'bars', 'special', 'baskets', 'hampers', 'chocolate beans'];

class Products extends React.Component {
  componentWillMount() {
    window.scrollTo(0, 0);
    const {
      products,
      getProducts,
    } = this.props;
    if (isEmpty(products)) {
      getProducts();
    }
  }

  render() {
    const {
      fetching,
      productsByCategory
    } = this.props;
    
    return (
      <Layout {...this.props}>
        <Container maxWidth="lg">
          <br/>
          {categories.map((category, index) => !isEmpty(productsByCategory[category]) ?

                <div className="cardFont" key={index}>
                  <div className="" >
                    <h2><b>{capitalize(category)}</b></h2>
                  </div>
                  <hr />
                  <ProductCarousel
                    products={productsByCategory[category]}
                    history={this.props.history} />
                  <br />
                  <br />

                </div>
            : ''
          )}
        </Container>
          </Layout>
    )
  }
}

export default Products;