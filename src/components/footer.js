import React from 'react';
import styles from '../styles';

const Footer = ({ copyright }) => {
  return (
    <footer>
      <div className={styles.base}>
        <div className={styles.gridStyle}>
          <div className="item">
            <p>{copyright}</p>
          </div>
                    <div className="item">
            <p>{copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;