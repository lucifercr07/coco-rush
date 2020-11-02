import { Card } from 'react-bootstrap';
import { get } from 'lodash';
import { useHistory } from "react-router";

import React from 'react';
import '../styles/card.scss';

function CustomCard(props) {
  const { product } = props;
  const history = useHistory();
  const showProductDetail = () => history.push(`/productdetails/${get(product,'_id', '')}`);
  return (
    <div className='cardStyle'>

      <Card body style={{ borderRadius: '30px' }} onClick={showProductDetail}>
        <Card.Img style={{ maxHeight: '200px', minHeight: '200px' }} variant="top" src="chocolate.jpg" />
        <Card.Body style={{ wordWrap: 'wrap' }}>
          <Card.Title>{get(product, 'name', 'No title')}</Card.Title>
          <Card.Text>Rs. {get(product, 'price', 'Price not defined')}</Card.Text>
        </Card.Body>
      </Card>

    </div>
  )
}

export default CustomCard;