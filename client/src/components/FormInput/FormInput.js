import React, { Fragment } from 'react';

const FormInput = ({ label, id, options }) => {
  return (
    <Fragment>
      <label htmlFor={id}>{label}</label>
      <input id={id} required {...options} />
    </Fragment>
  );
};

export default FormInput;
