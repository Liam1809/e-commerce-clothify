import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts';
import { signOutUserFirebase } from '../../api';
import { HOME_ROUTE, SHOP_ROUTE, AUTH_ROUTE } from '../../constants';
import { LadiesLogo, GentsLogo } from '../../assets';
import './styles.scss';

export const NavRoute = () => {
  const { currentUser } = useContext(UserContext);
  const [isLogo, setIsLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLogo(!isLogo);
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to={`${HOME_ROUTE}`}>
          {isLogo ? (
            <LadiesLogo className="logo" />
          ) : (
            <GentsLogo className="logo" />
          )}
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={`${HOME_ROUTE}`}>
            Home
          </Link>
          <Link className="nav-link" to={`/${SHOP_ROUTE}`}>
            Shop
          </Link>
          <Link className="nav-link" to={`/${SHOP_ROUTE}`}>
            Contact
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUserFirebase}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to={`/${AUTH_ROUTE}`}>
              Sign in
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
