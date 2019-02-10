import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

import PageHeader from '../components/page-header';
import Accommodations from '../components/accommodations';
import ButtermilkMap from '../components/map';
import settings from '../config/settings';

import { fetchLocation, fetchAccommodations } from '../actions';

class Wedding extends Component {

  componentDidMount() {
    this.props.fetchAccommodations();
    const { location } = this.props;
    if (Object.keys(location).length === 0) {
      this.props.fetchLocation();
    }
  }

  renderMap() {
  
    const URL = `https://maps.googleapis.com/maps/api/js?key=${settings.mapKey}&v=3.exp&libraries=geometry,drawing,places`

    return (
      <ButtermilkMap
        directions="https://www.google.com/maps/dir//Buttermilk+Falls+Inn+%26+Spa,+220+N+Rd,+Milton,+NY+12547/@40.8609943,-73.9301509,15z/data=!4m18!1m8!3m7!1s0x89dd3c13fa9cdf3b:0x56494373ce697a1!2sButtermilk+Falls+Inn+%26+Spa!5m1!1s2018-04-22!8m2!3d41.6669666!4d-73.9549376!4m8!1m0!1m5!1m1!1s0x89dd3c13fa9cdf3b:0x56494373ce697a1!2m2!1d-73.9549376!2d41.6669666!3e3"
        lat="41.6669706"
        long="-73.9571263"
        isMarkerShown
        googleMapURL={URL}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `40rem`, margin: '0 auto 4rem', maxWidth: '90%' }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }

  renderAccommodations() {
    const { holidayInn, buttermilkFalls } = this.props.accommodations;
    if (!holidayInn || !buttermilkFalls) {
      return <div />
    }

    return (
      <div>
        <Accommodations venue={buttermilkFalls} />
        <Accommodations venue={holidayInn} />
      </div>
    );
  }

  render() {
    const { date, venue, city } = this.props.location;
    return (
      <div className="wedding-page page">
        <PageHeader 
          date={date} 
          venue={venue} 
          city={city} 
        />
        <h2 style={{ margin: '4rem 0' }}>Directions &amp; Accommodations</h2>
        {this.renderMap()}
        {this.renderAccommodations()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    location: state.location,
    accommodations: state.accommodations,
  }
}

Wedding.propTypes = {
  fetchAccommodations: Proptypes.func.isRequired,
  fetchLocation: Proptypes.func.isRequired,
  pageId: Proptypes.string,
  location: Proptypes.object,
  accommodations: Proptypes.object,
};

export default connect(mapStateToProps, 
  { fetchLocation, fetchAccommodations }
)(Wedding);
