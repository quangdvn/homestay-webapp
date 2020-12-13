import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { reqConfig } from '../../../utils/requestConfig';
import ListingItem from './ListingItem';
import LoadingIndicator from '../../LoadingIndicator';
import './styles.scss';

const MyListing = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios
      .get('https://homestayy.herokuapp.com/api/v1/hosts/places', reqConfig())
      .then(({ data }) => {
        setListings(data.data.places);
      })
      .catch(err => {
        console.log(err.response);
      });
  }, []);

  return !listings.length ? (
    <LoadingIndicator isHost />
  ) : (
    <div className="my-listing">
      <h4 className="mt-5">Your listings ({listings.length})</h4>
      <div className="my-listing-grid">
        {listings.map(item => (
          <ListingItem key={item.id} desc={item} />
        ))}
      </div>
    </div>
  );
};

export default MyListing;
