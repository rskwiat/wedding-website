import React from 'react';
import Proptypes from 'prop-types';

import PageHeader from '../components/page-header';
import Button from '../components/button';

const Wedding = ({ pageId }) => (
  <div className={`${pageId}-page page`}>
    <PageHeader />
    <div className="">
      Location of Wedding

    </div>

    <div className="">

      Accommodations - Holiday Inn Express


      <p>A block of rooms have been reserved at a discounted rate. Please call and mention the Kozser Skwiat Wedding Room Block. October 26 to October 28th</p>

      <address>
        2750 South Rd
        Poughkeepsie, NY 12601

        Holiday Inn Express
        Poughkeepsie, NY
        (7.5 miles from Buttermilk)
        845-473-1151
      </address>

  <Button
    link="http://www.hiexpress.com/poughkeepsie"
    title="Reservation"
  />
    </div>
  </div>
);

Wedding.propTypes = {
  pageId: Proptypes.string
};

export default Wedding;
