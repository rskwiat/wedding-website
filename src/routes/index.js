import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import Home from '../views/home';
import Wedding from '../views/wedding';
import Photos from '../views/photos';
import Rsvp from '../views/rsvp';

export default (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/wedding" component={Wedding} />
      <Route path="/photos" component={Photos} />
      <Route path="/rsvp" component={Rsvp} />
      <Route path="*" component={Home} />
    </Switch>
  </div>
);