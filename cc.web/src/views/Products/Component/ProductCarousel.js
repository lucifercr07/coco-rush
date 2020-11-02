import React from 'react';
import { Card } from '../../../components'
import Carousel from 'react-material-ui-carousel'
import { get } from 'lodash';
import './style.scss';

class ProductCarousel extends React.Component {
  get paginateCards() {
    const { products, pageSize } = this.props;
    const size = products.length;
    const pageFloor = Math.floor(size / pageSize);
    const noOfPages = pageFloor * pageSize < size ? pageFloor + 1 : pageFloor;
    let pages = [];

    for (let pageNo = 0; pageNo < noOfPages; pageNo++) {
      pages.push(
        <center>
          <div className="productCard" key={pageNo}>
            {this.pageCards(pageNo)}
          </div>
        </center>);
    }

    return pages;
  }

  pageCards = (pageNo) => {
    const { products, pageSize } = this.props;
    const size = products.length;
    const endIndex = pageNo * pageSize + pageSize;
    let cards = [];
    for (let cardNo = pageNo * pageSize; cardNo < endIndex; cardNo++) {
      if (cardNo >= size) break;
      cards.push(
        <Card
          key={cardNo}
          product={get(products, `[${cardNo}]`, {})} />
      );
    }
    return cards;
  }

  render() {
    const pages = this.paginateCards;
    return (
      <Carousel
        autoPlay={false}
        navButtonsAlwaysVisible={pages.length > 1 ? true : false}
        navButtonsAlwaysInvisible={pages.length > 1 ? false : true}
        indicators={pages.length > 1 ? true : false}
      >
        {pages}
      </Carousel>
    )
  }
}

export default ProductCarousel;