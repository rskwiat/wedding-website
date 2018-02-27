import React from 'react';
import Proptypes from 'prop-types';

import soKind from '../images/sokind_logo.png';
import Amazon from '../images/amazon-256.png';
import PageHeader from '../components/page-header';
import RegistryCard from '../components/registry-card';

const Registry = ({ pageId }) => (
  <div className={`${pageId}-page page`}>
    <PageHeader />

    <div className="container">
      <div className="flex-row">
        <RegistryCard 
          img={soKind} 
          title="So Kind"
          link="https://sokindregistry.org/registry/RobAndMel"
        />
        <RegistryCard 
          img={Amazon} 
          title="Amazon"
          link="https://www.amazon.com/wedding/robert-skwiat-melissa-koszer-milton-october-2018/registry/2QWEYMJX3BJ59"
        />
      </div>
    </div>  
  </div>
);

Registry.propTypes = {
  pageId: Proptypes.string
};

export default Registry;
