import React, { Fragment } from 'react';
import { BUTTON_TYPES } from '../../constants/buttons/buttons';

import './styles.scss';

const Button = ({ buttonType, children, ...otherProps }) => {
  return (
    <Fragment>
      <button
        className={`${BUTTON_TYPES[buttonType]} button-container`}
        {...otherProps}
      >
        {children}
      </button>
    </Fragment>
  );
};

export default Button;
