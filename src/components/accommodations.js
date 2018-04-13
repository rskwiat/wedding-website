import React from 'react';

import Button from './button';
import MyMapComponent from './map';

import settings from '../config/settings';

const Accommodations = ({ venue, roomBlock }) => {

  const URL = `https://maps.googleapis.com/maps/api/js?key=${settings.mapKey}&v=3.exp&libraries=geometry,drawing,places`

  return (
    <div className="container container-small">
      <div className="row">
        <MyMapComponent
          directions="https://www.google.com/maps/dir//Buttermilk+Falls+Inn+%26+Spa,+220+N+Rd,+Milton,+NY+12547/@40.8609943,-73.9301509,15z/data=!4m18!1m8!3m7!1s0x89dd3c13fa9cdf3b:0x56494373ce697a1!2sButtermilk+Falls+Inn+%26+Spa!5m1!1s2018-04-22!8m2!3d41.6669666!4d-73.9549376!4m8!1m0!1m5!1m1!1s0x89dd3c13fa9cdf3b:0x56494373ce697a1!2m2!1d-73.9549376!2d41.6669666!3e3"
          lat="41.6669706"
          long="-73.9571263"
          isMarkerShown
          googleMapURL={URL}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `40rem`, marginBottom: '4rem' }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />

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
}

export default Accommodations;

