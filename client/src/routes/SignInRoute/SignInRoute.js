import React, { Fragment, useEffect, useState } from 'react';
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  getAndCreateUserFireBase,
} from '../../api/firebase/firebase';

import { getRedirectResult } from 'firebase/auth';

const SignInRoute = () => {
  const [click, setClick] = useState(0);
  useEffect(() => {
    async function loginGoogleWithRedirect() {
      const result = await getRedirectResult(auth);

      console.log(result);

      if (result && click === 1) {
        const { user } = await signInWithGoogleRedirect();

        const response = await getAndCreateUserFireBase(user);
      }
    }

    loginGoogleWithRedirect();
  }, [click]);

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
      <button
        onClick={() => {
          signInWithGoogleRedirect();
          setClick(1);
        }}
      >
        google sign in redirect
      </button>
    </Fragment>
  );
};

export default SignInRoute;
