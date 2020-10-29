import { Card } from 'react-bootstrap';
import { Paper, Slide } from '@material-ui/core';

import React from 'react';
import '../styles/card.scss';

function CustomCard(props) {
  const {
    title,
    style,
    description,
    image,
  } = props;
  return (
    <div className='cardStyle'>
      
      <Card body style={{borderRadius: '30px'}}>
        <Card.Img style={{ maxHeight: '200px', minHeight: '200px' }} variant="top" src="chocolate.jpg" />
        <Card.Body style={{ wordWrap: 'wrap' }}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
      
    </div>
  )
}

export default CustomCard;