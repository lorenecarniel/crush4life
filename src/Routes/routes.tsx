import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import LoginPage from '../pages/LoginPage/loginPage';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={LoginPage} />
    </BrowserRouter>
  );
}

export default Routes;