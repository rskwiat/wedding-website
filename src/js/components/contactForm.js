import React, { Component } from 'react';
import Proptypes from 'prop-types';
// import { Field, reduxForm } from 'redux-form';
// import renderField from './form/renderFields';
import { connect } from 'react-redux';
import { submitForm } from '../actions';

const fieldType = [
  { type: 'email', name: 'email', label: 'Email' },
  { type: '', name: 'rsvp', label: 'RSVP' }
];

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'name': '',
      'email': '',
      'dinner': '',
      'rsvp': false,
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    //@todo add in error handling 
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }


  renderDinnerOptions = () => {
    const dinnerOptions = [
      { type: 'radio', name: 'dinner', label: 'Chicken' },
      { type: 'radio', name: 'dinner', label: 'Steak' },
      { type: 'radio', name: 'dinner', label: 'Vegetarian' }
    ];

    return dinnerOptions.map((option, i) => {
      return (
        <RenderRadio
          key={i}
          type={option.type}
          name={option.name}
          label={option.label}
          onChange={this.handleChange}
        />
      );
    });
  }

  render() {
    return (
    <div className="container container-small">
      <form onSubmit={this.onSubmit}>
        <h2>{this.props.title}</h2>
        <RenderInput 
          type="text"
          name="name"
          value={this.state.name} 
          onChange={this.handleChange}
        />
        <RenderInput 
          type="email"
          name="email"
          value={this.state.email} 
          onChange={this.handleChange}
        />
        {this.renderDinnerOptions()}
        <RenderCheckbox 
          type="checkbox" 
          name="RSVP" 
          checked={this.state.rsvp} 
          label="rsvp"
          onChange={this.handleChange}
        />
        <button className="btn" type="submit">Submit</button>      
      </form>
    </div>
    );
  }
}

const RenderInput = ({ onChange, type, value, name }) => {
  return (
    <fieldset>
      <label>{name}</label>
      <input
        className="input" 
        type={type} 
        onChange={onChange} 
        value={value} 
        name={name}
      />
    </fieldset>
  );
}

const RenderRadio = ({ type, name, label, onChange }) => {
  return (
    <fieldset className={type}>
      <label>{label}</label>
      <input type={type} name={name} value={label} onChange={onChange} />
    </fieldset>
  );  
}

const RenderCheckbox = ({ type, label, name, checked, onChange }) => {
  return (
    <fieldset className={`inline ${type}`}>
      <label>{label}</label>
      <input type={type} name={label} checked={checked} onChange={onChange}/>       
    </fieldset>  
  );
}

export default connect(null, 
  { submitForm }
)(ContactForm);

ContactForm.propTypes = {
  title: Proptypes.string,
  handleSubmit: Proptypes.func,
};

