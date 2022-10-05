import React, { Fragment } from 'react';

const Button = ({ id, label, options }) => {
  return (
    <Fragment>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...options} />
    </Fragment>
  );
};

export default Button;
