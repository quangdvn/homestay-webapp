import React, { useState } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';
import { FiExternalLink } from 'react-icons/fi';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import Header from '../ExploreDes/Header';

const TopHotel = props => {
  const [hover, setHover] = useState(false);
  const [bookmark, setBookMark] = useState(false);
  const [id, setId] = useState(-1);
  const listHotel = [
    {
      id: 1,
      img: [
        'http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-12_thumb.jpg',
        'http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-13_thumb.jpg',
        'http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-14_thumb.jpg',
      ],
      address: '8424 Padberg Flats',
      name: 'Small Metal Ball',
      price: '316.00',
      status: false,
      numberStar: 4,
    },
    {
      id: 2,
      img: [
        'http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-12_thumb.jpg',
        'http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-13_thumb.jpg',
        'http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-14_thumb.jpg',
      ],
      address: '8424 Padberg Flats',
      name: 'Small Metal Ball',
      price: '316.00',
      status: false,
      numberStar: 4,
    },
    {
      id: 3,
      img: [
        'http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-12_thumb.jpg',
        'http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-13_thumb.jpg',
        'http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-14_thumb.jpg',
      ],
      address: '8424 Padberg Flats',
      name: 'Small Metal Ball',
      price: '316.00',
      status: false,
      numberStar: 4,
    },
    // {
    //   id: 4,
    //   img:
    //     'https://i.pinimg.com/originals/6e/bd/54/6ebd5405194190cc7dd885ca164cde20.jpg',
    //   address: '8424 Padberg Flats',
    //   name: 'Small Metal Ball',
    //   price: '316.00',
    //   status: false,
    //   numberStar: 4,
    // },
    // {
    //   id: 5,
    //   img:
    //     'https://i.pinimg.com/originals/6e/bd/54/6ebd5405194190cc7dd885ca164cde20.jpg',
    //   address: '8424 Padberg Flats',
    //   name: 'Small Metal Ball',
    //   price: '316.00',
    //   status: false,
    //   numberStar: 4,
    // },
    // {
    //   id: 6,
    //   img:
    //     'https://i.pinimg.com/originals/6e/bd/54/6ebd5405194190cc7dd885ca164cde20.jpg',
    //   address: '8424 Padberg Flats',
    //   name: 'Small Metal Ball',
    //   price: '316.00',
    //   status: false,
    //   numberStar: 4,
    // },
    // {
    //   id: 7,
    //   img:
    //     'https://i.pinimg.com/originals/6e/bd/54/6ebd5405194190cc7dd885ca164cde20.jpg',
    //   address: '8424 Padberg Flats',
    //   name: 'Small Metal Ball',
    //   price: '316.00',
    //   status: false,
    //   numberStar: 4,
    // },
  ];
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
      <Header title="Travelers’ Choice: Top hotels" />
      <div className="list-hotel">
        {listHotel.map(hotel => (
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
              showDots
              responsive={responsive}
              infinite
              autoPlaySpeed={3000}
              keyBoardControl
              containerClass="carousel-container"
              slidesToSlide={1}
              renderButtonGroupOutside={false}
              additionalTransfrom={0}
            >
              {hotel.img.map(data => (
                <img src={data} alt="" />
              ))}
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
                    <FiExternalLink size="1.3rem" style={{ marginRight: 10 }} />
                    View Details
                  </Link>
                ) : (
                  <div className="rating">
                    <span>
                      <IoIosStar className="rating-star " />
                      <IoIosStar className="rating-star " />
                      <IoIosStarOutline className="rating-star " />
                      <IoIosStarOutline className="rating-star " />
                      <IoIosStarOutline className="rating-star " />
                    </span>
                    <strong
                      className="status"
                      style={{ marginLeft: 8, fontSize: 13, marginTop: 5 }}
                    >
                      Bad(12)
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
              {bookmark ? (
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
