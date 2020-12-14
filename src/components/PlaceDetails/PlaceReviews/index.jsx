import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Element } from 'react-scroll';
import { ImStarFull, ImStarHalf, ImStarEmpty } from 'react-icons/im';
import Review from './Review';
import ReviewModal from './ReviewModal';
import './styles.scss';

const PlaceReviews = ({
  reviews,
  desc,
  placeId,
  setReviews,
  setDesc,
  isHosted,
}) => {
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
    setReviews([{ ...data, user_name: user?.full_name }, ...reviews]);
  };

  const replaceReview = (reviewId, data) => {
    setReviews(
      reviews.map(item => {
        if (item.id === reviewId) {
          return { ...data, user_name: user?.full_name };
        }
        return item;
      })
    );
  };

  useEffect(() => {
    let sum = 0;
    reviews.forEach(item => (sum += item.rating));
    if (reviews.length) {
      setDesc({
        ...desc,
        reviewCount: reviews.length,
        rating: sum / reviews.length,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(reviews)]);

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
                <span className="number">{desc.rating.toFixed(1)}</span>
              ) : null}
            </div>
          </div>
          {isHosted ? null : (
            <button type="button" className="write-review" onClick={toggle}>
              {reviews.filter(item => item.user_id === user?.id).length
                ? 'Update your review'
                : 'Write your review'}
            </button>
          )}
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
