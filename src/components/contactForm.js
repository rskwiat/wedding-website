import React from 'react';
import Proptypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import renderField from './form/renderFields';


const fieldType = [
  { type: 'text', name: 'name', label: 'Name' },
  { type: 'email', name: 'email', label: 'Email' },
  { type: 'radio', name: 'dinner', label: 'Chicken' },
  { type: 'radio', name: 'dinner', label: 'Steak' },
  { type: 'radio', name: 'dinner', label: 'Vegetarian' },
  { type: 'checkbox', name: 'rsvp', label: 'RSVP' }
];

const ContactForm = ({ title, handleSubmit }) => {
  return (
    <div className="container container-small">
      <form onSubmit={handleSubmit}>
        <h2>{title}</h2>
        { fieldType.map(function(item, index){
            return (
              <Field 
                key={index} 
                type={item.type} 
                name={item.name} 
                label={item.label} 
                value={item.label.toLowerCase()} 
                component={renderField} 
              />
            );
        })}
        <button className="btn" type="submit">Submit</button>      
      </form>
    </div>
  );
}

function validate(values) {
  const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const errors = {};

  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length < 3) {
    errors.name = 'Must be a full first and last name'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!re.test(values.email)) {
    errors.email = 'Invalid Email Address'
  }

  return errors;
}

ContactForm.propTypes = {
  title: Proptypes.string,
  handleSubmit: Proptypes.func,
};

export default reduxForm({
  validate,
  form: 'rsvp'
})(ContactForm);
