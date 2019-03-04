import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { submitForm } from '../actions';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'name': '',
      'email': '',
      'dinner': '',
      'rsvp': false,
      'nameError': '',
      'emailError': ''
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    const valid = this.validate();

    if (valid) {
      this.props.submitForm(this.state);
      
    }
  }

  updateCheckbox = (e) => {
    this.setState({ rsvp: !this.state.rsvp });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  validate = () => {
    let nameError;

    if (this.state.name.length < 3) {
      this.setState({ nameError: 'Name has to be greater than 3 characters' });
      return false;
    }

    if (this.state.email.includes('@')) {
      this.setState({ emailError: 'Please enter a valid email address' });
      return false;
    }

    return true;
  }

  renderInputs = () => {
    const Inputs = [
      { type: 'text', name: 'name', label: 'Name', value: this.state.name },
      { type: 'email', name: 'email', label: 'Email', value: this.state.email },
    ];

    return Inputs.map((input, i) => {
      return (
        <RenderInput
          key={i}
          type={input.type}
          name={input.name}
          label={input.label}
          value={input.value} 
          onChange={this.handleChange}
        />
      );
    });
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
        {this.renderInputs()}
        {this.renderDinnerOptions()}
        <RenderCheckbox 
          type="checkbox" 
          name="rsvp" 
          checked={this.state.rsvp} 
          label="RSVP"
          onChange={this.updateCheckbox}
        />
        <button className="btn" type="submit">Submit</button>      
      </form>
    </div>
    );
  }
}

const RenderInput = ({ onChange, type, value, name, label }) => {
  return (
    <fieldset>
      <label>{label}</label>
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
