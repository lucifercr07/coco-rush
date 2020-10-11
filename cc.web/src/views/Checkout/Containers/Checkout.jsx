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
      postalCode: get(checkout, 'postalCode', ''),
      state: get(checkout, 'state', ''),
      landmark: get(checkout, 'landmark', ''),
      country: get(checkout, 'country', ''),
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFirstName: ({ target }) => dispatch(actionCreators.changeFirstName(target.value)),
    changeLastName: ({ target }) => dispatch(actionCreators.changeLastName(target.value)),
    changePhoneNumber: ({ target }) => dispatch(actionCreators.changePhoneNumber(target.value)),
    changeEmailAddress: ({ target }) => dispatch(actionCreators.changeEmailAddress(target.value)),
    changeAddressLine1: ({ target }) => dispatch(actionCreators.changeAddressLine1(target.value)),
    changeAddressLine2: ({ target }) => dispatch(actionCreators.changeAddressLine2(target.value)),
    changeCity: ({ target }) => dispatch(actionCreators.changeCity(target.value)),
    changeCountry: ({ target }) => dispatch(actionCreators.changeCountry(target.value)),
    changePostalCode: ({ target }) => dispatch(actionCreators.changePostalCode(target.value)),
    changeState: ({ target }) => dispatch(actionCreators.changeState(target.value)),
    changeLandmark: ({ target }) => dispatch(actionCreators.changeLandmark(target.value)),
  };
}
// Exports
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
