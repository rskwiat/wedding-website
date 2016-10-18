import React, { Component } from 'react';
import Image from './global/images';

class Header extends Component {
  render() {
    return (
      <header>
        <Image
          alt="The Happy Couple"
          large="./images/wedding-photo@large-fs8.png"
          medium="./images/wedding-photo@medium-fs8.png"
          default="./images/wedding-photo@small-fs8.png"
        />
        <h1>{this.props.tagline}</h1>
      </header>
    );
  }
}

export default Header;
