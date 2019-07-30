import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withAuthentication } from '../Session';
import Navigation from '../Navigation';

// Pages
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import ForgetPasswordPage from '../PasswordForget';
import AccountPage from '../Account';
import HomePage from '../Home';

import * as ROUTES from '../../constants/routes';

const App = () => {
  return (
    <Router>
      <Navigation />

      <hr />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={ForgetPasswordPage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
    </Router>
  )
}

export default withAuthentication(App);