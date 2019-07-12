import React from 'react';
import Proptypes from 'prop-types';
import styles from 'scss/header.module.scss';

const PageHeader = ({ date, venue, city }) => (
  <header className={styles['page-header']}>
    <h2>{date}</h2>
    <h3>{venue} - {city}</h3>
  </header>
);

PageHeader.propTypes = {
  date: Proptypes.string,
  venue: Proptypes.string,
  city: Proptypes.string,
};

export default PageHeader;