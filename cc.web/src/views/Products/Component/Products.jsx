import React from 'react';
import { Container } from '@material-ui/core';
import { Card } from '../../../components'
import Carousel from 'react-material-ui-carousel'

import './style.scss';

const items = ['one product', 'two product', 'three product', 'four product', 'five product']

class Products extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <Container maxWidth="lg">
        <div className="header__text">
          <b>Nutties</b>
          <hr />
          <Carousel autoPlay={false}>
            <div className="productCard">
              <Card title="one Product" />
              <Card title="two Product" />
              <Card title="three Product" />
            </div>
            <div className="productCard">
              <Card title="four Product" />
              <Card title="five Product" />
            </div>
          </Carousel>

        </div>
        <div className="header__text">
          <b>Truffles</b>
          <hr />
          <div className="productCard">
            <Card title="one Product" />
            <Card title="two Product" />
            <Card title="three Product" />
            <Card title="four Product" />
            <Card title="five Product" />
          </div>
        </div>
        <div className="header__text">
          <b>Bars</b>
          <hr />
          <div className="productCard">
            <Card title="one Product" />
            <Card title="two Product" />
            <Card title="three Product" />
            <Card title="four Product" />
            <Card title="five Product" />
          </div>
        </div>
        <div className="header__text">
          <b>Specials</b>
          <hr />
          <div className="productCard">
            <Card title="one Product" />
            <Card title="two Product" />
            <Card title="three Product" />
            <Card title="four Product" />
            <Card title="five Product" />
          </div>
        </div>
        <div className="header__text">
          <b>Baskets</b>
          <hr />
          <div className="productCard">
            <Card title="one Product" />
            <Card title="two Product" />
            <Card title="three Product" />
            <Card title="four Product" />
            <Card title="five Product" />
          </div>
        </div>
      </Container>
    )
  }
}

export default Products;