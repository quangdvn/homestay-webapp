import React from 'react';
import { Element } from 'react-scroll';
import { FaWifi, FaCarAlt, FaSwimmer, FaAirFreshener } from 'react-icons/fa';
import './styles.scss';

const amenityIcons = [FaWifi, FaCarAlt, FaSwimmer, FaAirFreshener];

const PlaceAmenities = () => {
  const amenities = [
    { id: 0, name: 'Free wifi' },
    { id: 1, name: 'Free parking' },
    { id: 2, name: 'Free pool' },
    { id: 3, name: 'Air Freshener' },
  ];
  return (
    <Element className="place-details-amenities" name="amenities">
      <h4 className="title">Amenities</h4>
      <div className="amenities">
        {amenities.map(({ id, name }) => {
          const AmenityIcon = amenityIcons[id];
          return (
            <div key={id} className="amenity">
              <AmenityIcon className="amenity-icon" />
              <span className="amenity-name">{name}</span>
            </div>
          );
        })}
      </div>
      <span className="show-all">Show all amenities</span>
    </Element>
  );
};

export default PlaceAmenities;
