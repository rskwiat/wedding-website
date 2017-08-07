import React from 'react';
import Navigation from './navigation';
import routes from '../routes';
import classNames from 'classnames';

const App = () => {
	return (
		<div>
			<Navigation />
			{ routes }
		</div>
	);
}

export default App;
