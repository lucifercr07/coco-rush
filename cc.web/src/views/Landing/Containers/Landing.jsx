import { connect } from 'react-redux';
import { get } from 'lodash'
import Landing from '../Component/Landing';
import { actionCreators } from '../../../redux/Landing';

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
)(Landing);
