import React from 'react';
import Proptypes from 'prop-types';

const Radio = ({ name, onChange, value }) => (
  <fieldset className="inline radio">
    <input name={name.toLowerCase()} value={value.toLowerCase()} type="radio" onChange={onChange} />
    <label htmlFor={name.toLowerCase()}>{value}</label>
  </fieldset>
);

Radio.propTypes = {
  name: Proptypes.string,
  onChange: Proptypes.func,
  value: Proptypes.string
};

export default Radio;