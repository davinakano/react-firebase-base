import React from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const ForgetPasswordPage = () => (
  <div>
    <h1>PasswordForget</h1>
    <PasswordForgetForm />
  </div>
);

const PasswordForgetFormBase = (props) => {
  const initialState = {
    email: '',
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
    e.preventDefault();

    props.firebase
      .doPasswordReset(fields.email)
      .then(() => {
        setField(initialState);
      })
      .catch((error) => {
        setField({ error });
      });
  }

  const { email, error } = fields;
  const isInvalid = email === '';

  return (
    <form onSubmit={onSubmit}>
      <input
        name="email"
        value={email}
        onChange={onChangeField}
        type="text"
        placeholder="Email Address"
      />
      <button disabled={isInvalid} type="submit">
        Reset My Password
      </button>

      { error && <p>{ error.message }</p>}
    </form>
  );
};

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot password?</Link>
  </p>
);

export default ForgetPasswordPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };