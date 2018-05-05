import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

import soKind from '../images/sokind_logo.png';
import Amazon from '../images/amazon-256.png';

import PageHeader from '../components/page-header';
import RegistryCard from '../components/registry-card';
import * as actions from '../actions';


class Registry extends Component {

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

        <div className="container">
          <div className="flex-row">
            <RegistryCard 
              img={soKind} 
              title="So Kind"
              link="https://sokindregistry.org/registry/RobAndMel"
            />
            <RegistryCard 
              img={Amazon} 
              title="Amazon"
              link="https://www.amazon.com/wedding/robert-skwiat-melissa-koszer-milton-october-2018/registry/2QWEYMJX3BJ59"
            />
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


Registry.propTypes = {
  fetchLocation: Proptypes.func.isRequired,
  location: Proptypes.object,
  date: Proptypes.string,
  venue: Proptypes.string,
  city: Proptypes.string,
  pageId: Proptypes.string
};

export default connect(mapStateToProps, actions)(Registry);
