import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import LoginPage from '../pages/LoginPage/loginPage';
import SigninPage from '../pages/SigninPage/signinPage';
import LandingPage from '../pages/LandingPage';
import ProfilePage from '../pages/ProfilePage';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={LandingPage} />
    </BrowserRouter>
  );
}

export default Routes;