import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      'name': '',
      'attending': false,
      'dinner': [
        'steak': false,
        'chicken': false,
        'veg': false,
      ]
    };

    this.updateCheckbox = this.updateCheckbox.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  updateCheckbox(e) {
    this.setState({ 'checked': !this.state.checked })
  }

  submitForm(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
  }
  
  render() {
    return (
      <form onSubmit={this.submitForm}>
        <h2>{this.props.title}</h2>
        <label>Steak</label>
        <input type="checkbox" onChange={this.updateCheckbox} checked={this.state.checked} />


        <button type="submit">
          submit
        </button>
      </form>
    );
  }

}

export default connect(null, actions)(Form);
