import React from 'react';
import './styles.scss';
import SlideIntro from './SlideIntro';
import HotelSearch from './HotelSearch';
import ExporeDes from './ExploreDes';
import TopHotel from './TopHotel';
import Narbar from '../../components/Home/Narbar';
import Footer from '../../components/Home/Footer';
const Home = () => {
  const listHotel = [
    {
      address: '372 Corwin Harbors',
      host: 'Shane Runolfsdottir LLD',
      id: 196,
      is_verified: true,
      location: 'Tay Ho',
      name: 'Anderson-Jenkins',
      rating: 5,
      thumbnail:
        'https://homestayy.herokuapp.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa29DIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--da8d9b0a59e6631d9a6eec6c1447cf108191bb83/thumbnail',
    },
    {
      address: '372 Corwin Harbors',
      host: 'Shane Runolfsdottir LLD',
      id: 1,
      is_verified: true,
      location: 'Tay Ho',
      name: 'Anderson-Jenkins',
      rating: 5,
      thumbnail:
        'https://homestayy.herokuapp.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa29DIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--da8d9b0a59e6631d9a6eec6c1447cf108191bb83/thumbnail',
    },
    {
      address: '372 Corwin Harbors',
      host: 'Shane Runolfsdottir LLD',
      id: 2,
      is_verified: true,
      location: 'Tay Ho',
      name: 'Anderson-Jenkins',
      rating: 5,
      thumbnail:
        'https://homestayy.herokuapp.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa29DIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--da8d9b0a59e6631d9a6eec6c1447cf108191bb83/thumbnail',
    },
    {
      address: '372 Corwin Harbors',
      host: 'Shane Runolfsdottir LLD',
      id: 3,
      is_verified: true,
      location: 'Tay Ho',
      name: 'Anderson-Jenkins',
      rating: 5,
      thumbnail:
        'https://homestayy.herokuapp.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa29DIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--da8d9b0a59e6631d9a6eec6c1447cf108191bb83/thumbnail',
    },
    {
      address: '372 Corwin Harbors',
      host: 'Shane Runolfsdottir LLD',
      id: 4,
      is_verified: true,
      location: 'Tay Ho',
      name: 'Anderson-Jenkins',
      rating: 5,
      thumbnail:
        'https://homestayy.herokuapp.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa29DIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--da8d9b0a59e6631d9a6eec6c1447cf108191bb83/thumbnail',
    },
  ];
  return (
    <div className="home-layout">
      <Narbar />
      <div className="intro-section">
        <SlideIntro />
        <HotelSearch />
      </div>
      <ExporeDes />
      <TopHotel listHotel={listHotel} />
      <Footer />
    </div>
  );
};

export default Home;
