import React, { Fragment } from 'react';
import {
  signInWithGooglePopup,
  getAndCreateUserFireBase,
} from '../../api/firebase/firebase';

const SignInRoute = () => {
  const loginGoogleWithPopup = async () => {
    const { user } = await signInWithGooglePopup();

    const response = await getAndCreateUserFireBase(user);
  };

  return (
    <Fragment>
      <h1>SignInRoute</h1>
      <button onClick={() => loginGoogleWithPopup()}>
        google sign in pop up
      </button>
    </Fragment>
  );
};

export default SignInRoute;
