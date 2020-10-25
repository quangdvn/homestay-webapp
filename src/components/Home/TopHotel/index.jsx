import React from 'react';
import './styles.scss';
import Header from '../ExploreDes/Header';
const TopHotel = () => {
  const listHotel = [
    {
      img:
        'https://i.pinimg.com/originals/6e/bd/54/6ebd5405194190cc7dd885ca164cde20.jpg',
      address: '8424 Padberg Flats',
      name: 'Small Metal Ball',
      price: '316.00',
      status: false,
      numberStar: 4,
    },
  ];
  return (
    <div className="top-hotel">
      <Header />
      <div className="list-hotel">
        {listHotel.map((hotel, index) => (
          <div className="hotel">
            <img src={hotel.img} alt="" />
            <div className="info">
              <div className="address">{hotel.address}</div>
              <div className="name">{hotel.name}</div>
              <div className="price-status">
                <div className="price">${hotel.price}</div>
                <div className="status-cancel">/Night - Free Cancellation</div>
              </div>
              <div className="star">
                {/* <img src="" alt="" /> */}
                <strong className="status">Bad(12)</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TopHotel;
