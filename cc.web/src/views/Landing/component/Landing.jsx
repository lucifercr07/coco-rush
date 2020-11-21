import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Paper, CircularProgress, Grid } from '@material-ui/core';
import { isEmpty, toPlainObject } from 'lodash';
import Testimonials from '../../Testimonials'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Layout } from '../../../components';
import { TESTIMONIALS } from '../../../constants';
import './style.scss';

class Landing extends React.Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  getFeaturedProducts = () => {
    return this.props.products.filter(product => product.featured)
  }

  render() {
    const {
      fetching,
      products
    } = this.props;

    const navigateToProducts = () => this.props.history.push('/products');
    return (
      <Layout {...this.props}>
        <div>
          <center style={{ marginTop: '10px' }}>
            <img src='cc_banner_small.jpg' className='headerLogo' />
          </center>
          <br />
          {fetching ? <center><CircularProgress /></center>
            : <React.Fragment>
              <center style={{ margin: 'auto', width: '80%', marginBottom: '50px' }}>
                <Paper elevation={3} className="feature">
                  <h1 className="headers">Featured Products</h1>
                  <Grid container className="productCard" direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} md={4} >
                      <Card product={{ name: 'Some Chocolate Name', unitPrice: 243, id: 3213176 }}  {...this.props} />
                    </Grid>
                    <Grid item xs={12} md={4} >
                      <Card title='hello brotha' {...this.props} />
                    </Grid>
                    <Grid item xs={12} md={4} >
                      <Card title='hello brotha' {...this.props} />
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
            </React.Fragment>
          }
          <center style={{ margin: 'auto', width: '80%', marginBottom: '50px' }}>
            <Testimonials items={TESTIMONIALS} />
          </center>

        </div>
      </Layout>
    )
  }
}

export default Landing;