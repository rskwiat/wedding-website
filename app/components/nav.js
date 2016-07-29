import React, { Component } from 'react'
import { Route, IndexRoute, Link } from 'react-router'

export default class Nav extends Component{
  render(){
    return(
      <div>
      <nav>
        <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/our-story">Our Story</Link></li>
          <li><Link to="/rsvp">RVSP</Link></li>
          <li><Link to="/photos">Portfolio</Link></li>
        </ul>
      </nav>
        <div>
          { this.props.children }
        </div>
      </div>
    )
  }
}
