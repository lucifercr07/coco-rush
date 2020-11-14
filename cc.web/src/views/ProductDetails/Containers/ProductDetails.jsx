import { connect } from 'react-redux';
import { get } from 'lodash'
import ProductDetails from '../Component';
import { actionCreators } from '../../../redux/ProductDetails';

const mapStateToProps = ({ productDetails }) => ({
  fetching: get(productDetails, 'fetching', false),
  productDetails: get(productDetails, 'productDetails', {})
});

const mapDispatchToProps = (dispatch) => {
  return {
    getProductDetails: id => dispatch(actionCreators.getProductDetails(id))
  };
}
// Exports
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
