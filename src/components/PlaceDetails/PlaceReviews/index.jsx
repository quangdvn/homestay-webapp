import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { ImStarFull, ImStarHalf } from 'react-icons/im';
import Review from './Review';
import ReviewModal from './ReviewModal';
import './styles.scss';

const PlaceReviews = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggle = () => setModalOpen(!modalOpen);

  return (
    <>
      <ReviewModal isOpen={modalOpen} toggle={toggle} />
      <Element className="place-details-reviews" name="reviews">
        <div className="head-section">
          <div className="title">
            <h4>35 reviews</h4>
            <div className="rating">
              <ImStarFull className="rating-star" />
              <ImStarFull className="rating-star" />
              <ImStarFull className="rating-star" />
              <ImStarFull className="rating-star" />
              <ImStarHalf className="rating-star" />
              <span className="number">(4.6)</span>
            </div>
          </div>
          <button type="button" className="write-review" onClick={toggle}>
            Write a review
          </button>
        </div>
        <Review />
        <Review />
        <Review />
        <Review />
      </Element>
    </>
  );
};

export default PlaceReviews;
