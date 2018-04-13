import React from 'react';
import Proptypes from 'prop-types';

import PageHeader from '../components/page-header';
import Accommodations from '../components/accommodations';

const Wedding = ({ pageId }) => (
  <div className={`${pageId}-page page`}>
    <PageHeader />
    <Accommodations 
      venue="Butter Milk Falls Inn" 
      roomBlock="Accommodations - Holiday Inn Express"
    />
  </div>
);

Wedding.propTypes = {
  pageId: Proptypes.string
};

export default Wedding;
