import React, { Component } from 'react';
import Header from '../components/header';
import Date from '../components/date';
import About from '../components/about';

export default class Home extends Component{
  render(){
    return(
      <div>
        <Header tagline="Melissa and Rob"/>
        <Date date="Fall 2018" />
        <About />
      </div>
    )
  }
}
