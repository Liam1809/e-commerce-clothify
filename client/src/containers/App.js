import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// import route component
import { HomeRoute } from '../routes/homeRoute/homeRoute';
// importt route constants
import { HOME_ROUTE } from '../constants/routes/routes.constants';
// import style
import './App.css';

function App() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path={HOME_ROUTE} element={<HomeRoute />} />
      </Routes>
    </Suspense>
  );
}

export default App;
