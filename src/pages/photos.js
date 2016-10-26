import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';

const PHOTO_SET = [];

class Photos extends Component {
  render() {
    return (
      <div>
        <h2>Photos</h2>
        <div className="container">
          <Gallery photos={PHOTO_SET} />
        </div>
      </div>
    );
  }
}


export { Photos };
