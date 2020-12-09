import React from 'react';
import { useSelector } from 'react-redux';
import SlideIntro from './SlideIntro';
import HotelSearch from './HotelSearch';
import ExporeDes from './ExploreDes';
import TopHotel from './TopHotel';
import Narbar from './Narbar';
import Footer from './Footer';
import LoadingIndicator from '../LoadingIndicator';
import './styles.scss';

const Home = () => {
  const { isLoading } = useSelector(state => state.auth);

  return isLoading ? (
    <LoadingIndicator />
  ) : (
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
