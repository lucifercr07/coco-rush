import React from 'react';
import { Container } from '@material-ui/core';
import { Layout } from '../../../components';
import { capitalize } from 'lodash';
import ProductCarousel from './ProductCarousel';
import './style.scss';

const categories = ['nutties', 'truffles', 'bars', 'special', 'baskets'];
const products = [
  {
    name: "one product",
    price: 123,
    description: "The product description goes here",
    category: "nutties"
  },
  {
    name: "two product",
    price: 456,
    description: "The product description goes here",
    category: "nutties"
  },
  {
    name: "three product",
    price: 213,
    description: "The product description goes here",
    category: "nutties"
  },
  {
    name: "four product",
    price: 767,
    description: "The product description goes here",
    category: "nutties"
  },
  {
    name: "five product",
    price: 321,
    description: "The product description goes here",
    category: "nutties"
  },
  {
    name: "one product",
    price: 123,
    description: "The product description goes here",
    category: "truffles"
  },
  {
    name: "two product",
    price: 456,
    description: "The product description goes here",
    category: "truffles"
  },
  {
    name: "three product",
    price: 213,
    description: "The product description goes here",
    category: "truffles"
  },
  {
    name: "four product",
    price: 767,
    description: "The product description goes here",
    category: "truffles"
  },
  {
    name: "one product",
    price: 123,
    description: "The product description goes here",
    category: "bars"
  },
  {
    name: "two product",
    price: 456,
    description: "The product description goes here",
    category: "bars"
  },
  {
    name: "three product",
    price: 213,
    description: "The product description goes here",
    category: "bars"
  },
  {
    name: "four product",
    price: 767,
    description: "The product description goes here",
    category: "bars"
  },
  {
    name: "five product",
    price: 321,
    description: "The product description goes here",
    category: "bars"
  },
  {
    name: "six product",
    price: 321,
    description: "The product description goes here",
    category: "bars"
  },
  {
    name: "seven product",
    price: 321,
    description: "The product description goes here",
    category: "bars"
  },
  {
    name: "one product",
    price: 123,
    description: "The product description goes here",
    category: "special"
  },
  {
    name: "two product",
    price: 456,
    description: "The product description goes here",
    category: "special"
  },
  {
    name: "one product",
    price: 123,
    description: "The product description goes here",
    category: "baskets"
  }
];

class Products extends React.Component {
  state = {
    pageSize: window.innerWidth > 991 ? 3 : window.innerWidth > 700 ? 2 : 1
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { pageSize } = this.state;
    return (
      <Layout {...this.props}>
        <Container maxWidth="lg">
          {categories.map(category =>
            <div className="header__text">
              <b>{capitalize(category)}</b>
              <hr />
              <ProductCarousel
                products={products.filter(product => product.category === category)}
                pageSize={pageSize} />
            </div>
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