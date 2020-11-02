import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Layout } from '../../../components';
import { capitalize } from 'lodash';
import ProductCarousel from './ProductCarousel';
import './style.scss';

const categories = ['nutties', 'truffles', 'bars', 'special', 'baskets'];
const products = [
  {
    _id: 676788999,
    title: "one product",
    price: 123,
    description: "The product description goes here",
    category: "nutties"
  },
  {
    _id: 3213113431,
    title: "two product",
    price: 456,
    description: "The product description goes here",
    category: "nutties"
  },
  {
    _id: 343424323423,
    title: "three product",
    price: 213,
    description: "The product description goes here",
    category: "nutties"
  },
  {
    _id: 4342342,
    title: "four product",
    price: 767,
    description: "The product description goes here",
    category: "nutties"
  },
  {
    _id: 35435365,
    title: "five product",
    price: 321,
    description: "The product description goes here",
    category: "nutties"
  },
  {
    _id: 63243141,
    title: "one product",
    price: 123,
    description: "The product description goes here",
    category: "truffles"
  },
  {
    _id: 655624524,
    title: "two product",
    price: 456,
    description: "The product description goes here",
    category: "truffles"
  },
  {
    _id: 78628943,
    title: "three product",
    price: 213,
    description: "The product description goes here",
    category: "truffles"
  },
  {
    _id: 7883420324,
    title: "four product",
    price: 767,
    description: "The product description goes here",
    category: "truffles"
  },
  {
    _id: 89824937429,
    title: "one product",
    price: 123,
    description: "The product description goes here",
    category: "bars"
  },
  {
    _id: 7901489384,
    title: "two product",
    price: 456,
    description: "The product description goes here",
    category: "bars"
  },
  {
    _id: 74381743043,
    title: "three product",
    price: 213,
    description: "The product description goes here",
    category: "bars"
  },
  {
    _id: 34242431,
    title: "four product",
    price: 767,
    description: "The product description goes here",
    category: "bars"
  },
  {
    _id: 42342432,
    title: "five product",
    price: 321,
    description: "The product description goes here",
    category: "bars"
  },
  {
    _id: 34245435,
    title: "six product",
    price: 321,
    description: "The product description goes here",
    category: "bars"
  },
  {
    _id: 38748274863,
    title: "seven product",
    price: 321,
    description: "The product description goes here",
    category: "bars"
  },
  {
    _id: 538264827342,
    title: "one product",
    price: 123,
    description: "The product description goes here",
    category: "special"
  },
  {
    _id: 6837237402,
    title: "two product",
    price: 456,
    description: "The product description goes here",
    category: "special"
  },
  {
    _id: 325623268739,
    title: "one product",
    price: 123,
    description: "The product description goes here",
    category: "baskets"
  }
];

class Products extends React.Component {

  render() {
    return (
      <Layout {...this.props}>
        <Container maxWidth="lg">
          <br/>
          {categories.map((category, index) =>
            <div className="cardFont" key={index}>
              <div className="" >
                <h2><b>{capitalize(category)}</b></h2>
              </div>
              <hr />
              <ProductCarousel
                products={products.filter(product => product.category === category)}
                {...this.props} />
                <br/>
                <br/>
            </div>
          )}
        </Container>
      </Layout>
    )
  }
}

export default Products;