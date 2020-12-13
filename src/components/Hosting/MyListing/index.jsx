import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { reqConfig } from '../../../utils/requestConfig';
import ListingItem from './ListingItem';
import LoadingIndicator from '../../LoadingIndicator';
import './styles.scss';

const MyListing = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://homestayy.herokuapp.com/api/v1/hosts/places', reqConfig())
      .then(({ data }) => {
        setLoading(false);
        setListings(data.data.places);
      })
      .catch(() => {
        setLoading(false);
        console.log('Something wrong has happened when fetching data.');
      });
  }, []);

  return loading ? (
    <LoadingIndicator isHost />
  ) : (
    <div className="my-listing">
      {!listings.length ? (
        <div className="empty">You haven&apos;t created any place yet!</div>
      ) : (
        <>
          <h4 className="mt-5">Your listings ({listings.length})</h4>
          <div className="my-listing-grid">
            {listings.map(item => (
              <ListingItem key={item.id} desc={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyListing;
