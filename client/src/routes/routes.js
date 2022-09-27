import { lazy } from 'react';

// export lazy route components
export const NavRoute = lazy(() => import('../routes/navRoute/navRoute'));
export const HomeRoute = lazy(() => import('../routes/homeRoute/homeRoute'));
export const ShopRoute = lazy(() => import('../routes/shopRoute/shopRoute'));
