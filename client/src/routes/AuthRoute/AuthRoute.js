import React, { Fragment, lazy, Suspense } from 'react';

const AuthRoute = () => {
  const SignUpForm = lazy(() =>
    import('../../components/SignUpForm/SignUpForm')
  );

  return (
    <Fragment>
      <Suspense fallback={<div>Loading</div>}>
        <SignUpForm />
      </Suspense>
    </Fragment>
  );
};

export default AuthRoute;
