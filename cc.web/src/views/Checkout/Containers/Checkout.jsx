import { connect } from 'react-redux';
import { get } from 'lodash'
import Checkout from '../Component/Checkout';
import { actionCreators } from '../../../redux/Checkout';

const mapStateToProps = ({ checkout }) => {
  return {
    customer: {
      firstName: get(checkout, 'firstName', ''),
      lastName: get(checkout, 'lastName', ''),
      phoneNumber: get(checkout, 'phoneNumber', ''),
      emailAddress: get(checkout, 'emailAddress', ''),
    },
    address: {
      addressLine1: get(checkout, 'addressLine1', ''),
      addressLine2: get(checkout, 'addressLine2', ''),
      city: get(checkout, 'city', ''),
      zip: get(checkout, 'postalCode', ''),
      state: get(checkout, 'state', ''),
      landmark: get(checkout, 'landmark', ''),
      country: get(checkout, 'country', ''),
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFirstName: ({ target }) => {
      console.log(target)
      return dispatch(actionCreators.changeFirstName(target.value))
    }
  };
}
// Exports
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
