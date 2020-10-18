import React from 'react';
import { Element } from 'react-scroll';
import { ImStarFull, ImStarHalf } from 'react-icons/im';
import './styles.scss';

const PlaceDesc = () => {
  return (
    <Element name="overview" className="place-details-desc">
      <span className="address">Cau Giay, Hanoi, Vietnam</span>
      <h4 className="title">Awesome Hotel</h4>
      <div className="rating">
        <ImStarFull className="rating-star" />
        <ImStarFull className="rating-star" />
        <ImStarFull className="rating-star" />
        <ImStarFull className="rating-star" />
        <ImStarHalf className="rating-star" />
        <span className="rating-verdict">Awesome (20)</span>
      </div>
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
