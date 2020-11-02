import { connect } from 'react-redux';
import { get } from 'lodash'
import Products from '../Component';
import { actionCreators } from '../../../redux/Landing';

const mapStateToProps = ({ landing, products }) => ({
  fetching: get(landing, 'fetching', false),
  products: get(landing, 'products', []),
  productsByCategory: {
    'chocolate beans': get(products, 'productsByCategory.chocolate beans', []),
    'hampers': get(products, 'productsByCategory.hampers', []),
    'nutties': get(products, 'productsByCategory.nutties', []),
    'bars': get(products, 'productsByCategory.bars', []),
    'truffle': get(products, 'productsByCategory.truffle', []),
    'special': get(products, 'productsByCategory.special', []),
    'baskets': get(products, 'productsByCategory.baskets', []),
  }
});

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(actionCreators.getAllProducts())
  };
}
// Exports
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
