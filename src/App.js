import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import WebFont from 'webfontloader';

import Navigation from 'components/navigation';
import Footer from 'components/footer';
import Routes from 'constants/routes';

WebFont.load({
  google: {
    families: ['Sanchez']
  }
});

const App = () => (
  <Router>
    <div>
      <Navigation />
      { Routes.map((route, i) => {
        console.log(route);
        return (
          <Route
            key={i}
            exact
            path={route.path}
            component={route.component}
          />
        );
      })}
      <Footer
        copyright="2018"
        email="rskwiat@gmail.com"
        builtBy="The Groom"
      />
    </div>
  </Router>
);

export default App;
