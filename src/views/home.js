import React from 'react';
import SaveTheDate from '../components/save-the-date';
import OurStory from '../components/our-story';

const Home = () => {
  return (
    <div className="home-page page">
      <SaveTheDate 
        date="October 27, 2018"
        location="Milton, New York"
      />
      <OurStory />
    </div>
  );
};

export default Home;
