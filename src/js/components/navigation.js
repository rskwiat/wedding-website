import React from 'react';
import NavLink from './navigationLink';

const NAV = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'Wedding',
    url: '/wedding'
  },
  {
    title: 'RSVP',
    url: '/rsvp'
  },
  {
    title: 'Registry',
    url: '/registry'
  }
];

const Navigation = () => (
  <nav>
    <ul className="desktopNav">
       { NAV.map(function(item, index){
          return <NavLink key={index} title={item.title} url={item.url} />
        })}
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

export default Navigation;
