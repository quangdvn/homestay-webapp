import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { ImStarFull, ImStarHalf } from 'react-icons/im';
import Review from './Review';
import ReviewModal from './ReviewModal';
import './styles.scss';

const PlaceReviews = ({ reviews, desc }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggle = () => setModalOpen(!modalOpen);

  return (
    <>
      <ReviewModal isOpen={modalOpen} toggle={toggle} />
      <Element className="place-details-reviews" name="reviews">
        <div className="head-section">
          <div className="title">
            <h4>{desc.reviewCount} reviews</h4>
            <div className="rating">
              {[...Array(Math.floor(desc.rating)).keys()].map(item => (
                <ImStarFull key={item} className="rating-star" />
              ))}
              {Math.round(desc.rating) > desc.rating && (
                <ImStarHalf className="rating-star" />
              )}
              <span className="number">{desc.rating}</span>
            </div>
          </div>
          <button type="button" className="write-review" onClick={toggle}>
            Write a review
          </button>
        </div>
        {reviews.map(item => (
          <Review
            key={item.user_name}
            userName={item.user_name}
            detail={item.detail}
            rating={item.rating}
            createdAt={item.created_at}
          />
        ))}
      </Element>
    </>
  );
};

export default PlaceReviews;
