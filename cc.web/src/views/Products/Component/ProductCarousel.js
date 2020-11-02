import React from 'react';
import { Card } from '../../../components'
import Carousel from "react-slick";
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

  get cards() {
    const { products } = this.props;
    return products.map((product, index) =>
      <center key={index}>
        <Card product={product} />
      </center>
    )
  }

  render() {
    const size = get(this.props, 'products', []).length;
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: size >= 3 ? 3 : size,
      slidesToScroll: get(this.props, 'products', []).length > 3 ? 3 : get(this.props, 'products', []).length,
      initialSlide: 0,
      responsive: [{ breakpoint: 1024, settings: { slidesToShow: size >= 3 ? 3 : size, slidesToScroll: 3 } },
      { breakpoint: 600, settings: { slidesToShow: size >= 2 ? 2 : size, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }]
    };
    return (
      <Carousel {...settings} >
        {this.cards}
      </Carousel>
    )
  }
}

export default ProductCarousel;