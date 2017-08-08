import React from 'react';

import Navigation from './navigation';
import Footer from './footer';
import routes from '../routes';
// import classNames from 'classnames';

const App = () => {
	return (
		<div>
			<Navigation />
			{ routes }
      <Footer 
        copyright="test"
      />
		</div>
	);
}

export default App;
