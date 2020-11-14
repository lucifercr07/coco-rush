import { connect } from 'react-redux';
import { get } from 'lodash'
import ProductDetails from '../Component';
import { actionCreators } from '../../../redux/ProductDetails';

const mapStateToProps = ({ productDetails }) => ({
  fetching: get(productDetails, 'fetching', false),
  productDetails: get(productDetails, 'productDetails', {}),
  quantity: get(productDetails, 'quantity', 1)
});

const mapDispatchToProps = dispatch => {
  return {
    getProductDetails: id => dispatch(actionCreators.getProductDetails(id)),
    onAddClick: quantity => dispatch(actionCreators.increaseQuantity(quantity)),
    onRemoveClick: quantity => dispatch(actionCreators.decreaseQuantity(quantity)),
    addToCart: product => dispatch(actionCreators)  // Change this
  };
}
// Exports
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
