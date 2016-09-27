import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { createHistory } from 'history';
import routes from './routes/routes';


const Routes = (
  <Router history={browserHistory}>
    { routes }
  </Router>
)


ReactDOM.render((
  Routes
), document.getElementById('app'))
