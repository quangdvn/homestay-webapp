import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-scroll';
import PlaceImage from '../../assets/images/place-image.jpg';
import PlaceDesc from './PlaceDesc';
import PlaceAmenities from './PlaceAmenities';
import PlaceRules from './PlaceRules';
import PlaceLocation from './PlaceLocation';
import PlaceReviews from './PlaceReviews';
import BookingForm from './BookingForm';
import PhotoCarousel from './PhotoCarousel';
import LoadingIndicator from '../LoadingIndicator';
import './styles.scss';

const navItems = [
  { label: 'Overview', to: 'overview' },
  { label: 'Rules', to: 'rules' },
  { label: 'Amenities', to: 'amenities' },
  { label: 'Location', to: 'location' },
  { label: 'Reviews', to: 'reviews' },
];

const PlaceDetails = () => {
  const [bookmarked, setBookmark] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState({});
  const [desc, setDesc] = useState({});
  const [amenities, setAmenities] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [rules, setRules] = useState([]);
  const [prices, setPrices] = useState({});
  const toggle = () => setModalOpen(!modalOpen);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://homestayy.herokuapp.com/api/v1/travellers/places/${id}.json`
      )
      .then(({ data }) => {
        setLocation({
          latitude: data.data.latitude,
          longitude: data.data.longitude,
        });
        setDesc({
          location: `${data.data.address}, ${data.data.location}`,
          name: data.data.name,
          rating: data.data.rating,
          reviewCount: data.data.review_count,
          hostId: data.data.host_id,
          host: data.data.host,
          bedroom: data.data.bedroom_number,
          bathroom: data.data.bathroom_number,
          guests: data.data.max_guests,
          amenitiesCount: data.data.amenity_count,
        });
        setPrices({
          base: data.data.base_price,
          extra: data.data.extra_fee,
        });
        setPhotos(data.data.photos);
        setAmenities(data.data.amenities);
        setReviews(data.data.reviews);
        setRules(data.data.rules);
        setLoading(false);
      })
      .catch(err => {
        console.log(err.response);
      });
  }, [id]);

  return loading ? (
    <LoadingIndicator />
  ) : (
    <>
      <PhotoCarousel isOpen={modalOpen} toggle={toggle} photos={photos} />
      <div className="place-details">
        <div className="place-image">
          <img className="place-image" src={photos[0].url} alt="place" />
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
            <PlaceDesc desc={desc} />
            <PlaceRules rules={rules} />
            <PlaceAmenities
              amenities={amenities}
              amenitiesCount={desc.amenitiesCount}
            />
            <PlaceLocation location={location} />
            <PlaceReviews reviews={reviews} desc={desc} />
          </div>
          <div className="booking-container">
            <BookingForm prices={prices} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceDetails;
