import React from 'react';
import Proptypes from 'prop-types';
import SaveTheDate from '../components/save-the-date';

const Home = ({ pageId }) => (
  <div className={`${pageId}-page page`}>
    <SaveTheDate />
  </div>
);

Home.propTypes = {
  pageId: Proptypes.string
};

export default Home;
