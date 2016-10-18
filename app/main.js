import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes/routes';

const target = document.getElementById('app');

const Routes = (
  <Router history={browserHistory}>
    { routes }
  </Router>
);

ReactDOM.render((
  Routes
), target);
