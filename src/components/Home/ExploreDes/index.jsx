import React from 'react';
import './styles.scss';
import Header from './Header';
const ExploreDes = () => {
  const destination = [
    {
      img: 'https://khachsandanang.info/wp-content/uploads/2016/11/1-2.jpg',
      name: 'Đà Nẵng',
      number_hotel: 522525,
    },
    {
      img: 'https://khachsandanang.info/wp-content/uploads/2016/11/1-2.jpg',
      name: 'Đà Nẵng',
      number_hotel: 522525,
    },
  ];
  return (
    <div className="explore-destination">
      <Header />
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
