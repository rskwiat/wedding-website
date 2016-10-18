import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Nav from '../components/nav';
import { Home, NoMatch, Photos, Wedding, RSVP } from '../pages';

export default (
  <Route path="/" component={Nav}>
    <IndexRoute component={Home} />
    <Route path="wedding" component={Wedding} />
    <Route path="photos" component={Photos} />
    <Route path="rsvp" component={RSVP} />
    <Route path="*" component={NoMatch} />
  </Route>
);
