import React from 'react';

import styles from 'scss/navigation.module.scss';
import Routes from 'constants/routes';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        {
          Routes.map((route, i) => {
            return (
              <li key={i}><a href={route.path}>{route.title}</a></li>
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
