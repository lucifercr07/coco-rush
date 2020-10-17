import React from 'react';
import { Button, Jumbotron, Image } from 'react-bootstrap'
import { Paper, Slide } from '@material-ui/core';
import Testimonials from '../../Testimonials'
import 'bootstrap/dist/css/bootstrap.min.css';

// import SideBar from '../../SideBar';
import './style.scss';
import { Footer, Card } from '../../../components';
// import bgImage from '../../../../public/'
// import './index.css';

class Landing extends React.Component {
  render() {

    const items = [
      {
        name: "Arka Naskar",
        description: "Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!"
      },
      {
        name: "Prashant Shubham",
        description: "Hello World!"
      }
    ]

    return (
      <div>
        {/* <SideBar /> */}

        <center style={{ marginTop: '10px' }}>
          <img src='cc_banner_small.jpg' className='headerLogo' />
        </center>
        <p></p>
        <h3></h3>


        <h1 className="headers"><u>Featured products</u></h1>
        <div className="productCard">
          <Card title='Some Chocolate Name' />
          <Card title='hello brotha' />
          <Card title='hello brotha' />
        </div>


        <center style={{ margin: 'auto', width: '80%', height: '400px' }}>
          <Testimonials items={items} />
        </center>

        <Footer />
      </div>
    )
  }
}

export default Landing;