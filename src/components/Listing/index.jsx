import React, { useEffect } from 'react';
import Narbar from '../Home/Narbar';
import TopHotel from '../Home/TopHotel';
import Footer from '../Home/Footer';
import { useSelector } from 'react-redux';
import LoadingIndicator from '../LoadingIndicator';
import './styles.scss';
const Listing = () => {
  const { listHotel } = useSelector(state => state.auth);
  useEffect(() => {
    console.log(listHotel);
  }, [listHotel]);
  return listHotel ? (
    <div>
      <Narbar />
      <div style={{ height: 64 }}></div>
      <TopHotel listHotel={listHotel} title="Result Search: " />
      <Footer />
    </div>
  ) : (
    <LoadingIndicator />
  );
};
export default Listing;
