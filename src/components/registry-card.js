import React from 'react';
import Proptypes from 'prop-types';
import styles from 'scss/registry.module.scss';

const RegistryCard = ({ img, title, link }) => {
  return (
    <div className={styles['registry-card']}>
      <div className={styles['logo']}>
        <img className="img-responsive" src={img} alt={title} />
      </div>
      <a className="btn" target="_blank" rel="noopener noreferrer" href={link}>{title}</a>
    </div>
  );
}

RegistryCard.propTypes = {
  img: Proptypes.string,
  title: Proptypes.string,
  link: Proptypes.string
};

export default RegistryCard;