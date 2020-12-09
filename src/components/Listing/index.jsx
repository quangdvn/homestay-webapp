import React, { useEffect } from 'react';
import Narbar from '../Home/Narbar';
import TopHotel from '../Home/TopHotel';
import Footer from '../Home/Footer';
import { useSelector } from 'react-redux';
import LoadingIndicator from '../LoadingIndicator';
import './styles.scss';
const Listing = () => {
  const { listHotel } = useSelector(state => state.auth);
  const listDefault = [
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
  useEffect(() => {
    console.log(listHotel);
  }, [listHotel]);
  return listHotel ? (
    <div>
      <Narbar />
      <div style={{ height: 64 }}></div>
      <TopHotel listHotel={listDefault} title="Result Search: " />
      <Footer />
    </div>
  ) : (
    <LoadingIndicator />
  );
};
export default Listing;
