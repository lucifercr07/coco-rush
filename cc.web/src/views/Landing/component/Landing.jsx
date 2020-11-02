import React from 'react';
import { Jumbotron, Image } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {Paper, Slide } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Testimonials from '../../Testimonials'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import { Card, Layout } from '../../../components';
import './style.scss';

class Landing extends React.Component {
  componentWillMount() {
    window.scrollTo(0, 0);
    this.props.getProducts();
  }

  render() {

    const items = [
      {
        name: "Arka Naskar",
        description: "Probably the most random thing you have ever seen! Probably the most random thing you have ever seen! Probably the most random thing you have ever seen! ",
        rating: 4
      },
      {
        name: "Prashant Shubham",
        description: "Probably the most random thing you have ever seen! Probably the most random thing you have ever seen! Probably the most random thing you have ever seen! Probably the most random thing you have ever seen! Probably the most random thing you have ever seen!",
        rating: 3
      }
    ]


    const spanClass = {
      display: 'block',
      // float:'left',
      // marginLeft:'25px',
      position: 'relative',
      fontFamily: 'tangerine',
      // minHeight:'35px',
      // maxWidth:'125px',
      paddingBottom: '10px',
      textAlign: 'center',
      fontSize: '4em'
    }
    const navigateToProducts = () => this.props.history.push('/products');
    return (
      <Layout {...this.props}>
        <div>
          <center style={{ marginTop: '10px' }}>
            <img src='cc_banner_small.jpg' className='headerLogo' />
          </center>
          <br />

          <center style={{ margin: 'auto', width: '80%', marginBottom: '50px' }}>
            <Paper elevation={3} className="feature">
              <h1 className="headers">Featured Products</h1>
              <Grid container className="productCard" direction="row" justify="center" alignItems="center">
                <Grid item xs={12} sm={4} >
                  <Card title='Some Chocolate Name' />
                </Grid>
                <Grid item xs={12} sm={4} >
                  <Card title='hello brotha' />
                </Grid>
                <Grid item xs={12} sm={4} >
                  <Card title='hello brotha' />
                </Grid>
              </Grid>
            </Paper>
          </center>

          <center style={{ margin: 'auto', width: '80%', marginBottom: '50px' }}>
            <Paper elevation={3} className="shopCard">
              <h1>
                Shop more products &nbsp;
                <span onClick={navigateToProducts} className="shopPointer">
                  here &nbsp;
                  <ArrowForwardIcon />
                </span>
              </h1>
            </Paper>
          </center>

          <center style={{ margin: 'auto', width: '80%', marginBottom: '50px' }}>
            <Testimonials items={items} />
          </center>

        </div>
      </Layout>
    )
  }
}

export default Landing;