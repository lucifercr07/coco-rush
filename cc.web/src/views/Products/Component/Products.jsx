import React from 'react';
import { Container } from '@material-ui/core';
import { isEmpty } from 'lodash';
import { Layout } from '../../../components';
import { capitalize } from 'lodash';
import ProductCarousel from './ProductCarousel';
import './style.scss';

const categories = ['nutties', 'truffle', 'bars', 'special', 'baskets', 'hampers', 'chocolate beans'];

class Products extends React.Component {
  state = {
    pageSize: window.innerWidth > 991 ? 3 : window.innerWidth > 700 ? 2 : 1
  };
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
    const { pageSize } = this.state;
    const {
      fetching,
      productsByCategory
    } = this.props;
    return (
      <Layout {...this.props}>
        <Container maxWidth="lg">
          {categories.map((category, index) =>!isEmpty(productsByCategory[category])?
            <div className="cardFont" key={index}>
              <div className="header__text" >
                <b>{capitalize(category)}</b>
              </div>
              <hr />
              <ProductCarousel
                products={productsByCategory[category]}
                pageSize={pageSize}
                history={this.props.history} />
            </div>
            : ''
          )}

        </Container>
      </Layout>
    )
  }

  updateDimensions = () => {
    const pageSize = window.innerWidth > 991 ? 3 : window.innerWidth > 700 ? 2 : 1;
    this.setState({ pageSize });
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
}

export default Products;