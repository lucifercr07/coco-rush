import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { get } from 'lodash'
import { createBrowserHistory } from 'history';
import routes from './routes';
import { actionCreators } from './redux/Landing';

class CocoRushApp extends React.Component {
  componentDidMount() {
    this.props.getProducts()
  }
  render() {
    return (
      <React.Fragment>
        <BrowserRouter history={createBrowserHistory()}>
          {routes}
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ landing }) => (
  {
    fetching: get(landing, 'fetching', false),
    products: get(landing, 'products', []),
  });

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(actionCreators.getAllProducts()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CocoRushApp);
