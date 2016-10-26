import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import App from './App';

WebFont.load({
  google: {
    families: ['Homemade Apple']
  }
});

ReactDOM.render((
  <App />
), document.getElementById('root'));
