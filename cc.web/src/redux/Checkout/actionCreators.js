import * as actions from './actions';

export const changeFirstName = data => {
  console.log('from creator')
  console.log(data)
  return {
    type: actions.CHANGE_FIRST_NAME,
    data,
  }
};

export const changeLastName = data => ({
  type: actions.CHANGE_LAST_NAME,
  data,
});

export const changeAddressLine1 = data => ({
  type: actions.CHANGE_ADDRESS_LINE_1,
  data,
});

export const changeAddressLine2 = data => ({
  type: actions.CHANGE_ADDRESS_LINE_2,
  data,
});

export const changePhoneNumber = data => ({
  type: actions.CHANGE_PHONE_NUMBER,
  data,
});

export const changeEmailAddress = data => ({
  type: actions.CHANGE_EMAIL_ADDRESS,
  data,
});

export const changePostalCode = data => ({
  type: actions.CHANGE_POSTAL_CODE,
  data,
});

export const changeCountry = data => ({
  type: actions.CHANGE_COUNTRY,
  data,
});

export const changeCity = data => ({
  type: actions.CHANGE_CITY,
  data,
})

export const changeState = data => ({
  type: actions.CHANGE_STATE,
  data,
});

export const changeLandmark = data => ({
  type: actions.CHANGE_LANDMARK,
  data,
});

export const setPostalCodeError = error => ({
  type: actions.SET_POSTAL_CODE_ERROR,
  error,
});