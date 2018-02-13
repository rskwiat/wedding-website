import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {

  componentDidMount() {
    const { fetchLocation } = this.props;
    fetchLocation();
  }

  render() {
    const { date, venue, city } = this.props.location;
    return (
      <div className="home-page page">
        {date}
        {venue}
        {city}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    location: state.location
  };
}

export default connect(mapStateToProps, actions)(Home);
