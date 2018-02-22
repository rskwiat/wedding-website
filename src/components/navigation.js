import React from 'react';
import NavLink from './navigationLink';

const Navigation = () => (
  <nav>
    <ul className="desktopNav">
      <NavLink title="Home" url="/" />
      <NavLink title="Wedding" url="/wedding" />
      <NavLink title="Photos" url="/photos" />
      <NavLink title="RSVP" url="/rsvp" />
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

export default Navigation;
