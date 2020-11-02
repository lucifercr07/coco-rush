import React from 'react';
import { Container } from '@material-ui/core';
import { Layout } from '../../../components';
import { capitalize } from 'lodash';
import ProductCarousel from './ProductCarousel';
import './style.scss';

const categories = ['nutties', 'truffles', 'bars', 'special', 'baskets'];
const products = [
  {
    _id: 676788999,
    name: "one product",
    price: 123,
    description: "The product description goes here",
    category: "nutties"
  },
  {
    _id: 3213113431,
    name: "two product",
    price: 456,
    description: "The product description goes here",
    category: "nutties"
  },
  {
    _id: 343424323423,
    name: "three product",
    price: 213,
    description: "The product description goes here",
    category: "nutties"
  },
  {
    _id: 4342342,
    name: "four product",
    price: 767,
    description: "The product description goes here",
    category: "nutties"
  },
  {
    _id: 35435365,
    name: "five product",
    price: 321,
    description: "The product description goes here",
    category: "nutties"
  },
  {
    _id: 63243141,
    name: "one product",
    price: 123,
    description: "The product description goes here",
    category: "truffles"
  },
  {
    _id: 655624524,
    name: "two product",
    price: 456,
    description: "The product description goes here",
    category: "truffles"
  },
  {
    _id: 78628943,
    name: "three product",
    price: 213,
    description: "The product description goes here",
    category: "truffles"
  },
  {
    _id: 7883420324,
    name: "four product",
    price: 767,
    description: "The product description goes here",
    category: "truffles"
  },
  {
    _id: 89824937429,
    name: "one product",
    price: 123,
    description: "The product description goes here",
    category: "bars"
  },
  {
    _id: 7901489384,
    name: "two product",
    price: 456,
    description: "The product description goes here",
    category: "bars"
  },
  {
    _id: 74381743043,
    name: "three product",
    price: 213,
    description: "The product description goes here",
    category: "bars"
  },
  {
    _id: 34242431,
    name: "four product",
    price: 767,
    description: "The product description goes here",
    category: "bars"
  },
  {
    _id: 42342432,
    name: "five product",
    price: 321,
    description: "The product description goes here",
    category: "bars"
  },
  {
    _id: 34245435,
    name: "six product",
    price: 321,
    description: "The product description goes here",
    category: "bars"
  },
  {
    _id: 38748274863,
    name: "seven product",
    price: 321,
    description: "The product description goes here",
    category: "bars"
  },
  {
    _id: 538264827342,
    name: "one product",
    price: 123,
    description: "The product description goes here",
    category: "special"
  },
  {
    _id: 6837237402,
    name: "two product",
    price: 456,
    description: "The product description goes here",
    category: "special"
  },
  {
    _id: 325623268739,
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
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { pageSize } = this.state;
    return (
      <Layout {...this.props}>
        <Container maxWidth="lg">
          {categories.map((category, index) =>
            <div className="cardFont" key={index}>
              <div className="header__text" >
                <b>{capitalize(category)}</b>
              </div>
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