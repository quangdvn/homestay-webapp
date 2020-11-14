import React from 'react';
import './styles.scss';
import Header from '../ExploreDes/Header';
import { Link } from 'react-router-dom';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';
import Carousel from 'react-multi-carousel';

const TopHotel = props => {
  const listHotel = [
    {
      id: 1,
      img:
        'https://i.pinimg.com/originals/6e/bd/54/6ebd5405194190cc7dd885ca164cde20.jpg',
      address: '8424 Padberg Flats',
      name: 'Small Metal Ball',
      price: '316.00',
      status: false,
      numberStar: 4,
    },
    {
      id: 2,
      img:
        'https://i.pinimg.com/originals/6e/bd/54/6ebd5405194190cc7dd885ca164cde20.jpg',
      address: '8424 Padberg Flats',
      name: 'Small Metal Ball',
      price: '316.00',
      status: false,
      numberStar: 4,
    },
    {
      id: 3,
      img:
        'https://i.pinimg.com/originals/6e/bd/54/6ebd5405194190cc7dd885ca164cde20.jpg',
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
          <div className="hotel">
            <div className="img">
              <Carousel
                swipeable={true}
                showDots={true}
                responsive={responsive}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={['tablet', 'mobile']}
                deviceType="tablet"
                dotListClass="custom-dot-list-style"
                itemClass="test"
                slidesToSlide={1}
              >
                <img
                  src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-12_thumb.jpg"
                  style={{
                    height: 167,
                    position: 'relative',
                  }}
                  alt=""
                />
                {/* <img
                  src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-13_thumb.jpg"
                  style={{
                    height: 167,
                    position: 'relative',
                  }}
                />
                <img
                  src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-14_thumb.jpg"
                  style={{
                    height: 167,
                    position: 'relative',
                  }}
                /> */}
              </Carousel>
            </div>
            <div className="info">
              <div className="address">{hotel.address}</div>
              <Link to={`/places/${hotel.id}/details`}>{hotel.name}</Link>
              <div>
                <div className="price-status">
                  $316.00/Night - Free Cancellation
                </div>
                <div className="rating">
                  <span>
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStarOutline />
                    <IoIosStarOutline />
                    <IoIosStarOutline />
                  </span>
                  <strong
                    className="status"
                    style={{ marginLeft: 8, fontSize: 13, marginTop: 5 }}
                  >
                    Bad(12)
                  </strong>
                </div>
                <div className="view-details"></div>
              </div>
            </div>
            <div className="bookmark"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TopHotel;
