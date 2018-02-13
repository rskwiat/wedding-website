import React, { Component } from 'react';
import Proptypes from 'prop-types';
import NavLink from './navigationLink';


class Navigation extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <nav>
        <ul className="desktopNav">
          <NavLink title="Home" url="/" />
          <NavLink title="Wedding" url="/wedding" />
          <NavLink mobile="hidden" title="Photos" url="/photos" />
          <NavLink mobile="hidden" title="RSVP" url="/rsvp" />
          <li>
            <a 
              href="https://sokindregistry.org/registry/RobAndMel" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Registry
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

Navigation.propTypes = {
  state: Proptypes.bool,
};

export default Navigation;
