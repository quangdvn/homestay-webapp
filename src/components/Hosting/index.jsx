import React from 'react';
import { Link } from 'react-router-dom';
import HostNavbar from '../Home/HostNavbar';
import MyListing from './MyListing';
import './styles.scss';

const Hosting = () => {
  return (
    <div className="my-hosting">
      <HostNavbar />
      <div className="hosting-navbar">
        <div className="nav-items">
          <button type="button" className="nav-item active">
            Your listings
          </button>
          <button type="button" className="nav-item">
            Reserved
          </button>
        </div>
        <Link to="/new-hosting" className="new-listing">
          Create new listing
        </Link>
      </div>
      <div className="my-container">
        <MyListing />
      </div>
    </div>
  );
};

export default Hosting;
