import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

import PageHeader from 'components/page-header';
import RegistryCard from 'components/registry-card';
import soKind from 'images/sokind_logo.png';
import Amazon from 'images/amazon-256.png';
import { fetchLocation } from 'actions';

import styles from 'scss/registry.module.scss';

class Registry extends Component {
  static propTypes = {
    fetchLocation: Proptypes.func,
    location: Proptypes.object,
    date: Proptypes.string,
    venue: Proptypes.string,
    city: Proptypes.string,
    pageId: Proptypes.string
  };

  componentDidMount() {
    this.props.fetchLocation();
  }

  render() {
    const { date, venue, city } = this.props.location;

    if (!date) {
      return <div>Loading</div>
    }

    return (
      <div>
        <PageHeader 
          date={date} 
          venue={venue} 
          city={city} 
        />
        <div className={styles.registry}>
          <h2>Gifts and Registry</h2>
          <div className={styles.row}>
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

const mapStateToProps = (state) => {
  return {
    location: state.location
  };
}


export default connect(mapStateToProps, 
  { fetchLocation })(Registry);
