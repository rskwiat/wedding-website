import React from 'react';
import './App.css';

import WebFont from 'webfontloader';
import Footer from 'components/footer';

WebFont.load({
  google: {
    families: ['Sanchez']
  }
});


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Footer
        copyright="2018"
        email="rskwiat@gmail.com"
        builtBy="The Groom"
      />
    </div>
  );
}

export default App;
