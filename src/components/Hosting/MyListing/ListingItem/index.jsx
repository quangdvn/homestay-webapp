import React, { useState } from 'react';
import { ImStarFull, ImStarHalf } from 'react-icons/im';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PlaceImage from '../../../../assets/images/place-image.jpg';
import './styles.scss';

const ListingItem = () => {
  const [hover, setHover] = useState(false);
  const desc = {
    id: 1,
    rating: 4,
    reviewCount: 5,
  };
  return (
    <div
      className="listing-item"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img className="thumbnail" src={PlaceImage} alt="thumbnail" />
      <div className="listing-info">
        <div className="address">179 Vinh Hung, Hoang Mai</div>
        <div className="title">My New Hotel</div>
        <div className="price">$20/Night - With Extra Fee</div>
        {hover ? (
          <Link to={`/places/${desc.id}/edit`} className="to-edit">
            <FiEdit />
            <span>Edit details</span>
          </Link>
        ) : (
          <div className="rating">
            {[...Array(Math.floor(desc.rating)).keys()].map(item => (
              <ImStarFull key={item} className="rating-star" />
            ))}
            {Math.round(desc.rating) > desc.rating && (
              <ImStarHalf className="rating-star" />
            )}
            <span className="rating-verdict">
              {desc.rating >= 4
                ? 'Awesome'
                : desc.rating >= 3
                ? 'Good'
                : desc.rating >= 2
                ? 'Mediocre'
                : 'Bad'}{' '}
              ({desc.reviewCount})
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListingItem;
