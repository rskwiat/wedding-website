import React from 'react';

const Footer = ({ copyright, builtBy, email }) => (
  <footer>
    <div className="container">
      <div className="row">
        <p>{copyright}</p>
        <p>Built By: <a href={`mailto:${email}`}>{builtBy}</a></p>
      </div>
    </div>
  </footer>
);

export default Footer;