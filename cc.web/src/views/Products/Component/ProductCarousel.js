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
      pages.push(<div className="productCard">
        {this.pageCards(pageNo)}
      </div>);
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
      cards.push(<Card title={get(products, `[${cardNo}].name`)} />)
    }
    return cards;
  }

  render() {

    return (
      <Carousel
        autoPlay={false}
        navButtonsAlwaysVisible={true}
      >
        {this.paginateCards}
      </Carousel>
    )
  }
}

export default ProductCarousel;