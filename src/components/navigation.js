import React from 'react';
import { Link } from 'react-router-dom';

import styles from 'scss/navigation.module.scss';
import Routes from 'constants/routes';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        {
          Routes.map((route, i) => {
            return (
              <li key={i}><Link to={route.path}>{route.title}</Link></li>
            );
          })
        }
        <li>
          <a 
            href="https://www.instagram.com/explore/tags/koszerskwiattieit/" 
            target="_blank" 
            rel="noopener noreferrer">
            #KoszerSkwiatTieIt
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
