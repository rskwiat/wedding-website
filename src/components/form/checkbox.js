import React from 'react';
import Proptypes from 'prop-types';

const Checkbox = ({ name, onChange, value }) => (
  <fieldset className="inline">
    <input 
      type="checkbox" name="rsvp" 
      onChange={onChange} 
      value={value} 
      checked={value}
    />
    <label htmlFor={name.toUpperCase()}>{name.toUpperCase()}</label>
  </fieldset>
);

Checkbox.propTypes = {
  name: Proptypes.string,
  value: Proptypes.bool,
  onChange: Proptypes.func,
};

export default Checkbox;
