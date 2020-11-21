import React from 'react';
import { isEmpty, capitalize } from 'lodash';
import { Container, Grid } from '@material-ui/core';
import { Layout } from '../../../components';
import ProductCarousel from './ProductCarousel';
import './style.scss';
import { CATEGORIES } from '../../../constants';

class Products extends React.Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const {
      fetching,
      productsByCategory
    } = this.props;

    return (
      <Layout {...this.props}>
        <Container maxWidth="lg">
          <br />
          {CATEGORIES.map((category, index) => !isEmpty(productsByCategory[category]) ?

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