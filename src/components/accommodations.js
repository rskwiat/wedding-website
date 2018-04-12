import React from 'react';

import Button from './button';
import MapComponent from './map';

const Accommodations = ({ venue, roomBlock }) => (
  <div className="container container-small">
    <div className="row">
      <MapComponent />
      <div className="accommodation">
        <h2>{roomBlock}</h2>
        <p>A block of rooms have been reserved at a discounted rate. Please call and mention the Kozser Skwiat Wedding Room Block. October 26 to October 28th</p>

        <address>
          2750 South Rd
          Poughkeepsie, NY 12601

          Holiday Inn Express
          Poughkeepsie, NY
          (7.5 miles from Buttermilk)
        </address>

        <p>Holiday Inn Customer Service: <a className="hotel-phone" href="tel:845-473-1151">845-473-1151</a></p>

        <Button
          link="http://www.hiexpress.com/poughkeepsie"
          name="Reserve a Room"
        />
      </div>
    </div>
  </div>
);

export default Accommodations;

