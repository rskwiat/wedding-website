import React from 'react';
import Proptypes from 'prop-types';

const Inputs = ({ name, placeholder, type, onChange, errors }) => (
  <fieldset>
    <label>{name}</label>
      <input
        name={name.toLowerCase()}
        className="input" 
        type={type} 
        placeholder={placeholder} 
        onChange={onChange} 
      />
    {errors && <p className="error-label">{errors.msg}</p> }
  </fieldset>
);

Inputs.propTypes = {
  name: Proptypes.string,
  placeholder: Proptypes.string,
  type: Proptypes.string,
  onChange: Proptypes.func,
  errors: Proptypes.object
};

export default Inputs;
