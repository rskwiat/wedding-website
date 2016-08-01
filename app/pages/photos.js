import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';

const PHOTO_SET = [
  {
    src: 'https://placekitten.com/500/500',
    width: 600,
    height: 1024,
    aspectRatio: 1.5,
    lightboxImage:{
      src: 'https://placekitten.com/500/500'
    }
  },
  {
    src: 'https://placekitten.com/500/500',
    width: 600,
    height: 600,
    aspectRatio: 1,
    lightboxImage:{
    src: 'https://placekitten.com/500/500',
    }
  },
  {
    src: 'https://placekitten.com/500/500',
    width: 100,
    height: 200,
    aspectRatio: 2,
    lightboxImage:{
      src: 'https://placekitten.com/500/500'
    }
  },
  {
    src: 'https://placekitten.com/500/500',
    width: 100,
    height: 200,
    aspectRatio: 2,
    lightboxImage:{
      src: 'https://placekitten.com/500/500'
    }
  },
  {
    src: 'https://placekitten.com/500/500',
    width: 100,
    height: 200,
    aspectRatio: 2,
    lightboxImage:{
      src: 'https://placekitten.com/500/500'
    }
  },
  {
    src: 'https://placekitten.com/500/500',
    width: 100,
    height: 200,
    aspectRatio: 1,
    lightboxImage:{
      src: 'https://placekitten.com/500/500'
    }
  },

];

export default class Photos extends Component{
  render(){
    return(
      <div>
        <div className="container container-flex container-photos">
          <h2>Photos</h2>
        </div>
        <Gallery photos={PHOTO_SET} />
      </div>
    )
  }
}
