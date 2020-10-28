import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
import Header from './views/Header';
import { Footer } from './components';

function CocoRushApp() {
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        {routes}
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}

export default CocoRushApp;
