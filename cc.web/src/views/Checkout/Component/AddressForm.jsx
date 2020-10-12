import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function AddressForm(props) {
  const {
    customer,
    address,
    changeFirstName,
    changeLastName,
    changePhoneNumber,
    changeEmailAddress,
    changeAddressLine1,
    changeAddressLine2,
    changeCity,
    changeCountry,
    changePostalCode,
    changeState,
    changeLandmark,
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            error={customer.firstName.error}
            value={customer.firstName.value}
            autoComplete="given-name"
            onChange={changeFirstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            onChange={changeLastName}
            error={customer.lastName.error}
            value={customer.lastName.value}
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Flat, House no, Building, Company"
            fullWidth
            onChange={changeAddressLine1}
            error={address.addressLine1.error}
            value={address.addressLine1.value}
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address2"
            name="address2"
            label="Area, Street, Colony, Sector, Village"
            fullWidth
            onChange={changeAddressLine2}
            error={address.addressLine2.error}
            value={address.addressLine2.value}
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="landmark"
            name="landmark"
            label="Landmark"
            fullWidth
            onChange={changeLandmark}
            error={address.landmark.error}
            value={address.landmark.value}
            autoComplete="landmark"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            onChange={changeCity}
            error={address.city.error}
            value={address.city.value}
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            onChange={changeState}
            error={address.state.error}
            value={address.state.value}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Pin / Postal code"
            fullWidth
            onChange={changePostalCode}
            error={address.postalCode.error}
            value={address.postalCode.value}
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            disabled
            onChange={changeCountry}
            error={address.country.error}
            value={address.country.value}
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            fullWidth
            onChange={changePhoneNumber}
            error={customer.phoneNumber.error}
            value={customer.phoneNumber.value}
            autoComplete="phone number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="emailId"
            name="emailId"
            label="Email Address"
            fullWidth
            onChange={changeEmailAddress}
            error={customer.emailAddress.error}
            value={customer.emailAddress.value}
            autoComplete="email address"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}