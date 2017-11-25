import React from 'react';
import Proptypes from 'prop-types';

const PageHeader = ({ page, date, location}) => (
  <header className={`${page}-page`}>
    <h2>{date}</h2>
    <h3>{location}</h3>
  </header>
);

PageHeader.propTypes = {
  page: Proptypes.string,
  date: Proptypes.string,
  location: Proptypes.string,
};

export default PageHeader;
