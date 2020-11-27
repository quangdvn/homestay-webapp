import React from 'react';
import './styles.scss';
import SlideIntro from './SlideIntro';
import HotelSearch from './HotelSearch';
import ExporeDes from './ExploreDes';
import TopHotel from './TopHotel';
import Narbar from '../../components/Home/Narbar';
import Footer from '../../components/Home/Footer';
const Home = () => {
  return (
    <div className="home-layout">
      <Narbar />
      <div className="intro-section">
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
