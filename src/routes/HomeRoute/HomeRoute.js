import React, { Fragment } from 'react';
import { ErrorBoundary, Categories } from '../../components';

export const HomeRoute = () => {
  return (
    <Fragment>
      <ErrorBoundary>
        <Categories />
      </ErrorBoundary>
    </Fragment>
  );
};
