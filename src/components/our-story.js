import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import * as actions from '../actions';

class OurStory extends Component {
  componentDidMount() {
    const { fetchStory } = this.props;
    fetchStory();
  }

  render() {
    const { intro } = this.props.story;
    return (
      <div className="container container-small our-story">
        <div className="row">
          <h2>{this.props.title}</h2>
          <p>{intro}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    story: state.story
  }
}

OurStory.propTypes = {
  title: Proptypes.string,
  story: Proptypes.object,
  intro: Proptypes.string,
  fetchStory: Proptypes.func.isRequired,
};


export default connect(mapStateToProps, actions)(OurStory);
