import React from 'react';
import NavLink from './navigationLink';

/*
  <NavLink title="Photos" url="/photos" />
*/

const Navigation = () => (
  <nav>
    <ul className="desktopNav">
      <NavLink title="Home" url="/" />
      <NavLink title="Wedding" url="/wedding" />
      <NavLink title="RSVP" url="/rsvp" />
      <NavLink title="Registry" url="/registry" />
    </ul>
  </nav>
);

export default Navigation;
