import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Element } from 'react-scroll';
import { ImStarFull, ImStarHalf, ImStarEmpty } from 'react-icons/im';
import Review from './Review';
import ReviewModal from './ReviewModal';
import './styles.scss';

const PlaceReviews = ({ reviews, desc, placeId, setReviews }) => {
  const user = useSelector(state => state.auth?.user);
  const [modalOpen, setModalOpen] = useState(false);
  const history = useHistory();

  const toggle = () => {
    if (!localStorage.getItem('token')) {
      history.push('/sign-in');
    } else {
      setModalOpen(!modalOpen);
    }
  };

  const addReview = data => {
    setReviews([{ ...data, user_name: user?.user_name }, ...reviews]);
  };

  const replaceReview = (reviewId, data) => {
    setReviews(
      reviews.map(item => {
        if (item.id === reviewId) {
          return { ...data, user_name: user?.user_name };
        }
        return item;
      })
    );
  };

  return (
    <>
      <ReviewModal
        isOpen={modalOpen}
        toggle={toggle}
        placeId={placeId}
        addReview={addReview}
        replaceReview={replaceReview}
        userReview={reviews.filter(item => item.user_id === user?.id).pop()}
      />
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
              {[...Array(5 - Math.ceil(desc.rating)).keys()].map(item => (
                <ImStarEmpty key={item} className="rating-star" />
              ))}
              {desc.rating ? (
                <span className="number">{desc.rating}</span>
              ) : null}
            </div>
          </div>
          <button type="button" className="write-review" onClick={toggle}>
            Write a review
          </button>
        </div>
        {reviews
          .sort((a, b) => (a.created_at > b.created_at ? -1 : 1))
          .map(item => (
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
