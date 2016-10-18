import React, { Component } from 'react';
import Header from '../components/header';
import Date from '../components/date';
import About from '../components/about';

class Home extends Component {
  render() {
    return (
      <div>
        <Header tagline="Koszer & Skwiat Tie it!" />
        <Date date="October 27th 2018" />
      </div>
    );
  }
}

export { Home };
