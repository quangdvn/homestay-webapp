import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImStarFull, ImStarEmpty, ImStarHalf } from 'react-icons/im';
import { FiEdit } from 'react-icons/fi';
import './styles.scss';

const ListingItem = ({ desc }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="listing-item"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img className="thumbnail" src={desc.thumbnail} alt="thumbnail" />
      <div className="listing-info">
        <div className="address">{desc.address}</div>
        <Link to={`/places/${desc.id}/details`} className="text-reset">
          <div className="title">{desc.name}</div>
        </Link>
        <div className="price">${desc.base_price}/Night - With Extra Fee</div>
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
            {[...Array(5 - Math.ceil(desc.rating)).keys()].map(item => (
              <ImStarEmpty key={item} className="rating-star" />
            ))}
            <span className="rating-verdict">
              {desc.rating >= 4
                ? 'Awesome'
                : desc.rating >= 3
                ? 'Good'
                : desc.rating >= 2
                ? 'Mediocre'
                : desc.rating >= 1
                ? 'Bad'
                : 'No reviews'}{' '}
              {desc.reviews_count ? `(${desc.reviews_count})` : null}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListingItem;
