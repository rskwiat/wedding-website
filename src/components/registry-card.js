import React from 'react';
import Proptypes from 'prop-types';
import Button from './button';

const RegistryCard = ({ img, title, link }) => (
  <div className="registry-card">

    <div className="logo">
      <img className="img-responsive" src={img} alt={title} />
    </div>

    <Button link={link} name={title} />
  </div>
);

RegistryCard.propTypes = {
  img: Proptypes.string,
  title: Proptypes.string,
  link: Proptypes.string
};


export default RegistryCard;

