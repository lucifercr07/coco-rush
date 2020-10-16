import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import './style.scss'

function Item(props) {
  return (
    
    <Paper elevation='10'>
      <div className="paper">
      <h2 >{props.item.name}</h2>
      <p>{props.item.description}</p>
      </div>
    </Paper>
    
  )
}

function Testimonials(props) {
  const { items } = props;
  return (
    <Carousel>
      {
        items.map((item, i) => <Item key={i} item={item} />)
      }
    </Carousel>
  )
}

export default Testimonials;
