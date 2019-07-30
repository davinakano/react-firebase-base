import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import SignOutButton from '../SignOut';
import { withAuthentication } from '../Session';

const Navigation = (props) => {
  const { authUser } = props;

  return (
    <div>
      { authUser ? <NavigationAuth /> : <NavigationNonAuth /> }
    </div>
  )
};

const NavigationNonAuth = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
        <li>
          <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
      </ul>
    </div>
  )
}

const NavigationAuth = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        <li>
          <SignOutButton />
        </li>
      </ul>
    </div>
  )
}

export default withAuthentication(Navigation);