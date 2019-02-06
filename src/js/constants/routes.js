import Home from '@src/views/home';
import Wedding from '@src/views/wedding';
import Registry from '@src/views/registry';
import Rsvp from '@src/views/rsvp';
import ThankYou from '@src/views/thankyou';

const Routes = [
  { path: '/', component: Home },
  { path: '/wedding', component: Wedding },
  { path: '/registry', component: Registry },
  { path: '/rsvp', component: Rsvp },
  { path: '/rsvp/thank-you', component: ThankYou },
];

export default Routes;
