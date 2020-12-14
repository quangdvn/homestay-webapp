import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Narbar from '../Home/Narbar';
import Footer from '../Home/Footer';
import PlaceDesc from './PlaceDesc';
import PlaceAmenities from './PlaceAmenities';
import PlaceRules from './PlaceRules';
import PlaceLocation from './PlaceLocation';
import PlaceReviews from './PlaceReviews';
import BookingForm from './BookingForm';
import PhotoCarousel from './PhotoCarousel';
import LoadingIndicator from '../LoadingIndicator';
import { notifyError } from '../../services/alertService';
import { reqConfig } from '../../utils/requestConfig';
import { ADD_BOOKMARK, REMOVE_BOOKMARK } from '../../store/actions/types';
import './styles.scss';

const navItems = [
  { label: 'Overview', to: 'overview' },
  { label: 'Rules', to: 'rules' },
  { label: 'Amenities', to: 'amenities' },
  { label: 'Location', to: 'location' },
  { label: 'Reviews', to: 'reviews' },
];

const PlaceDetails = () => {
  const { hosted, bookmarks } = useSelector(state => state.auth.user);
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [bookmarked, setBookmark] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadBookmark, setLoadBookmark] = useState(false);
  const [location, setLocation] = useState({});
  const [desc, setDesc] = useState({});
  const [amenities, setAmenities] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [rules, setRules] = useState([]);
  const [prices, setPrices] = useState({});
  const toggle = () => setModalOpen(!modalOpen);

  useEffect(() => {
    if (bookmarks) {
      setBookmark(bookmarks.includes(parseInt(id, 10)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookmarks, bookmarks ? bookmarks.length : null, id]);

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
        setBookings(data.data.bookings);
        setReviews(data.data.reviews);
        setRules(data.data.rules);
        setLoading(false);
      })
      .catch(err => {
        notifyError('Something wrong has happened when fetching data.');
        history.push('/');
        console.log(err.response.data);
        setLoading(false);
      });
  }, [id, history]);

  const handleBookmark = () => {
    if (!localStorage.getItem('token')) {
      history.push('/sign-in');
      notifyError('You need to sign in before continue.');
    } else if (!bookmarked) {
      setLoadBookmark(true);
      axios
        .post(
          `https://homestayy.herokuapp.com/api/v1/travellers/${id}/bookmarks`,
          null,
          reqConfig()
        )
        .then(() => {
          dispatch({ type: ADD_BOOKMARK, payload: parseInt(id, 10) });
          setLoadBookmark(false);
        })
        .catch(err => {
          notifyError(err.response.data.message);
        });
    } else {
      setLoadBookmark(true);
      axios
        .delete(
          `https://homestayy.herokuapp.com/api/v1/travellers/${id}/bookmarks`,
          reqConfig()
        )
        .then(() => {
          dispatch({ type: REMOVE_BOOKMARK, payload: parseInt(id, 10) });
          setLoadBookmark(false);
        })
        .catch(err => {
          console.log(err);
          notifyError(err.response.data.message);
          setLoadBookmark(false);
        });
    }
  };

  return loading ? (
    <LoadingIndicator />
  ) : (
    <>
      <PhotoCarousel isOpen={modalOpen} toggle={toggle} photos={photos} />
      <div className="place-details">
        <Narbar />
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
          {!hosted || hosted.includes(parseInt(id, 10)) ? null : (
            <button
              type="button"
              className="bookmark"
              onClick={handleBookmark}
              disabled={loadBookmark}
            >
              {bookmarked ? (
                <FaStar className="bookmark-icon bookmarked" />
              ) : (
                <FaRegStar className="bookmark-icon" />
              )}
              <span>{bookmarked ? 'Bookmarked' : 'Bookmark'}</span>
            </button>
          )}
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
            <PlaceReviews
              reviews={reviews}
              desc={desc}
              placeId={id}
              setReviews={setReviews}
              isHosted={!hosted || hosted.includes(parseInt(id, 10))}
            />
          </div>
          <div className="booking-container">
            <BookingForm
              isHosted={!hosted || hosted.includes(parseInt(id, 10))}
              prices={prices}
              bookings={bookings}
              placeId={id}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PlaceDetails;
