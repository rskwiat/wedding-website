import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavLink = ({ mobile, title, url }) => (
  <li className={mobile}>
    <Link to={url}>{title}</Link>
  </li>
);

NavLink.propTypes = {
  mobile: Proptypes.string,
  title: Proptypes.string,
  url: Proptypes.string,
};

export default NavLink;
