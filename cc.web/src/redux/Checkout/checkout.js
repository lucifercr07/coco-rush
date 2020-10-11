import * as actions from './actions'

function getInitialValue(defaultValue, regex, invertRule = false) {
  return {
    value: defaultValue,
    error: false,
    regex: new RegExp(regex),
    invertRule,
  }
}

// Initial State
const initialState = {
  firstName: getInitialValue('', '^(([A-Za-z ]+[\-\']?)*([A-Za-z]+)?)+$'),
  lastName: getInitialValue('', '^(([A-Za-z ]+[\-\']?)*([A-Za-z]+)?)+$'),
  phoneNumber: getInitialValue('', '^[1-9][0-9]{9}$'),
  emailAddress: getInitialValue('', "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"),
  addressLine1: getInitialValue('', '^\s*$', true),
  addressLine2: getInitialValue('', '^\s*$', true),
  city: getInitialValue('', '^[a-zA-Z\u0080-\u024F]+(?:([\ \-\']|(\.\ ))[a-zA-Z\u0080-\u024F]+)*$'),
  country: getInitialValue('India', '^\s*$'),
  postalCode: getInitialValue('', '^[1-9][0-9]{5}$'),
  state: getInitialValue('', '^\s*$', true),
  landmark: getInitialValue('', '^\s$', true),
};



const checkoutReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actions.CHANGE_FIRST_NAME:
      return {
        ...state,
        firstName: {
          ...state.firstName,
          value: action.data,
          error: !state.firstName.regex.test(action.data)
        }
      };

    case actions.CHANGE_LAST_NAME:
      return {
        ...state,
        lastName: {
          ...state.lastName,
          value: action.data,
          error: !state.lastName.regex.test(action.data)
        }
      };

    case actions.CHANGE_PHONE_NUMBER:
      return {
        ...state,
        phoneNumber: {
          ...state.phoneNumber,
          value: action.data,
          error: !state.phoneNumber.regex.test(action.data)
        }
      };

    case actions.CHANGE_EMAIL_ADDRESS:
      return {
        ...state,
        emailAddress: {
          ...state.emailAddress,
          value: action.data,
          error: !state.emailAddress.regex.test(action.data)
        }
      };

    case actions.CHANGE_ADDRESS_LINE_1:
      return {
        ...state,
        addressLine1: {
          ...state.addressLine1,
          value: action.data,
          error: !state.addressLine1.regex.test(action.data)
        }
      };

    case actions.CHANGE_ADDRESS_LINE_2:
      return {
        ...state,
        addressLine2: {
          ...state.addressLine2,
          value: action.data,
          error: !state.addressLine2.regex.test(action.data)
        }
      };

    case actions.CHANGE_CITY:
      return {
        ...state,
        city: {
          ...state.city,
          value: action.data,
          error: !state.city.regex.test(action.data)
        }
      };

    case actions.CHANGE_COUNTRY:
      return {
        ...state,
        country: {
          ...state.country,
          value: action.data,
          error: !state.country.regex.test(action.data)
        }
      };

    case actions.CHANGE_STATE:
      return {
        ...state,
        state: {
          ...state.state,
          value: action.data,
          error: !state.state.regex.test(action.data)
        }
      };

    case actions.CHANGE_POSTAL_CODE:
      return {
        ...state,
        postalCode: {
          ...state.postalCode,
          value: action.data,
          error: !state.postalCode.regex.test(action.data)
        }
      };

    case actions.CHANGE_LANDMARK:
      return {
        ...state,
        landmark: {
          ...state.landmark,
          value: action.data,
          error: !state.landmark.regex.test(action.data)
        }
      };

    default: {
      return state;
    }
  }
};
// Exports
export default checkoutReducer;
