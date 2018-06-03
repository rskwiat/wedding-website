import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {

  componentDidMount() {
    this.props.fetchStory();
    this.props.fetchLocation();
  }

  renderOurStory() {
    const { title, intro } = this.props.story;
    return (
      <div className="container container-small our-story">
        <div className="row">
          <h2>{title}</h2>
          <p>{intro}</p>
        </div>
      </div>
    );
  }

  renderSaveTheDate() {
    const { date, venue, city, title, who } = this.props.location;
    return (
      <div className="save-the-date">
        <div className="overlay">
          <div className="container fadeIn">
            <p>{date}</p>
            <h2>{title}</h2>
            <h3>{who}</h3>
            <p>{venue} - {city}</p>
          </div>
        </div>
      </div>
    );
  }


  render() {
    return (
      <div className='page'>
        {this.renderSaveTheDate()}
        {this.renderOurStory()}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    story: state.story,
    location: state.location,    
  }
}

Home.propTypes = {
  title: Proptypes.string,
  story: Proptypes.object,
  intro: Proptypes.string,
  date: Proptypes.string,
  venue: Proptypes.string,
  city: Proptypes.string,
  location: Proptypes.object,
  fetchLocation: Proptypes.func.isRequired,
  fetchStory: Proptypes.func.isRequired,
  pageId: Proptypes.string
};

export default connect(mapStateToProps, actions)(Home);
