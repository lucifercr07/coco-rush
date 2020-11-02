import { Card } from 'react-bootstrap';
import { get } from 'lodash';
import { useHistory } from "react-router";

import React from 'react';
import '../styles/card.scss';

function CustomCard(props) {
  const { product } = props;
  const history = useHistory();
  const showProductDetail = () => history.push(`/productdetails/${get(product, '_id', '')}`);
  return (
    <Card style={{
      margin: '20px',
      maxWidth: '250px',
      height: '315px',
      padding: '15px'
    }} onClick={showProductDetail}>
      <Card.Img style={{ width: '100%', overflow: "hidden", height: '200px' }} variant="top" src="chocolate.jpg" />
      <Card.Body style={{ wordWrap: 'wrap' }}>
        <Card.Title>{get(product, 'name', 'No title')}</Card.Title>
        <Card.Text>Rs. {get(product, 'price', 'Price not defined')}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CustomCard;