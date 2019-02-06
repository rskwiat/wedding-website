import React from 'react';
import Proptypes from 'prop-types';

const Button = ({ link, name }) => (
  <a 
    className="btn"
    href={link}
    target="_blank" 
    rel="noopener noreferrer"
  >
    {name}
  </a>
);


Button.propTypes = {
  link: Proptypes.string,
  name: Proptypes.string,
};


export default Button;