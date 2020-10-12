import _ from 'lodash';
import * as actions from './actions'

function getInitialValue(value, regex, invertRule = false) {
  return {
    value: value,
    error: false,
    regex: new RegExp(regex),
    invertRule,
  }
}

function validateAddressForm(addressForm) {
  console.log(Object.keys(addressForm));
  return Object.keys(addressForm).some(key => {
    console.log(addressForm[key]);
    return addressForm[key].error === true})
}

// Initial State
const initialState = {
  addressForm: {
    firstName: getInitialValue('', '^(([A-Za-z ]+[\-\']?)*([A-Za-z]+)?)+$'),
    lastName: getInitialValue('', '^(([A-Za-z ]+[\-\']?)*([A-Za-z]+)?)+$'),
    phoneNumber: getInitialValue('', '^[1-9][0-9]{9}$'),
    emailAddress: getInitialValue('', "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"),
    addressLine1: getInitialValue('', '^.*$', true),
    addressLine2: getInitialValue('', '^.*$', true),
    city: getInitialValue('', '^[a-zA-Z\u0080-\u024F]+(?:([\ \-\']|(\.\ ))[a-zA-Z\u0080-\u024F]+)*$'),
    country: getInitialValue('India', '^.*$'),
    postalCode: getInitialValue('', '^[1-9][0-9]{5}$'),
    state: getInitialValue('', '^.*$', true),
    landmark: getInitialValue('', '^.*$'),
  }
};

const checkoutReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case actions.CHANGE_FIRST_NAME:{
      console.log(action)
      return {
        ...state,
        addressForm: {
          ...state.addressForm,
          firstName: {
            ...state.addressForm.firstName,
            value: action.data,
            error: !state.addressForm.firstName.regex.test(action.data) || _.isEmpty(_.trim(action.data))
          },
          invalidForm: validateAddressForm(state.addressForm)
        }
      };
}
    case actions.CHANGE_LAST_NAME:
      return {
        ...state,
        addressForm: {
          ...state.addressForm,
          lastName: {
            ...state.addressForm.lastName,
            value: action.data,
            error: !state.addressForm.lastName.regex.test(action.data) || _.isEmpty(_.trim(action.data))
          },
          invalidForm: validateAddressForm(state.addressForm)
        }
      };

    case actions.CHANGE_PHONE_NUMBER:
      return {
        ...state,
        addressForm: {
          ...state.addressForm,
          phoneNumber: {
            ...state.addressForm.phoneNumber,
            value: action.data,
            error: !state.addressForm.phoneNumber.regex.test(action.data)
          },
          invalidForm: validateAddressForm(state.addressForm)
        }
      };

    case actions.CHANGE_EMAIL_ADDRESS:
      return {
        ...state,
        addressForm: {
          ...state.addressForm,
          emailAddress: {
            ...state.addressForm.emailAddress,
            value: action.data,
            error: !state.addressForm.emailAddress.regex.test(action.data)
          },
          invalidForm: validateAddressForm(state.addressForm)
        }
      };

    case actions.CHANGE_ADDRESS_LINE_1:
      return {
        ...state,
        addressForm: {
          ...state.addressForm,
          addressLine1: {
            ...state.addressForm.addressLine1,
            value: action.data,
            error: !state.addressForm.addressLine1.regex.test(action.data)
          },
          invalidForm: validateAddressForm(state.addressForm)
        }
      };

    case actions.CHANGE_ADDRESS_LINE_2:
      return {
        ...state,
        addressForm: {
          ...state.addressForm,
          addressLine2: {
            ...state.addressForm.addressLine2,
            value: action.data,
            error: !state.addressForm.addressLine2.regex.test(action.data)
          },
          invalidForm: validateAddressForm(state.addressForm)
        }
      };

    case actions.CHANGE_CITY:
      return {
        ...state,
        addressForm: {
          ...state.addressForm,
          city: {
            ...state.addressForm.city,
            value: action.data,
            error: !state.addressForm.city.regex.test(action.data)
          },
          invalidForm: validateAddressForm(state.addressForm)
        }
      };

    case actions.CHANGE_COUNTRY:
      return {
        ...state,
        addressForm: {
          ...state.addressForm,
          country: {
            ...state.addressForm.country,
            value: action.data,
            error: !state.addressForm.country.regex.test(action.data)
          },
          invalidForm: validateAddressForm(state.addressForm)
        }
      };

    case actions.CHANGE_STATE:
      return {
        ...state,
        addressForm: {
          ...state.addressForm,
          state: {
            ...state.addressForm.state,
            value: action.data,
            error: !state.addressForm.state.regex.test(action.data)
          },
          invalidForm: validateAddressForm(state.addressForm)
        }
      };

    case actions.CHANGE_POSTAL_CODE:
      return {
        ...state,
        addressForm: {
          ...state.addressForm,
          postalCode: {
            ...state.addressForm.postalCode,
            value: action.data,
            error: !state.addressForm.postalCode.regex.test(action.data)
          },
          invalidForm: validateAddressForm(state.addressForm)
        }
      };

    case actions.CHANGE_LANDMARK:
      return {
        ...state,
        addressForm: {
          ...state.addressForm,
          landmark: {
            ...state.addressForm.landmark,
            value: action.data,
            error: !state.addressForm.landmark.regex.test(action.data)
          },
          invalidForm: validateAddressForm(state.addressForm)
        }
      };
    default: {
      return state;
    }
  }
};
// Exports
export default checkoutReducer;
