import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
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

const App = () => (
  <Router>
    <div>
      <Navigation />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} pageId="home" />} />
          <Route path="/wedding" render={(props) => <Wedding {...props} pageId="wedding" />} />
          <Route path="/registry" render={(props) => <Registry {...props} pageId="registry" />} />
          <Route path="/rsvp" render={(props) => <Rsvp {...props} pageId="rsvp" />} />
          <Route path="/rsvp/thank-you" render={(props) => <ThankYou {...props} pageId="thanks" />} />
        </Switch>
      <Footer
        copyright="2018"
        email="rskwiat@gmail.com"
        builtBy="The Groom"
      />
    </div>
  </Router>
);

export default App;
