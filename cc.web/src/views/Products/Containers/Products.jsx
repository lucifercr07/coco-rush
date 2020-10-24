import { connect } from 'react-redux';
import { get } from 'lodash'
import Products from '../Component';
// import { actionCreators } from '../../../redux/Checkout';

const mapStateToProps = ({ checkout }) => ({
//   const addressForm = checkout.addressForm;
//   return {
//     customer: {
//       firstName: get(addressForm, 'firstName', ''),
//       lastName: get(addressForm, 'lastName', ''),
//       phoneNumber: get(addressForm, 'phoneNumber', ''),
//       emailAddress: get(addressForm, 'emailAddress', ''),
//     },
//     address: {
//       addressLine1: get(addressForm, 'addressLine1', ''),
//       addressLine2: get(addressForm, 'addressLine2', ''),
//       city: get(addressForm, 'city', ''),
//       postalCode: get(addressForm, 'postalCode', ''),
//       state: get(addressForm, 'state', ''),
//       landmark: get(addressForm, 'landmark', ''),
//       country: get(addressForm, 'country', ''),
//     },
//     invalidForm: get(addressForm, 'invalidForm', false)
//   };
});

const mapDispatchToProps = (dispatch) => {
  return {
    // changeFirstName: ({ target }) => dispatch(actionCreators.changeFirstName(target.value)),
    // changeLastName: ({ target }) => dispatch(actionCreators.changeLastName(target.value)),
    // changePhoneNumber: ({ target }) => dispatch(actionCreators.changePhoneNumber(target.value)),
    // changeEmailAddress: ({ target }) => dispatch(actionCreators.changeEmailAddress(target.value)),
    // changeAddressLine1: ({ target }) => dispatch(actionCreators.changeAddressLine1(target.value)),
    // changeAddressLine2: ({ target }) => dispatch(actionCreators.changeAddressLine2(target.value)),
    // changeCity: ({ target }) => dispatch(actionCreators.changeCity(target.value)),
    // changeCountry: ({ target }) => dispatch(actionCreators.changeCountry(target.value)),
    // changePostalCode: ({ target }) => dispatch(actionCreators.changePostalCode(target.value)),
    // changeState: ({ target }) => dispatch(actionCreators.changeState(target.value)),
    // changeLandmark: ({ target }) => dispatch(actionCreators.changeLandmark(target.value)),
  };
}
// Exports
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
