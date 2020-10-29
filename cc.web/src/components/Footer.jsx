import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { INSTAGRAM_URL, FACEBOOK_URL } from '../constants';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
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
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    fontFamily: 'Montserrat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    textAlign: 'center',
  },
  socialMediaIcon: {
    margin: "0px 2px",
    color: '#000000',
    '&:hover': {
      color: '#4d4d4d',
    },
    float: 'left',
  },
  aboutUsLink: {
    color: '#000000',
    '&:hover': {
      color: '#4d4d4d',
    },
  },
  licenseImage: {
    maxHeight: '50px',
    maxWidth: '60px',
    float: 'right'
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <InstagramIcon fontSize='large'
          onClick={() => window.open(INSTAGRAM_URL, "_blank")}
          className={classes.socialMediaIcon} />
        <FacebookIcon fontSize='large'
          onClick={() => window.open(FACEBOOK_URL, "_blank")}
          className={classes.socialMediaIcon} />
        <a
          href={window.location.origin + "/aboutUs"}
          className={classes.aboutUsLink}
        >
          About Us
        </a>
        <img alt='FSSAI License' className={classes.licenseImage} src="license.jpg" />
      </footer>
    </div>
  );
}
