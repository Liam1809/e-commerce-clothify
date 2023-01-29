import { lazy } from 'react';

// export lazy route components
export const NavRoute = lazy(() => import('./NavRoute/NavRoute'));
export const HomeRoute = lazy(() => import('./HomeRoute/HomeRoute'));
export const ShopRoute = lazy(() => import('./ShopRoute/ShopRoute'));
export const AuthRoute = lazy(() => import('./AuthRoute/AuthRoute'));
