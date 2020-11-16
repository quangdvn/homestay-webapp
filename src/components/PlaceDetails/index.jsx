import React, { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-scroll';
import PlaceImage from '../../assets/images/place-image.jpg';
import PlaceDesc from './PlaceDesc';
import PlaceAmenities from './PlaceAmenities';
import PlaceLocation from './PlaceLocation';
import PlaceReviews from './PlaceReviews';
import BookingForm from './BookingForm';
import PhotoCarousel from './PhotoCarousel';
import './styles.scss';

const navItems = [
  { label: 'Overview', to: 'overview' },
  { label: 'Amenities', to: 'amenities' },
  { label: 'Rules', to: 'rules' },
  { label: 'Location', to: 'location' },
  { label: 'Reviews', to: 'reviews' },
];

const PlaceDetails = () => {
  const [bookmarked, setBookmark] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const toggle = () => setModalOpen(!modalOpen);

  return (
    <>
      <PhotoCarousel isOpen={modalOpen} toggle={toggle} />
      <div className="place-details">
        <div className="place-image">
          <img className="place-image" src={PlaceImage} alt="place" />
          <button type="button" className="view-photos" onClick={toggle}>
            View photos
          </button>
        </div>
        <nav className="place-details-navbar">
          {navItems.map(({ label, to }) => (
            <Link
              key={to}
              className="details-nav-item"
              activeClass="active"
              to={to}
              spy
              smooth
              duration={200}
              offset={-182}
            >
              {label}
            </Link>
          ))}
          <button
            type="button"
            className="bookmark"
            onClick={() => setBookmark(!bookmarked)}
          >
            {bookmarked ? (
              <FaStar className="bookmark-icon bookmarked" />
            ) : (
              <FaRegStar className="bookmark-icon" />
            )}
            <span>Bookmark</span>
          </button>
        </nav>
        <div className="place-details-body">
          <div className="place-details-content" name="overview">
            <PlaceDesc />
            <PlaceAmenities />
            <PlaceLocation />
            <PlaceReviews />
          </div>
          <div className="booking-container">
            <BookingForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceDetails;
