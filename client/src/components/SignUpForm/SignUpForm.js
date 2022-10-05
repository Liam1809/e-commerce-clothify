import React, { Fragment, useState } from 'react';
import {
  createAuthUserFromDocFireBase,
  createAuthUserWithEmailAndPasswordFirebase,
} from '../../api/firebase/firebase';
import FormInput from '../FormInput/FormInput';

const initialFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(initialFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('password not identical');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPasswordFirebase(
        email,
        password
      );

      const response = await createAuthUserFromDocFireBase(user);

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChange = event => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <Fragment>
      <h1>Register Now</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          id="displayName"
          label="Display Name"
          options={{
            name: 'displayName',
            type: 'text',
            value: displayName,
            onChange: handleOnChange,
          }}
        />
        <FormInput
          id="email"
          label="Email"
          options={{
            name: 'email',
            type: 'email',
            value: email,
            onChange: handleOnChange,
          }}
        />
        <FormInput
          id="password"
          label="Password"
          options={{
            name: 'password',
            type: 'password',
            value: password,
            onChange: handleOnChange,
          }}
        />
        <FormInput
          id="confirmPassword"
          label="Confirm Password"
          options={{
            name: 'confirmPassword',
            type: 'password',
            value: confirmPassword,
            onChange: handleOnChange,
          }}
        />
        <label htmlFor="submitButton">Submit</label>
        <input id="submitButton" name="submitButton" type="submit" />
        <label htmlFor="submitButton">Submit</label>
        <input id="submitButton" name="submitButton" type="submit" />
      </form>
    </Fragment>
  );
};

export default SignUpForm;
