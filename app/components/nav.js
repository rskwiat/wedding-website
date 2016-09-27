import React, { Component } from 'react'
import { Route, IndexRoute, Link } from 'react-router'
import Image from './images';
var rsvp = false;

export default class Nav extends Component{

  checkRSVP(){
    if (rsvp){
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
          <div>
            { this.props.children }
          </div>
        </div>
        )
    } else {
      return(
        <div>
          <div className="container container-center">
          <Image alt="The Happy Couple"
            large="./images/wedding-photo@large-fs8.png"
            medium="./images/wedding-photo@medium-fs8.png"
            default="./images/wedding-photo@small-fs8.png"
          />
          <h1>Coming Soon</h1>
          <p><a className="registry" href="http://www.sokindregistry.org/registry/RobAndMel" target="_blank">Registry</a></p>
          </div>
        </div>
      )
    }
  }

  render(){
    return(
      <div>
        { this.checkRSVP() }
      </div>
    )
  }
}
