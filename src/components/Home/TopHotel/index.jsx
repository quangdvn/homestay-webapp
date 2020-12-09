import React, { useState, useEffect } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';
import { FiExternalLink } from 'react-icons/fi';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import Header from '../ExploreDes/Header';

const TopHotel = ({ listHotel, title }) => {
  const [hover, setHover] = useState(false);
  const [bookmark, setBookMark] = useState(false);
  const [id, setId] = useState(-1);
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
  return (
    <div className="top-hotel">
      <Header title={title ? title : 'Travelers’ Choice: Top hotels'} />
      <div className="list-hotel">
        {listHotel &&
          listHotel.map(hotel => (
            <div
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
                <div className="address">{hotel.address}</div>
                <Link to={`/places/${hotel.id}/details`}>{hotel.name}</Link>
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
                        {[...Array(Math.round(hotel.rating)).keys()].map(
                          item => (
                            <IoIosStar key={item} className="rating-star" />
                          )
                        )}
                        {[...Array(5 - Math.round(hotel.rating)).keys()].map(
                          item => (
                            <IoIosStarOutline
                              key={item}
                              className="rating-star"
                            />
                          )
                        )}
                      </span>
                      <strong
                        className="status"
                        style={{ marginLeft: 8, fontSize: 13, marginTop: 5 }}
                      >
                        {hotel.rating >= 1 && hotel.rating <= 2
                          ? `Bad(${hotel.rating})`
                          : hotel.rating >= 3 && hotel.rating <= 4
                          ? `Average(${hotel.rating})`
                          : `Good(${hotel.rating})`}
                      </strong>
                    </div>
                  )}
                </div>
              </div>
              <div
                className="bookmark"
                onClick={() => {
                  setBookMark(!bookmark);
                }}
              >
                {bookmark && hotel.id === id ? (
                  <FaHeart className="heart" />
                ) : (
                  <FaRegHeart className="heart" />
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopHotel;
