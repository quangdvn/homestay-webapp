import React from 'react';
import Narbar from '../Home/Narbar';
import TopHotel from '../Home/TopHotel';
import Footer from '../Home/Footer';

const Listing = () => {
  return (
    <div>
      <Narbar />
      <div style={{ height: 300, backgroundColor: 'red' }}></div>
      <TopHotel />
      <Footer />
    </div>
  );
};
export default Listing;
