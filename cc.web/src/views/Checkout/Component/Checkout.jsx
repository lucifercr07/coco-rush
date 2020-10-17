import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import './style.scss';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    backgroundColor: "#654321",
    borderRadius: "4px",
    transition: "all 0.2s",
    color: "#ffffff",

    "&:hover": {
      background: "#87592c",
    },
    stepIcon: {
      color: "#654321",
    },
    root: {
      width: "90%"
    },
  },
}));

const steps = ['Shipping address', 'Order Details', 'Payment details'];

/**
 * Validates if value key in address or customer form is empty
 * @param {*} addressForm 
 * @param {*} customerForm 
 */
function validateAddressAndCustomerFormNotEmpty(addressForm, customerForm) {
  let isErrCustomerForm = false, isErrAddressForm = false;

  for (var key in customerForm) {
    if (customerForm[key].value === '') {
      isErrCustomerForm = true;
      customerForm[key].error = true;
    }
  }

  for (var key in addressForm) {
    if (key !== 'landmark' && addressForm[key].value === '') {
      isErrAddressForm = true;
      addressForm[key].error = true;
    }
  }

  return isErrCustomerForm || isErrAddressForm;
}

/**
 * Validates if error key set to true in props passed
 * @param {*} props 
 * @returns {Boolean}
 */
function validateIfErrorInProps(props) {
  return Object.keys(props).some(key => {return props[key].error})
}

function getStepContent(step, props) {
  switch (step) {
    case 0:
      return <AddressForm  {...props} />;
    case 1:
      return <Review {...props} />;
    case 2:
      return <PaymentForm {...props} />;
    default:
      throw new Error('Unknown step');
  }
}

function shouldDisableButton(props, activeStep) {
  console.log(validateIfErrorInProps(props.customer));
  console.log(validateIfErrorInProps(props.address));
  console.log(validateAddressAndCustomerFormNotEmpty(props.address, props.customer));
  switch (activeStep) {
    case 0:
      return validateIfErrorInProps(props.customer)
        || validateIfErrorInProps(props.address) 
        || validateAddressAndCustomerFormNotEmpty(props.address, props.customer);
    case 1:
      return false;
    case 2:
      return false;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout(props) {
  let isNextButtonDisabled = false;
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = (props) => {
    if (shouldDisableButton(props, activeStep)) {
      isNextButtonDisabled = true;
      return;
    };
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <h5 className="header__text" align="center">
            Checkout
          </h5>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconProps={{
                    classes: { root: classes.stepIcon }
                  }}>{label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
                <React.Fragment>
                  {getStepContent(activeStep, props)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleNext(props)}
                      className={classes.button}
                      disabled={isNextButtonDisabled}
                    >
                      {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}