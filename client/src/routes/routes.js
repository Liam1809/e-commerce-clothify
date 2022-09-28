import { lazy } from 'react';

// export lazy route components
export const NavRoute = lazy(() => import('./NavRoute/NavRoute'));
export const HomeRoute = lazy(() => import('./HomeRoute/HomeRoute'));
export const ShopRoute = lazy(() => import('./ShopRoute/shopRoute'));
export const SignInRoute = lazy(() => import('./SignInRoute/SignInRoute'));
