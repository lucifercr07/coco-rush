import React from 'react';
import { Card, Button, Carousel, Jumbotron, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '../../SideBar';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
// import bgImage from '../../../../public/'
// import './index.css';

class Landing extends React.Component {
  render() {

    var cardStyle = {
      flex: 2,
      margin: '30px',
      borderRadius: '30px'
    }

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
    return (
      <div style={{ backgroundImage: "url('bg_image.jpg')" }}>
        {/* <SideBar /> */}
        {/* <hr style={{ borderTop: '3px solid #b29a86' }} /> */}
        <center>
          <img src='coco rush header.jpg' style={{ margin: 'auto', width: '80%', height: '400px' }} />
        </center>
        {/* <center >

          <span style={spanClass}>
            Made with Mom's love
            </span>

          <span>
            <img style={spanClass}
              src="header.png"
            />
          </span>

          <span style={spanClass}>Your search for tasty home made chocolates ends here....!!!</span>
        </center> */}
        <p></p>
        <h3></h3>
        <center style={{ margin: 'auto', width: '80%', height: '400px' }}>
          <Card body>
            <Carousel slide={true}>
              <Carousel.Item >
                <img
                  width={500}
                  height={400}
                  className="d-block w-100"
                  src="chocolate4.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  width={500}
                  height={400}
                  className="d-block w-100"
                  src="chocolate3.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  width={500}
                  height={400}
                  className="d-block w-100"
                  src="chocolate1.jpg"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Card>
        </center>


        {/* <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          <Card className='card' style={cardStyle}>
            <Card.Img variant="top" src="chocolate.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk ofthe card's content.</Card.Text>
              <Button variant="light">Add To Cart</Button>
            </Card.Body>
          </Card>
          <Card className='card' style={cardStyle}>
            <Card.Img variant="top" src="chocolate1.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk ofthe card's content.</Card.Text>
              <Button variant="light">Add To Cart</Button>
            </Card.Body>
          </Card>
          <Card className='card' style={cardStyle}>
            <Card.Img variant="top" src="chocolate3.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk ofthe card's content.</Card.Text>
              <Button variant="light">Add To Cart</Button>
            </Card.Body>
          </Card>
          <Card className='card' style={cardStyle}>
            <Card.Img variant="top" src="chocolate.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk ofthe card's content.</Card.Text>
              <Button variant="light">Add To Cart</Button>
            </Card.Body>
          </Card>
        </div> */}
        <span style={{ position: 'relative', float: 'right', marginTop: '1.3em' }}>
          <InstagramIcon fontSize='large' />
          <FacebookIcon fontSize='large' />
        </span>
      </div>
    )
  }
}

export default Landing;