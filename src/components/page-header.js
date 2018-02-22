import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

import * as actions from '../actions';

class PageHeader extends Component {
  componentDidMount() {
    const { location } = this.props;
    if (!location) {
      this.props.fetchLocation();
    }
  }

  render() {
    const { date, venue, city } = this.props.location;

    return (
      <header>
        <div className="container">
          <h2>{date}</h2>
          <h3>{venue} - {city}</h3>
        </div>
      </header>
    );
  }

}

PageHeader.propTypes = {
  fetchLocation: Proptypes.func.isRequired,
  location: Proptypes.object,
  date: Proptypes.string,
  venue: Proptypes.string,
  city: Proptypes.string,
};

function mapStateToProps(state) {
  return {
    location: state.location
  };
}


export default connect(mapStateToProps, actions)(PageHeader);
