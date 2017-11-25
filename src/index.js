import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import WebFont from 'webfontloader';

import App from './components/app';
import './scss/app.scss';

WebFont.load({
  google: {
    families: ['Homemade Apple']
  }
});

const target = document.getElementById('root');

ReactDOM.render((
	<Router>
	  <App />
	</Router>
), target);
