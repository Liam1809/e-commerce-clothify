import React, { Fragment, useState } from 'react';
import {
  signInWithGooglePopup,
  createAuthUserFromDocFireBase,
  signInAuthUserWithEmailAndPasswordFirebase,
} from '../../api/firebase/firebase';
import { AuthErrorCodes } from 'firebase/auth';
// import { getRedirectResult } from 'firebase/auth';

import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';

import { BUTTON_TYPES } from '../../constants/buttons/buttons';

import './styles.scss';

const initialFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(initialFormFields);
  const { email, password } = formFields;

  // uncomment to use login google with redirect
  // useEffect(() => {
  //   async function loginGoogleWithRedirect() {
  //     const { user } = await getRedirectResult(auth);

  //     if (user) {
  //       const response = await createAuthUserFromDocFireBase(user);

  //       console.log(response);
  //     }
  //   }
  //   loginGoogleWithRedirect();
  // }, []);

  const loginGoogleWithPopup = async event => {
    const { user } = await signInWithGooglePopup();

    const response = await createAuthUserFromDocFireBase(user);

    return response;
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPasswordFirebase(
        email,
        password
      );
      clearFormFields();

      return response;
    } catch (error) {
      if (
        error.code === AuthErrorCodes.USER_DELETED ||
        error.code === AuthErrorCodes.INVALID_PASSWORD
      ) {
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
        <h2>Sign In Now</h2>
        <span>Sign In with your Email and Password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            id="email-signin"
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={handleOnChange}
            minLength="15"
          />
          <FormInput
            id="password-signin"
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={handleOnChange}
            minLength="8"
          />

          <div className="buttons-container">
            <Button type="submit">Sign In</Button>
            <Button
              buttonType={BUTTON_TYPES.google}
              type="button"
              onClick={() => loginGoogleWithPopup()}
            >
              Google Sign in
            </Button>
            {/* <Button
              buttonType={BUTTON_TYPES.google}
              type="button"
              onClick={signInWithGoogleRedirect()}
            >
              Google Sign-in
            </Button> */}
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default SignInForm;
