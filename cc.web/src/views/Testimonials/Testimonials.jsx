import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core'
import Grid from "@material-ui/core/Grid";
import Rating from '@material-ui/lab/Rating';
import './style.scss';

function Item(props) {
  return (
    <div style={{
      marginTop: "70px"
    }}>
      <Grid container justify="center">
        <Grid item xs={12} >
          <Paper elevation={3} style={{
            padding: '30px',
            fontFamily: "'Amatic SC', cursive",
            backgroundColor:'#654321',
            color: 'white'
          }}>
            <div>
              <img src="profile.jpg" alt="..." style={{
                borderRadius: "50%",
                maxWidth: '140px',
                width: '100%',
                margin: "0 auto",
                transform: "translate3d(0, -70%, 0)",
                verticalAlign:'middle'
              }} />
              <div style={{marginTop : '-110px'}} >
                <h3 style={{
                  marginTop: "30px",
                  minHeight: "32px",
                  fontWeight: 'bold'
                }}>{props.item.name}</h3>
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
    <Carousel>
      {
        items.map((item, i) => <Item key={i} item={item} />)
      }
    </Carousel>
  )
}

export default Testimonials;
