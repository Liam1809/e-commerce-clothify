import React, { Fragment, lazy } from 'react';

// lazy import component
const ErrorBoundary = lazy(() =>
  import('../../components/ErrorBoundary/ErrorBoundary')
);
const Categories = lazy(() => import('../../components/Categories/Categories'));

const HomeRoute = () => {
  return (
    <Fragment>
      <ErrorBoundary>
        <Categories />
      </ErrorBoundary>
    </Fragment>
  );
};

export default HomeRoute;
