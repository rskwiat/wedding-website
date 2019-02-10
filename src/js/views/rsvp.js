import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

import PageHeader from '../components/page-header';
import ContactForm from '../components/contactForm';

import { fetchLocation, submitForm } from '../actions';

class Rsvp extends Component {

  componentDidMount() {
    const { location } = this.props;
    if (Object.keys(location).length === 0) {
      this.props.fetchLocation();
    }    
  }

  submit = (values) => {
    this.props.submitForm(values);
    // this.props.history.push('/rsvp/thank-you');
  }

  render() {
    const { date, venue, city } = this.props.location;

    return (
      <div className='page'>
        <PageHeader 
          date={date} 
          venue={venue} 
          city={city} 
        />
        <ContactForm title="RSVP" onSubmit={this.submit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
  };
}

Rsvp.propTypes = {
  history: Proptypes.object,
  location: Proptypes.object,
  fetchLocation: Proptypes.func.isRequired,
  pageId: Proptypes.string
};

export default connect(mapStateToProps, 
  { fetchLocation }
)(Rsvp);
