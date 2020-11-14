import React from 'react';
import './styles.scss';
import Header from './Header';
const ExploreDes = () => {
  const destination = [
    {
      img: 'https://i.ibb.co/4PDZqq6/Th-p-R-a-6.jpg',
      name: 'Hà Nội',
      number_hotel: 525,
    },
    {
      img: 'https://i.ibb.co/tJ7BMZT/da-nang.jpg',
      name: 'Đà Nẵng',
      number_hotel: 412,
    },
    {
      img: 'https://i.ibb.co/84dQSpH/hcm.jpg',
      name: 'HCM',
      number_hotel: 636,
    },
  ];
  return (
    <div className="explore-destination">
      <Header title="Explore Destinations" />
      <div className="list-city">
        {destination.map((city, index) => (
          <div className="city">
            <img src={city.img} alt="" />
            <div className="info">
              <h3 className="name">{city.name}</h3>
              <span className="number-hotel">{city.number_hotel} Hotels</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ExploreDes;
