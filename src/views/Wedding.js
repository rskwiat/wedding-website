import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import PageHeader from 'components/page-header';
import Accommodations from 'components/accomodations';
import { fetchAccommodations, fetchLocation } from '../actions';
import styles from 'scss/wedding.module.scss';

class Wedding extends Component {
  static propTypes = { 
    fetchAccommodations: Proptypes.func,
    fetchLocation: Proptypes.func
  }

  componentDidMount() {
    this.props.fetchAccommodations();
    this.props.fetchLocation();
  }

  renderAccommodations() {
    const { holidayInn, buttermilkFalls } = this.props.accommodations;
    if (!holidayInn || !buttermilkFalls) {
      return <div />
    }

    return (
      <div>
         <Accommodations venue={holidayInn} />
         <Accommodations venue={buttermilkFalls} />
      </div>
    )
  }

  render() {
    const { date, venue, city } = this.props.location;
    return (
      <div>
        <PageHeader 
          date={date} 
          venue={venue} 
          city={city} 
        />
        <h2 className={styles['location-header']}>Directions &amp; Accommodations</h2>
        {this.renderAccommodations()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
    accommodations: state.accommodations,
  }
}


export default connect(mapStateToProps, { fetchAccommodations, fetchLocation })(Wedding);
