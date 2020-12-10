import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SlideIntro from './SlideIntro';
import HotelSearch from './HotelSearch';
import ExporeDes from './ExploreDes';
import TopHotel from './TopHotel';
import Narbar from './Narbar';
import Footer from './Footer';
import LoadingIndicator from '../LoadingIndicator';
import './styles.scss';
import axios from 'axios';
const Home = () => {
  const [listHotel, setListHotel] = useState(null);
  const [listCity, setListCity] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get('https://homestayy.herokuapp.com/api/v1/location/recommended/5.json')
      .then(res => {
        setListHotel(res.data.data.places);
      })
      .catch(err => {
        console.log(err.message);
      });
    axios
      .get('https://homestayy.herokuapp.com/api/v1/location/cities')
      .then(res => {
        setListCity(res.data.data);
      })
      .catch(err => {
        console.log(err.message);
      });
    setLoading(false);
  }, []);
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

      <ExporeDes listCity={listCity} loading={loading} />
      {listHotel && <TopHotel listHotel={listHotel} />}
      <Footer />
    </div>
  );
};

export default Home;
