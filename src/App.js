import React from 'react';
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';

import Navigation from './components/navigation';
import Footer from './components/footer';

import Home from './views/home';
import Wedding from './views/wedding';
import Photos from './views/photos'
import Rsvp from './views/rsvp';

const App = () => (
  <Router>
    <div>
      <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/wedding" component={Wedding} />
        <Route path="/photos" component={Photos} />
        <Route path="/rsvp" component={Rsvp} />
      <Footer
        copyright="2018"
        email="rskwiat@gmail.com"
        builtBy="The Groom"
      />
    </div>
  </Router>
);

export default App;
