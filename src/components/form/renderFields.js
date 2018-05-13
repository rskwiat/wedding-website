import React from 'react';
import Proptypes from 'prop-types';

const renderFields = ({ type, input, checked, label, meta: { error, touched } }) => {
  if (type === 'radio') {
    return (
      <fieldset className={type}>
        <label>{label}</label>
        <input type={type} {...input} />
      </fieldset>
    );
  }

  if (type === 'checkbox') {
    return (
      <fieldset className={`inline ${type}`}>
        <label>{label}</label>
        <input type={type} {...input} checked={checked} />       
      </fieldset>
    )
  }

  return (
    <fieldset>
      <label>{label}</label>
      <input className="input" type={type} {...input} />
      <div className="error error-text">
        {touched && error}
      </div>
    </fieldset>
  );
}

renderFields.propTypes = {
  type: Proptypes.string,
  checked: Proptypes.bool,
  label: Proptypes.string,
  meta: Proptypes.object,
  input: Proptypes.string,
};

export default renderFields;


