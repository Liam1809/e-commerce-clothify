import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// import route component
import { HomeRoute, NavRoute, ShopRoute, AuthRoute } from '../routes';
// importt route constants
import { SHOP_ROUTE, AUTH_ROUTE } from '../constants';
// import style
import './App.css';

export const App = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path="/" element={<NavRoute />}>
          <Route index element={<HomeRoute />} />
          <Route path={`${SHOP_ROUTE}`} element={<ShopRoute />} />
          <Route path={`${AUTH_ROUTE}`} element={<AuthRoute />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
