import React from 'react';
import { Link } from 'react-router-dom';
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

  const isInvalid = email === '';

  // Hooks
  const [fields, setField] = React.useState(initialState);
  const onChangeField = (e) => {
    setField({
      ...fields,
      [e.target.name]: e.target.value,
    })
  };

  const onSubmit = () => {

  }

  return (
    <form>
      <h1>This will be a form!</h1>
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