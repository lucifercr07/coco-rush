import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Layout } from '../../components';

const useStyles = makeStyles((theme) => ({
  // to-do switch to a style.scss file
  aboutUs: {
    fontFamily: 'Amatic SC',
    position: 'relative',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginTop: theme.spacing(15),
    marginRight: theme.spacing(10),
    marginLeft: theme.spacing(10),
    marginBottom: theme.spacing(10),
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    textAlign: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
    textAlign: 'center',
  },
  aboutUsContent: {
    padding: theme.spacing(5),
    fontSize: '30px',
  },
}));

const aboutUsContent = {
  title: 'About Us',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  // image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

function AboutUs(props) {
  const classes = useStyles();

  return (
    <Layout {...props}>
      <Paper className={classes.aboutUs} style={{ backgroundImage: `url(${aboutUsContent.image})` }}>
        {<img style={{ display: 'none' }} src={aboutUsContent.image} alt={aboutUsContent.imageText} />}
        <div style={{ fontSize: '55px', align: "center" }}>
          {aboutUsContent.title}
        </div>
        <div className={classes.overlay} />
        <div className={classes.aboutUsContent}>
          <p>
            {aboutUsContent.description}
          </p>
        </div>
      </Paper>
    </Layout>
  );
}

AboutUs.propTypes = {
  post: PropTypes.object,
};

export default AboutUs;
