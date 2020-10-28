import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import routes from './routes';

function CocoRushApp() {
  return (
    <React.Fragment>
      <BrowserRouter history={createBrowserHistory()}>
        {routes}
      </BrowserRouter>
    </React.Fragment>
  );
}

export default CocoRushApp;
