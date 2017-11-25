import React from 'react';
import Proptypes from 'prop-types';

const SaveTheDate = ({ date, location }) => (
  <div className="save-the-date">
    <div className="container">
      <div className="row">
        <div className="item">
          <p className="save">Save</p>
          <p className="the-date">The Date</p>
          <h1 className="date">{date}</h1>
          <p className="location">{location}</p>
        </div>
      </div>
    </div>
  </div>
);

SaveTheDate.propTypes = {
  date: Proptypes.string,
  location: Proptypes.string,
};


export default SaveTheDate;
