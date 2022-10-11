import React, { Fragment, lazy, Suspense } from 'react';

import './styles.scss';

const AuthRoute = () => {
  const SignInForm = lazy(() =>
    import('../../components/SignInForm/SignInForm')
  );
  const SignUpForm = lazy(() =>
    import('../../components/SignUpForm/SignUpForm')
  );

  return (
    <Fragment>
      <Suspense fallback={<div>Loading</div>}>
        <div className="auth-container">
          <SignInForm />
          <SignUpForm />
        </div>
      </Suspense>
    </Fragment>
  );
};

export default AuthRoute;
