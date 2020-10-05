import React from 'react';
import { Card, Button, Carousel, Jumbotron, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';

class Landing extends React.Component {
  render() {

    var cardStyle = {
      flex: 2,
      margin: '30px',
      borderRadius: '30px'
    }
    return (
      <div>
        <header style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '50%'
        }}>
          <Image src="Header.jpg" fluid />
        </header>
        <Jumbotron>
          <p>Your search for tasty home made chocolates ends here....!!!</p>
          <h3>Made with Mom's love</h3>
          <div style={{ margin: 'auto' }}>
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
          </div>
        </Jumbotron>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
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
        </div>
      </div>
    )
  }
}

export default Landing;