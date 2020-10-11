import * as actions from './actions'

// Initial State
const initialState = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  emailAddress: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  country: 'India',
  postalCode: '',
  state: '',
  landmark: '',
};

const checkoutReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actions.CHANGE_FIRST_NAME: {
      return {
        ...state,
        firstName: action.data,
      };
    }
    default: {
      return state;
    }
  }
};
// Exports
export default checkoutReducer;
