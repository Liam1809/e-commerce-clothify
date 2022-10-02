import React, { Fragment } from 'react';
import {
  signInWithGooglePopup,
  getAndCreateUserFireBase,
} from '../../api/firebase/firebase';

const SignInRoute = () => {
  const loginGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const ok = await getAndCreateUserFireBase(user);

    console.log(ok);
  };
  return (
    <Fragment>
      <h1>SignInRoute</h1>
      <button onClick={() => loginGoogle()}>google sign in</button>
    </Fragment>
  );
};

export default SignInRoute;
