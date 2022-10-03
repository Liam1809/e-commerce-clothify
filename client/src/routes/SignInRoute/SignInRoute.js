import React, { Fragment, lazy, Suspense } from 'react';
import {
  signInWithGooglePopup,
  getAndCreateUserFireBase,
} from '../../api/firebase/firebase';

const SignInRoute = () => {
  const SignUpForm = lazy(() =>
    import('../../components/SignUpForm/SignUpForm')
  );

  const loginGoogleWithPopup = async () => {
    const { user } = await signInWithGooglePopup();

    const response = await getAndCreateUserFireBase(user);

    return response;
  };

  return (
    <Fragment>
      <Suspense fallback={<div>Loading</div>}>
        <h1>SignInRoute</h1>
        <button onClick={() => loginGoogleWithPopup()}>
          google sign in pop up
        </button>
        <SignUpForm />
      </Suspense>
    </Fragment>
  );
};

export default SignInRoute;
