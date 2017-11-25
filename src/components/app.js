import React from 'react';

import Navigation from './navigation';
import Footer from './footer';
import routes from '../routes';

const App = () => (
  <div>
    <Navigation />
    { routes }
    <Footer 
      copyright="&copy; 2017 Koszer Skwiat Tie it"
      builtBy="The Groom"
      email="rskwiat@gmail.com"
    />
  </div>
);

export default App;
