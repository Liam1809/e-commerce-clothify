import React, { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { HOME_ROUTE, SHOP_ROUTE } from '../../constants/routes/routes';

//import logo
import { ReactComponent as LadiesLogo } from '../../assets/ladies.svg';
import { ReactComponent as GentsLogo } from '../../assets/gents.svg';

import './styles.scss';

const navRoute = () => {
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
          <Link className="nav-link" to={`/${SHOP_ROUTE}`}>
            Sign in
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default navRoute;
