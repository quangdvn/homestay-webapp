import React, { useState, useEffect } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { ImStarFull, ImStarEmpty, ImStarHalf } from 'react-icons/im';
import { FiExternalLink } from 'react-icons/fi';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import Header from '../ExploreDes/Header';
import {
  addBookMark,
  deleteBookMark,
  getUser,
} from '../../../store/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import { Instagram } from 'react-content-loader';

const TopHotel = ({ title, listHotel, loading }) => {
  const [hover, setHover] = useState(false);
  const [id, setId] = useState(-1);
  const { user } = useSelector(state => state.auth);
  const [listBookMarkId, setListBookmarkId] = useState([]);
  const dispatch = useDispatch();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleBookMark = async id => {
    await dispatch(addBookMark(id));
    await dispatch(getUser());
  };
  const handleDeleteBookMark = async id => {
    await dispatch(deleteBookMark(id));
    await dispatch(getUser());
  };
  useEffect(() => {
    setListBookmarkId(user.bookmarks);
  }, [user, listBookMarkId]);
  return (
    <div className="top-hotel">
      <Header title={title ? title : 'List Hotel'} />
      <div className="list-hotel">
        {loading === false
          ? listHotel.map(hotel => (
              <div
                key={hotel.id}
                className="hotel"
                onMouseEnter={() => {
                  setHover(true);
                  setId(hotel.id);
                }}
                onMouseLeave={() => {
                  setHover(!hover);
                  setId(-1);
                }}
                style={
                  hover && hotel.id === id
                    ? {
                        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 6px 12px',
                        borderBottomLeftRadius: 6,
                        borderBottomRightRadius: 6,
                      }
                    : null
                }
              >
                <Carousel
                  swipeable
                  responsive={responsive}
                  infinite
                  autoPlaySpeed={3000}
                  keyBoardControl
                  containerClass="carousel-container"
                  slidesToSlide={1}
                  renderButtonGroupOutside={false}
                  additionalTransfrom={0}
                >
                  <img src={hotel.thumbnail} alt="" width={300} height={170} />
                </Carousel>
                <div className="info">
                  <div className="address">
                    {hotel.address && hotel.address.length > 25
                      ? `${hotel.address.substr(0, 25)}...`
                      : hotel.address}
                  </div>
                  <Link to={`/places/${hotel.id}/details`}>
                    {hotel.name && hotel.name.length > 18
                      ? `${hotel.name.substr(0, 18)}...`
                      : hotel.name}
                  </Link>
                  <div>
                    <div className="price-status">
                      $316.00/Night - Free Cancellation
                    </div>
                    {hover && hotel.id === id ? (
                      <Link
                        to={`/places/${hotel.id}/details`}
                        className="view-details"
                      >
                        <FiExternalLink
                          size="1.3rem"
                          style={{ marginRight: 10 }}
                        />
                        View Details
                      </Link>
                    ) : (
                      <div className="rating">
                        <span>
                          {[...Array(Math.floor(hotel.rating)).keys()].map(
                            item => (
                              <ImStarFull key={item} className="rating-star" />
                            )
                          )}
                          {Math.round(hotel.rating) > hotel.rating && (
                            <ImStarHalf className="rating-star" />
                          )}
                          {[...Array(5 - Math.ceil(hotel.rating)).keys()].map(
                            item => (
                              <ImStarEmpty key={item} className="rating-star" />
                            )
                          )}
                        </span>
                        <strong
                          className="status"
                          style={{ marginLeft: 8, fontSize: 13, marginTop: 5 }}
                        >
                          {hotel.rating >= 4
                            ? `Awesome(${hotel.rating.toFixed(1)})`
                            : hotel.rating >= 3
                            ? `Good(${hotel.rating.toFixed(1)})`
                            : hotel.rating >= 2
                            ? `Mediocre(${hotel.rating.toFixed(1)})`
                            : hotel.rating >= 1
                            ? `Bad(${hotel.rating.toFixed(1)})`
                            : 'No reviews'}
                        </strong>
                      </div>
                    )}
                  </div>
                </div>
                <div className="bookmark">
                  {listBookMarkId && listBookMarkId.includes(hotel.id) ? (
                    <FaHeart
                      className="heart"
                      onClick={() => {
                        let index = listBookMarkId.indexOf(hotel.id);
                        if (index > -1) {
                          listBookMarkId.splice(index, 1);
                        }
                        handleDeleteBookMark(hotel.id);
                      }}
                    />
                  ) : (
                    <FaRegHeart
                      className="heart"
                      onClick={() => {
                        listBookMarkId.push(hotel.id);
                        handleBookMark(hotel.id);
                      }}
                    />
                  )}
                </div>
              </div>
            ))
          : [1, 2, 3, 4, 5].map(() => (
              <div className="loading">
                <Instagram width={225} height={304} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default TopHotel;
