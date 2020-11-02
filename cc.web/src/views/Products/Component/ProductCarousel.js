import React from 'react';
import { Card } from '../../../components'
import Carousel from "react-slick";
import { get } from 'lodash';
import './style.scss';

class ProductCarousel extends React.Component {
  get cards() {
    const { products } = this.props;
    return products.map((product, index) =>
      <center key={index}>
        <Card product={product} {...this.props}/>
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