import React, { useState } from 'react';
import { Element } from 'react-scroll';
import {
  FaWifi,
  FaCarAlt,
  FaFireExtinguisher,
  FaTv,
  FaBath,
  FaChair,
  FaAirFreshener,
  FaGift,
  FaFireAlt,
  FaWater,
  FaShower,
  FaDoorOpen,
} from 'react-icons/fa';
import { GiHanger, GiKnifeFork } from 'react-icons/gi';
import { CgSmartHomeHeat, CgSmartHomeWashMachine } from 'react-icons/cg';
import {
  RiNetflixFill,
  RiTShirtAirLine,
  RiFridgeLine,
  RiAlarmWarningFill,
} from 'react-icons/ri';
import { BiDish, BiBath, BiFirstAid } from 'react-icons/bi';
import { FiWind } from 'react-icons/fi';
import { MdKitchen } from 'react-icons/md';
import { GrElevator } from 'react-icons/gr';
import './styles.scss';

const allAmenities = [
  { name: 'Heating', icon: CgSmartHomeHeat },
  { name: 'Hangers', icon: GiHanger },
  { name: 'Washer', icon: CgSmartHomeWashMachine },
  { name: 'TV', icon: FaTv },
  { name: 'Netflix', icon: RiNetflixFill },
  { name: 'Private Bathroom', icon: FaBath },
  { name: 'Private Living Room', icon: FaChair },
  { name: 'Iron', icon: RiTShirtAirLine },
  { name: 'Air conditioning', icon: FaAirFreshener },
  { name: 'Free WiFi', icon: FaWifi },
  { name: 'A welcome gift on arrival', icon: FaGift },
  { name: 'Kitchen', icon: MdKitchen },
  { name: 'Dishes and Silverware', icon: BiDish },
  { name: 'Cooking basics', icon: GiKnifeFork },
  { name: 'Dish Washer', icon: CgSmartHomeWashMachine },
  { name: 'Stove', icon: FaFireAlt },
  { name: 'Fridge', icon: RiFridgeLine },
  { name: 'Hot Water', icon: FaWater },
  { name: 'Hair Dryer', icon: FiWind },
  { name: 'Shampoo', icon: FaShower },
  { name: 'Bathtub', icon: BiBath },
  { name: 'Private Entrance', icon: FaDoorOpen },
  { name: 'Free parking', icon: FaCarAlt },
  { name: 'Elevator', icon: GrElevator },
  { name: 'First Aid Kit', icon: BiFirstAid },
  { name: 'Smoke Alarm', icon: RiAlarmWarningFill },
  { name: 'Fire extinguisher', icon: FaFireExtinguisher },
];

const PlaceAmenities = ({ amenities, amenitiesCount }) => {
  const [showMore, setShowMore] = useState(false);
  const showedAmenities = showMore ? amenities : amenities.slice(0, 4);

  return (
    <Element className="place-details-amenities" name="amenities">
      <h4 className="title">Amenities</h4>
      <div className="amenities">
        {showedAmenities.map(({ name }) => {
          const AmenityIcon = allAmenities.find(item => item.name === name)
            .icon;
          return (
            <div key={name} className="amenity">
              <AmenityIcon className="amenity-icon" />
              <span className="amenity-name">{name}</span>
            </div>
          );
        })}
      </div>
      <button
        type="button"
        className="show-all"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore
          ? 'Show less amenities'
          : `Show all ${amenitiesCount} amenities`}
      </button>
    </Element>
  );
};

export default PlaceAmenities;
