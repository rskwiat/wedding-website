import React, { Component } from 'react';
import Header from '../components/header';
import Date from '../components/date';
import About from '../components/about';
import Footer from '../components/footer';

export default class Home extends Component{
  render(){
    return(
      <div>
        <Header tagline="Koszer & Skwiat Tie it!"/>
        <Date date="Fall 2018" />
        <About />
        <p>Bridal Party, etc</p>
        <Footer />
      </div>
    )
  }
}
