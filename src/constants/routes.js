import Home from 'views/Home';
import Wedding from 'views/Wedding';
import Registry from 'views/Registry';

const Routes = [
  { path: '/',
    title: 'Home',
    component: Home },
  { path: '/wedding', 
    title: 'Wedding',
    component: Wedding 
  },
  { path: '/registry', 
    title: 'Registry',
    component: Registry },
];

export default Routes;
