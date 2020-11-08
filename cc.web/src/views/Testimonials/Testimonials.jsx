import React from 'react';
import Carousel from "react-slick";
import { Paper } from '@material-ui/core'
import Grid from "@material-ui/core/Grid";
import Rating from '@material-ui/lab/Rating';
import './style.scss';


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true
};

function Item(props) {
  return (
    <div style={{
      marginTop: "70px"
    }}>
      <Grid container justify="center">
        <Grid item xs={12} >
          <Paper elevation={3} className="testimonial-paper">
            <div>
              <img src="profile.jpg" alt="..." />
              <div style={{ marginTop: '-110px' }} >
                <h3>{props.item.name}</h3>
                <Rating name="read-only" value={props.item.rating} readOnly />
                <p>{props.item.description}</p>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

function Testimonials(props) {
  const { items } = props;
  return (
    <Carousel {...settings}>
      {
        items.map((item, i) => <Item key={i} item={item} />)
      }
    </Carousel>
  )
}

export default Testimonials;
