import React, { Component } from 'react';
import { Link } from 'react-router';
import Image from './global/images';
import Footer from './global/footer';

const rsvp = true;

class Nav extends Component {

  checkRSVP() {
    if (rsvp) {
      return (
        <div>
          <nav>
            <div className="container">
              <div className="row row-flex row-flex-center">
                <ul className="menu">
                  <li><Link to="/">Our Story</Link></li>
                  <li><Link to="/wedding">Wedding</Link></li>
                  <li><a href="http://www.sokindregistry.org/registry/RobAndMel" target="_blank" rel="noopener noreferrer" >Registry</a></li>
                </ul>
              </div>
            </div>
          </nav>
          { this.props.children }
          <Footer />
        </div>
      );
    }

      return (
        <div className="container">
          <Image
            alt="The Happy Couple"
            large="./images/wedding-photo@large-fs8.png"
            medium="./images/wedding-photo@medium-fs8.png"
            default="./images/wedding-photo@small-fs8.png"
          />
          <h1>Coming Soon</h1>
          <p><a className="registry" href="http://www.sokindregistry.org/registry/RobAndMel" target="_blank" rel="noopener noreferrer">Registry</a></p>
        </div>
      );
  }

  render() {
    return (
      <div>
        { this.checkRSVP() }
      </div>
    );
  }

}

export default Nav;
