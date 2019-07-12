import React from 'react';
import Proptypes from 'prop-types';
import styles from 'scss/wedding.module.scss';

const Accommodations = (props) => {
  return (
    <div className={styles['accommodations']}>
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
        <p>Tel: <a className={styles.tel} href={`tel:${props.venue.number}`}>{props.venue.number}</a></p>

        <a 
          className="btn" 
          target="_blank" 
          rel="noopener noreferrer" 
          href={props.venue.url}>{ `${props.venue.title} Website `}
        </a>
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
