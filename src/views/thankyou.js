import React from 'react';
import Proptypes from 'prop-types';
import PageHeader from '../components/page-header';

const ThankYou = ({ pageId }) => (
  <div className={`${pageId}-page page`}>
    <PageHeader />

    <div className="container container-small thank-you">
      <div className="row">
        <h2>Thank You</h2>
        <p>If we have any questions about your RSVP we will reach out via the email provided.</p>
      </div>
    </div>

  </div>
);

ThankYou.propTypes = {
  pageId: Proptypes.string
};

export default ThankYou;
