import React from 'react';
import './styles.scss';
import Narbar from './Narbar';
import SlideIntro from './SlideIntro';
import HotelSearch from './HotelSearch';
import ExporeDes from './ExploreDes';
import TopHotel from './TopHotel';
import Footer from './Footer';
const Home = () => {
  return (
    <div className="home-layout">
      <div className="intro-section">
        <Narbar />
        <SlideIntro />
        <HotelSearch />
      </div>
      <ExporeDes />
      <TopHotel />
      <Footer />
    </div>
  );
};

export default Home;
