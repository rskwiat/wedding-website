import React, { Component } from 'react'
import { Route, IndexRoute, Link } from 'react-router'

export default class Nav extends Component{
  render(){
    return(
      <div>
        <nav>
          <div className="container container-flex">
            <ul className="menu">
              <li><Link to="/">Our Story</Link></li>
              <li><Link to="/wedding">Wedding</Link></li>
              <li><Link to="/rsvp">RSVP</Link></li>
              <li><Link to="/photos">Photos</Link></li>
              <li><a href="http://www.sokindregistry.org/registry/RobAndMel" target="_blank">Registry</a></li>
            </ul>
          </div>
        </nav>
        <div id="">
          { this.props.children }
        </div>
      </div>
    )
  }
}
