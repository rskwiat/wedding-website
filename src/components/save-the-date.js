import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

import * as actions from '../actions';

class SaveTheDate extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchLocation } = this.props;
    fetchLocation();
  }

  render() {
    const { date, venue, city } = this.props.location;

    return (
      <div className="save-the-date">
        <div className="overlay">
          <div className='container fadeIn'>
            <p>{date}</p>
            <h2>Save <span>the</span> Date</h2>
            <h3>Melissa &amp; Robert</h3>
            <p>{venue} - {city}</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    location: state.location
  };
}

SaveTheDate.propTypes = {
  date: Proptypes.string,
  venue: Proptypes.string,
  city: Proptypes.string,
  location: Proptypes.object,
  fetchLocation: Proptypes.func.isRequired,
};

export default connect(mapStateToProps, actions)(SaveTheDate);
