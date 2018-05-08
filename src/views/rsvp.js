import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

import PageHeader from '../components/page-header';
import Form from '../components/form';

import * as actions from '../actions';

class Rsvp extends Component {

  componentDidMount() {
    const { location } = this.props;
    if (!location) {
      this.props.fetchLocation();
    }
  }

  render() {
    const { date, venue, city } = this.props.location;

    return (
      <div className={`${this.props.pageId}-page page`}>
        <PageHeader 
          date={date} 
          venue={venue} 
          city={city} 
        />
        <Form title="RSVP" />
      </div>
    );

  }
}

function mapStateToProps(state) {
  return {
    location: state.location
  };
}

export default connect(mapStateToProps, actions)(Rsvp);
