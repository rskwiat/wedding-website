import React from 'react';
import Proptypes from 'prop-types';
import PageHeader from '../components/page-header';

const Photos = ({ pageId }) => (
  <div className={`${pageId}-page page`}>
    <PageHeader />
    <div className="container container-small photos">
      <h2>Photos</h2>
    </div>

  </div>
);

Photos.propTypes = {
  pageId: Proptypes.string
};

export default Photos;
