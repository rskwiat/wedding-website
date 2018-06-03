import React from 'react';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import WebFont from 'webfontloader';

import Navigation from './components/navigation';
import Footer from './components/footer';

import Home from './views/home';
import Wedding from './views/wedding';
import Registry from './views/registry';
import Rsvp from './views/rsvp';
import ThankYou from './views/thankyou';

import './scss/app.scss';

WebFont.load({
  google: {
    families: ['Sanchez']
  }
});


const Routes = [
  { path: '/', component: Home },
  { path: '/wedding', component: Wedding },
  { path: '/registry', component: Registry },
  { path: '/rsvp', component: Rsvp },
  { path: '/rsvp/thank-you', component: ThankYou },
];

const App = () => (
  <Router>
    <div>
      <Navigation />
      { Routes.map((route, i) => (
        <Route key={i} exact path={route.path} component={route.component} />
      )) }
      <Footer
        copyright="2018"
        email="rskwiat@gmail.com"
        builtBy="The Groom"
      />
    </div>
  </Router>
);

export default App;
