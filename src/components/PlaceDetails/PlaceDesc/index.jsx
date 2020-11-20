import React from 'react';
import { Element } from 'react-scroll';
import { ImStarFull, ImStarHalf } from 'react-icons/im';
import './styles.scss';

const PlaceDesc = ({ desc }) => {
  return (
    <Element name="overview" className="place-details-desc">
      <span className="address">{desc.location}</span>
      <h4 className="title">{desc.name}</h4>
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
      <p className="place-host">
        <strong>Hosted by {desc.host}</strong>
        <br />
        <span>
          {desc.guests} guests・{desc.bedroom} bedrooms・{desc.bathroom} baths
        </span>
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, eius
        architecto dolore veniam asperiores, obcaecati quaerat mollitia magni
        incidunt aperiam consequatur aut? Quisquam illo saepe sequi accusantium
        earum? Tempora, ratione.
      </p>
      <span className="read-more">Read more about the hotel</span>
    </Element>
  );
};

export default PlaceDesc;
