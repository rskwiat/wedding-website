import React from 'react';
import Proptypes from 'prop-types';

const Footer = ({ copyright, builtBy, email }) => (
  <footer>
    <div className="container">
      <div className="row">
        <h2>Thank You!</h2>
        <h3>Melissa &amp; Robert</h3>
        <p>Copyright {copyright} | Designed By: <a href={`mailto:${email}`}>{builtBy}</a></p>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  copyright: Proptypes.string,
  builtBy: Proptypes.string,
  email: Proptypes.string,
};

export default Footer;
