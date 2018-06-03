import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

import PageHeader from '../components/page-header';

import * as actions from '../actions';

class ThankYou extends Component {
  
  componentDidMount() {
    const { location } = this.props;
    if (!location) {
      this.props.fetchLocation();
    }
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

        <div className="container container-small">
          <div className="row thank-you">
            <h2>Thank You</h2>
            <p>If we have any questions about your RSVP we will reach out via the email provided.</p>
            <Link className="btn" to="/wedding">Wedding Information</Link>
          </div>
        </div>     
      
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    location: state.location
  }
}

ThankYou.propTypes = {
  fetchLocation: Proptypes.func.isRequired,
  location: Proptypes.object,
  pageId: Proptypes.string
};


export default connect(mapStateToProps, actions)(ThankYou);