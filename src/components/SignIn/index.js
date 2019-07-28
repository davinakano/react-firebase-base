import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignInPage = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <SignInForm />
      <SignUpLink />
    </div>
  )
};

const SignInFormBase = (props) => {
  const initialState = {
    email: '',
    password: '',
    error: null
  };

  // Hooks
  const [fields, setField] = React.useState(initialState);
  const onChangeField = (e) => {
    setField({
      ...fields,
      [e.target.name]: e.target.value,
    })
  };

  const onSubmit = (e) => {
    props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        setField(initialState);
        props.history.push(ROUTES.HOME);
      })
      .catch(error => setField({ error }))

    e.preventDefault();
  };

  const { email, password, error } = fields;
  const isInvalid = password === '' || email === ''

  return (
    <form onSubmit={onSubmit}>
      <input
        name="email"
        value={email}
        onChange={onChangeField}
        type="text"
        placeholder="Email Address"
      />
      <input
        name="password"
        value={password}
        onChange={onChangeField}
        type="password"
        placeholder="Password"
      />
      <button type="submit" disabled={isInvalid}>Sign Up</button>

      { error && <p>{ error.message }</p> }
    </form>
  )
};

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };