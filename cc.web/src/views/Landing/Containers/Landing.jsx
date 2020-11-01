import { connect } from 'react-redux';
import { get } from 'lodash'
import Landing from '../Component/Landing';
import { actionCreators } from '../../../redux/Landing';

const mapStateToProps = ({ landing }) => (
  {
    fetching: get(landing, 'fetching', false)
  });

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => {
      return dispatch(actionCreators.getAllProducts())
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
