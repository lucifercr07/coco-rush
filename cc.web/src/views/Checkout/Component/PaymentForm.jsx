import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Image from 'react-bootstrap/Image'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Typography variant="h9" gutterBottom style={{ display: 'inline-block' }}>
        Please pay through UPI to <b>naskara97-1@iki</b> or <b>9878987644</b>. You can also scan the below QR code through your UPI app for payment.
      </Typography>
      <center>
        <Image src="qr-sample.png" fluid />
      </center>
      <br />
      <Typography variant="h9" gutterBottom style={{ display: 'inline-block' }}>
        Please enter your UPI ID that you have used to pay.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="UPI ID" fullWidth autoComplete="cc-name" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}