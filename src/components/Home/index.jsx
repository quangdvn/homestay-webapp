import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SlideIntro from './SlideIntro';
import HotelSearch from './HotelSearch';
import ExporeDes from './ExploreDes';
import TopHotel from './TopHotel';
import Narbar from './Narbar';
import Footer from './Footer';
import './styles.scss';

const Home = () => {
  const [listHotel, setListHotel] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://homestayy.herokuapp.com/api/v1/location/recommended/5.json')
      .then(res => {
        setListHotel(res.data.data.places);
        setLoading(false);
      })
      .catch(err => {
        console.log(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home-layout">
      <Narbar />
      <div className="intro-section">
        <SlideIntro />
        <HotelSearch />
      </div>
      <ExporeDes />
      <TopHotel
        listHotel={listHotel}
        title="Travelers’ Choice: Top hotels"
        loading={loading}
      />
      <Footer />
    </div>
  );
};

export default Home;
