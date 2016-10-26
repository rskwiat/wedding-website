import React, { Component } from 'react';
import { Link } from 'react-router';


class NoMatch extends Component {
  render() {
    return (
      <div>
        <h1>Maybe you got lost?</h1>
        <p>Looking for more <Link to="/photos">photos</Link> of us...</p>
      </div>
    );
  }
}

export { NoMatch };
