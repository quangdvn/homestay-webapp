import React from 'react';
import ListingItem from './ListingItem';
import './styles.scss';

const MyListing = () => {
  return (
    <div className="my-listing">
      <h4 className="mt-5">Your listings (10)</h4>
      <div className="my-listing-grid">
        <ListingItem />
        <ListingItem />
      </div>
    </div>
  );
};

export default MyListing;
