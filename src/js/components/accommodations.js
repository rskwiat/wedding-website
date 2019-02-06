import React from 'react';
import Proptypes from 'prop-types';

import Button from './button';

const Accommodations = (props) => {
  return (
    <div className="container container-small">
      <div className="row no-flex">
        <h2>
          <a 
            href={props.venue.url} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {props.venue.title}
          </a>
        </h2>
        <p>{props.venue.description}</p>
        <address>
          <p>{props.venue.address}, {props.venue.location}</p>
        </address>
        <p>Tel: <a href={`tel:${props.venue.number}`}>{props.venue.number}</a></p>
        <Button link={props.venue.url} name={ `${props.venue.title} Website `} />
      </div>
    </div>
  );
}

Accommodations.propTypes = {
  venue: Proptypes.object,
  title: Proptypes.string,
  description: Proptypes.string,
  address: Proptypes.string,
  location: Proptypes.string,
  url: Proptypes.string,
};

export default Accommodations;
