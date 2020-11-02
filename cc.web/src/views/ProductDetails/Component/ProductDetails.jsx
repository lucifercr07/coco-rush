import React from 'react';
import { Paper, Container, Button, ButtonGroup } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Form, InputGroup } from 'react-bootstrap'
import { INR_SYMBOL } from '../../../constants'
import './style.scss';
import { Layout } from '../../../components'
import Grid from '@material-ui/core/Grid';

class ProductDetails extends React.Component {
  render() {
    let {
      productName,
    } = this.props;
    if (!productName) {
      productName = 'Chocolate'
    }
    return (
      <Layout {...this.props}>
        <Container maxWidth="lg">
          <Grid container spacing={3} direction="row" justify="center" alignItems="center">
            <Grid item xs={12} sm={6}>
              <img src="chocolate.jpg" alt="" className="img" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className="description" elevation={3}>
                <h1>{productName}</h1>
                <div className="font">
                  PRICE : <span>{`${INR_SYMBOL} 148`}</span>
                  <br /> <br />
                  DESCRIPTION
                </div>
                <p>The preferred choice of a vast range of chocolate lovers. Creamy nutty and what not!!! The preferred choice of a vast range of chocolate lovers. Creamy nutty and what not!!!The preferred choice of a vast range of chocolate lovers. Creamy nutty and what not!!!</p>
                <br />
                <Form.Group>
                  <InputGroup>
                    <InputGroup.Prepend className="quanity-width">
                      <Button variant="contained" fullWidth={true} className="quanity-button" >
                        < RemoveIcon />
                      </Button>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="text"
                      placeholder="QTY"
                      value={1}
                      className="quanity-input"
                    />
                    <InputGroup.Append className="quanity-width">
                      <Button variant="contained" fullWidth={true} className="quanity-button" >
                        < AddIcon />
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Form.Group>
                <Button variant="contained" fullWidth={true} className="cart-button">Add to cart</Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    )
  }
} export default ProductDetails;