import React, {
  Fragment,
  lazy,
  Suspense,
  //  useEffect
} from 'react';
// import { getRedirectResult } from 'firebase/auth';
import {
  signInWithGooglePopup,
  createAuthUserFromDocFireBase,
  // signInWithGoogleRedirect,
  // auth,
} from '../../api/firebase/firebase';

const AuthRoute = () => {
  const SignUpForm = lazy(() =>
    import('../../components/SignUpForm/SignUpForm')
  );

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

  const loginGoogleWithPopup = async () => {
    const { user } = await signInWithGooglePopup();

    const response = await createAuthUserFromDocFireBase(user);

    return response;
  };

  return (
    <Fragment>
      <Suspense fallback={<div>Loading</div>}>
        <h1>SignInRoute</h1>
        <button onClick={() => loginGoogleWithPopup()}>
          google sign in pop up
        </button>
        {/* <button onClick={() => signInWithGoogleRedirect()}>
          google sign in redirect
        </button> */}
        <SignUpForm />
      </Suspense>
    </Fragment>
  );
};

export default AuthRoute;
