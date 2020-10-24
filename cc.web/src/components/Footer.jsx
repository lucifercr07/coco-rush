import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

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
    margin: "6px 0px",
    fontFamily: 'Montserrat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  socialMediaIcon: {
    margin: "0px 2px",
    color: '#000000',
    '&:hover': {
      color: '#4d4d4d',
    },
  },
  aboutUsLink: {
    marginLeft: "585px",
    color: '#000000',
    '&:hover': {
      color: '#4d4d4d',
    },
    textAlign: 'center',
  },
  licenseImage: {
    maxHeight: '90px',
    maxWidth: '100px',
    padding: '5px',
    marginLeft: '570px',
  }
}));

export default function StickyFooter() {
  const classes = useStyles(),
    INSTAGRAM_URL = "https://www.instagram.com/thecocorush/",
    FACEBOOK_URL = "https://www.facebook.com/thecocorush";

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        
          <InstagramIcon fontSize='large'
            onClick={() => window.open(INSTAGRAM_URL, "_blank")}
            className={classes.socialMediaIcon}/>
          <FacebookIcon fontSize='large'
            onClick={() => window.open(FACEBOOK_URL, "_blank")}
            className={classes.socialMediaIcon}/>

          {/* <Copyright /> */}

          <a
            // @todo set it using react-router
            href="http://localhost:3000/aboutUs"
            className={classes.aboutUsLink}
          >
            About Us 
          </a>

          <img alt='FSSAI License' className={classes.licenseImage} src="license.jpg" />        
      </footer>
    </div>
  );
}
