import React, { Fragment, Suspense } from 'react';
import { SignInForm, SignUpForm } from '../../components';
import './styles.scss';

export const AuthRoute = () => {
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
