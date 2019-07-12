import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string, object, func } from 'prop-types';

import { fetchLocation, fetchStory } from 'actions';
import styles from 'scss/home.module.scss';

class Home extends Component {
  static propTypes = {
    wedding: string,
    title: string,
    intro: string,
    date: string,
    venue: string,
    city: string,
    location: object,
    story: object,
    fetchLocation: func.isRequired,
    fetchStory: func.isRequired,
  }

  componentDidMount() {
    this.props.fetchLocation();
    this.props.fetchStory();
  }

  renderSaveTheDate() {
    const { date, venue, city, title, who } = this.props.location;
    return (
      <div className={styles['save-the-date']}>
        <div className={styles['overlay']}>
          <div className={styles['fadeIn']}>
            <p>{date}</p>
            <h2>{title}</h2>
            <h3>{who}</h3>
            <p>{venue} - {city}</p>
          </div>
        </div>
      </div>
    );
  }

  renderOurStory() {
    const { intro, title, wedding, } = this.props.story;
    return (
      <div className={styles['our-story']}>
        <h2>{title}</h2>
        <p>{intro}</p>
        <p>{wedding}</p>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderSaveTheDate()}
        {this.renderOurStory()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
    story: state.story,
  }
}


export default connect(mapStateToProps, 
  { fetchLocation, fetchStory }
)(Home);
