import React, { Fragment, useState, useContext } from 'react';
import {
  createAuthUserFromDocFireBase,
  createAuthUserWithEmailAndPasswordFirebase,
} from '../../api/firebase/firebase';
import { AuthErrorCodes } from 'firebase/auth';
// import { getRedirectResult } from 'firebase/auth';

import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';

import './styles.scss';
import { UserContext } from '../../contexts/user.context';

const initialFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(initialFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const { setCurrentUser } = useContext(UserContext);

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

      setCurrentUser(user);
      const response = await createAuthUserFromDocFireBase(user, {
        displayName,
      });

      clearFormFields();
      return response;
    } catch (error) {
      if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
        alert('Wrong or existed credentials');
      } else {
        alert('User creation encountered an error');
      }
      clearFormFields();
    }
  };

  const handleOnChange = event => {
    const { name, value } = event.target;

    const limitMaxCharacter = {
      displayName: 15,
      email: 35,
      password: 25,
      confirmPassword: 25,
    };

    setFormFields({
      ...formFields,
      [name]: value.slice(0, limitMaxCharacter[name] - 1),
    });
  };

  const clearFormFields = () => {
    setFormFields(initialFormFields);
  };
  return (
    <Fragment>
      <div className="sign-up-container">
        <h2>Register Now</h2>
        <span>Sign up with your Email and Password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            id="displayName"
            label="Display Name"
            name="displayName"
            type="text"
            value={displayName}
            onChange={handleOnChange}
            minLength="10"
          />
          <FormInput
            id="email-signup"
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={handleOnChange}
            minLength="15"
          />
          <FormInput
            id="password-signup"
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={handleOnChange}
            minLength="8"
          />
          <FormInput
            id="confirmPassword"
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={handleOnChange}
            minLength="8"
          />
          <div className="buttons-container">
            <Button type="submit">Register</Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default SignUpForm;
