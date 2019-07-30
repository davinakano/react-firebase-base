import React from 'react';
import { withFirebase } from '../Firebase';

const PasswordChangeForm = (props) => {
  const initialState = {
    password: '',
    passwordConfirmation: '',
    error: null,
  };

  const [fields, setFields] = React.useState(initialState);
  const onChangeField = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  const { password, passwordConfirmation, error } = fields;
  const isInvalid = password === '' || password !== passwordConfirmation;

  const onSubmit = (e) => {
    props.firebase
      .doPasswordUpdate(password)
      .then(() => setFields(initialState))
      .catch((error) => setFields({ error }))

    e.preventDefault();
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        name="password"
        type="password"
        value={password}
        onChange={onChangeField}
        placeholder="New password"
      />
      <input
        name="passwordConfirmation"
        type="password"
        value={passwordConfirmation}
        onChange={onChangeField}
        placeholder="Confirm password"
      />
      <button disabled={isInvalid} type="submit">
        Change my password
      </button>
      { error && <p>{ error.message }</p> }
    </form>
  );
};

export default withFirebase(PasswordChangeForm);