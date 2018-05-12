import React from 'react';
import Proptypes from 'prop-types';

const renderFields = ({ type, input, checked, label, meta: { error, touched } }) => {
  if (type === 'radio') {
    return (
      <div>
        <label>{label}</label>
        <input type={type} {...input} />
      </div>
    );
  }

  if (type === 'checkbox') {
    return (
      <div>
        <label>{label}</label>
        <input type={type} {...input} checked={checked} />       
      </div>
    )
  }

  return (
    <div>
      <label>{label}</label>
      <input type={type} {...input} style={{ marginBottom: '5px' }} />
      <div className="error red-text">
        {touched && error}
      </div>
    </div>
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


