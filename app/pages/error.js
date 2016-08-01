
import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router'


export default class NoMatch extends Component{
  render(){
    return(
      <div className="container container-flex container-flex-center">
        <h1>Maybe you got lost?</h1>
        <p>Looking for more <Link to="/photos">photos</Link> of us...</p>
      </div>
    )
  }
}
