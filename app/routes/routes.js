import React, { Component } from 'react'
import { Route, IndexRoute, Link } from 'react-router'

import Nav from '../components/nav';
import Home from '../pages/home';
import NoMatch from '../pages/error';


export default (
  <Route path="/" component={Nav}>
    <IndexRoute component={Home}/>
    <Route path="*" component={NoMatch}/>
  </Route>
)
