import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Inputs from './form/inputs';
import Checkbox from './form/checkbox';
import Radio from './form/radio';

import * as actions from '../actions';

class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      rsvp: true,
      dinner: '' ,
      errors: {
        msg: ''
      }
    };
    
    this.resetForm = this.resetForm.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.updateCheckbox = this.updateCheckbox.bind(this);
    this.updateRadio = this.updateRadio.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.validator = this.validator.bind(this);
  }

  updateRadio(e) {
    this.setState({ dinner: e.target.value });
  }

  updateCheckbox(e) {
    this.setState({ [e.target.name]: e.target.checked })
  }

  updateInput(e) {
    if (e.target.name === 'email') {
      this.validator(e.target.value);
    }
    this.setState({ [e.target.name]: e.target.value });
  }


  validator(validate) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = emailRegex.test(validate.toLowerCase());
    if (!result) {
      this.setState({ errors: { 'msg': 'Please enter a valid email address' }});
    } else {
      this.setState({ errors: { 'msg': '' }});
    }
  }

  resetForm() {
    this.setState({ 
      name: '',
      email: '',
      rsvp: false,
      dinner: '' 
    });
  }

  submitForm(e) {
    e.preventDefault();

    const { errors } = this.state;

    if (errors.msg.length > 0) {
      console.error('Please fix the errors');
    } else {
      this.props.submitForm(this.state);
      this.resetForm();
      this.props.history.push('/rsvp/thank-you');
    }
  }
  
  render() {
    return (
      <div className="container container-small">
      <form onSubmit={this.submitForm}>
        <h2>{this.props.title}</h2>

        <Inputs 
          name="Name"
          placeholder="Please enter your first and last name"
          type="text"
          onChange={this.updateInput}
        />

        <Inputs
          name="Email"
          placeholder="Please enter your email address"
          type="email"
          onChange={this.updateInput}
          errors={this.state.errors}
        />

        <Checkbox name="rsvp" onChange={this.updateCheckbox} value={this.state.rsvp} />

        <h3>Dinner Choice</h3>

        <Radio name="dinner" onChange={this.updateRadio} value="Steak" />
        <Radio name="dinner" onChange={this.updateRadio} value="Chicken" />
        <Radio name="dinner" onChange={this.updateRadio} value="Vegetarian" />

        <button className="btn" type="RSVP">
          Submit
        </button>
      </form>
      </div>
    );
  }

}

export default withRouter(connect(null, actions)(Form));
