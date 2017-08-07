import React from 'react';
import { Link } from 'react-router-dom';
import nav from '../routes/nav';

const Navigation = () => {
	return (
		<nav>
			<ul>
			{ nav.map(function(item, i) {
					return (
						<li key={i}>
							<Link to={item.url}>{item.title}</Link>
						</li>
					);
				})
			}
			</ul>
		</nav>
	)
}; 

export default Navigation;