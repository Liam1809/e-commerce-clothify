import React, { Fragment } from 'react';
import './styles.scss';

export const FormInput = ({ label, id, ...otherProps }) => {
  return (
    <Fragment>
      <div className="group">
        <input
          autoComplete={id}
          className="form-input"
          id={id}
          required
          {...otherProps}
        />
        {label && (
          <label
            htmlFor={id}
            className={`${
              otherProps.value.length ? 'shrink' : ''
            } form-input-label`}
          >
            {label}
          </label>
        )}
      </div>
    </Fragment>
  );
};
