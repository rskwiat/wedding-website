import React from 'react';
import Proptypes from 'prop-types';

const SaveTheDate = ({ date, location, city }) => (
  <div className="save-the-date">
    <div className="overlay">
      <div className="container">
        <p>{date}</p>
        <h2>Save <span>the</span> Date</h2>
        <h3>Melissa &amp; Robert</h3>
        <p>{location} - {city}</p>
      </div>
    </div>
  </div>
);

SaveTheDate.propTypes = {
  date: Proptypes.string,
  location: Proptypes.string,
  city: Proptypes.string,
};

export default SaveTheDate;
