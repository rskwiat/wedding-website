import React from 'react';
import Proptypes from 'prop-types';

import PageHeader from '../components/page-header';

const Wedding = ({ pageId }) => (
  <div className={`${pageId}-page page`}>
    <PageHeader />
  </div>
);

Wedding.propTypes = {
  pageId: Proptypes.string
};

export default Wedding;
