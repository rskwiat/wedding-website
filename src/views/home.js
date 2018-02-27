import React from 'react';
import Proptypes from 'prop-types';
import SaveTheDate from '../components/save-the-date';
import OurStory from '../components/our-story';

const Home = ({ pageId }) => (
  <div className={`${pageId}-page page`}>
    <SaveTheDate />
    <OurStory title="Our Story" />
  </div>
);

Home.propTypes = {
  pageId: Proptypes.string
};

export default Home;
