import React from 'react';
import './styles.scss';
import SlideIntro from './SlideIntro';
import HotelSearch from './HotelSearch';
import ExporeDes from './ExploreDes';
import TopHotel from './TopHotel';

const Home = () => {
  return (
    <div className="home-layout">
      <div className="intro-section">
        <SlideIntro />
        <HotelSearch />
      </div>
      <ExporeDes />
      <TopHotel />
    </div>
  );
};

export default Home;
