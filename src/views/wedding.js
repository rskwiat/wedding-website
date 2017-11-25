import React from 'react';
import PageHeader from '../components/page-header';

const Wedding = () => {
  return (
    <div>
      <PageHeader 
        page="wedding" 
        date="October 27, 2018"
        location="Milton, New York"
      />
      <div className="container">
        Wedding
      </div>
    </div>
  );
};

export default Wedding;
