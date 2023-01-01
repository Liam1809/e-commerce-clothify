import React, { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  HOME_ROUTE,
  SHOP_ROUTE,
  AUTH_ROUTE,
} from '../../constants/routes/routes';

//import logo
import { ReactComponent as LadiesLogo } from '../../assets/ladies.svg';
import { ReactComponent as GentsLogo } from '../../assets/gents.svg';

import './styles.scss';
import { UserContext } from '../../contexts/user.context';
import { signOutUserFirebase } from '../../api/firebase/firebase';

const NavRoute = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleSignOut = async () => {
    await signOutUserFirebase();
    setCurrentUser(null);
  };
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to={`${HOME_ROUTE}`}>
          {/* <LadiesLogo className="logo" /> */}
          <GentsLogo className="logo" />
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
            <span className="nav-link" onClick={handleSignOut}>
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

export default NavRoute;
