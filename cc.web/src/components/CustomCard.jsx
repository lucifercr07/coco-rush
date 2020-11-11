import React from 'react';
import { Card } from 'react-bootstrap';
import { get } from 'lodash';
import { INR_SYMBOL } from '../constants';
import '../styles/card.scss';

function CustomCard(props) {
  const { product } = props;
  const showProductDetail = () => props.history.push(`/productDetails?id=${get(product, 'id', '')}`);
  return (
    <Card className="card-style" onClick={showProductDetail}>
      <Card.Img variant="top" src="chocolate.jpg" />
      <Card.Body style={{ wordWrap: 'wrap' }}>
        <Card.Title><h4>{get(product, 'name', 'No title')}</h4></Card.Title>
        <Card.Text>{INR_SYMBOL} <span> {get(product, 'unitPrice', 'Price not defined')}</span> </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CustomCard;
