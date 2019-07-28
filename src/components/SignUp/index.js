import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FirebaseContext, withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignUpPage = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <FirebaseContext.Consumer>
        { firebase => <SignUpForm firebase={firebase} />}
      </FirebaseContext.Consumer>
    </div>
  )
};

const SignUpFormBase = (props) => {
  const initialState = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
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
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        setField(initialState);
        props.history.push(ROUTES.HOME);
      })
      .catch(error => setField({ error }))

    e.preventDefault();
  };

  const { username, email, password, passwordConfirmation, error } = fields;
  const isInvalid =
    password !== passwordConfirmation ||
    password === '' ||
    email === '' ||
    username === '';

  return (
    <form onSubmit={onSubmit}>
      <input
        name="username"
        value={username}
        onChange={onChangeField}
        type="text"
        placeholder="Full Name"
      />
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
      <input
        name="passwordConfirmation"
        value={passwordConfirmation}
        onChange={onChangeField}
        type="password"
        placeholder="Password Confirmation"
      />
      <button type="submit" disabled={isInvalid}>Sign Up</button>

      { error && <p>{ error.message }</p> }
    </form>
  )
};

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };