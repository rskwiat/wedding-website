import '@scss/app.scss';

import React from 'react';
import { 
  Router,
  Route
} from 'react-router-dom';
import WebFont from 'webfontloader';
import createHistory from 'history/createBrowserHistory';

import Navigation from './components/navigation';
import Footer from './components/footer';
import Routes from './constants/routes';

WebFont.load({
  google: {
    families: ['Sanchez']
  }
});

const App = () => (
  <Router history={createHistory()}>
    <div>
      <Navigation />
      { Routes.map((route, i) => (
        <Route 
          key={i} 
          exact 
          path={route.path} 
          component={route.component} 
        />
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
