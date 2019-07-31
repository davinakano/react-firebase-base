import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

const condition = authUser => !!authUser;

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {
      authUser => (
        <div>
          <h1>Account: {authUser.email}</h1>
          <PasswordForgetForm />
          <PasswordChangeForm />
        </div>
      )
    }
  </AuthUserContext.Consumer>
);

export default withAuthorization(condition)(AccountPage);