import React, { Component } from 'react'
import { Route, IndexRoute, Link } from 'react-router'

import Nav from '../components/nav';
import Home from '../pages/home';
import NoMatch from '../pages/error';
import Photos from '../pages/photos';
import Wedding from '../pages/wedding';
import RSVP from '../pages/rsvp';


export default (
  <Route path="/" component={Nav}>
    <IndexRoute component={Home}/>
    <Route path="wedding" component={Wedding} />
    <Route path="photos" component={Photos} />
    <Route path="rsvp" component={RSVP} />
    <Route path="*" component={NoMatch}/>
  </Route>
)
