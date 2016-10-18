import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';

const PHOTO_SET = [
  {
    src: 'https://placekitten.com/300/300',
    width: 600,
    height: 1024,
    aspectRatio: 1.5,
    lightboxImage: {
      src: 'https://placekitten.com/500/500'
    }
  },
  {
    src: 'https://placekitten.com/1000/500',
    width: 600,
    height: 600,
    aspectRatio: 1,
    lightboxImage: {
    src: 'https://placekitten.com/500/500',
    }
  },
  {
    src: 'https://placekitten.com/250/500',
    width: 100,
    height: 200,
    aspectRatio: 2,
    lightboxImage: {
      src: 'https://placekitten.com/500/500'
    }
  },
  {
    src: 'https://placekitten.com/500/500',
    width: 100,
    height: 200,
    aspectRatio: 2,
    lightboxImage: {
      src: 'https://placekitten.com/500/500'
    }
  },
  {
    src: 'https://placekitten.com/500/500',
    width: 100,
    height: 200,
    aspectRatio: 2,
    lightboxImage: {
      src: 'https://placekitten.com/500/500'
    }
  },
  {
    src: 'https://placekitten.com/500/500',
    width: 100,
    height: 200,
    aspectRatio: 1,
    lightboxImage: {
      src: 'https://placekitten.com/500/500'
    }
  },

];

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
