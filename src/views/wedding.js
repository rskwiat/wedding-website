import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

import PageHeader from '../components/page-header';
import Accommodations from '../components/accommodations';

import * as actions from '../actions';

class Wedding extends Component {

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
        <Accommodations 
          venue="Butter Milk Falls Inn" 
          roomBlock="Accommodations - Holiday Inn Express"
        />        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    location: state.location
  }
}


Wedding.propTypes = {
  fetchLocation: Proptypes.func.isRequired,
  pageId: Proptypes.string
};

export default connect(mapStateToProps, actions)(Wedding);
