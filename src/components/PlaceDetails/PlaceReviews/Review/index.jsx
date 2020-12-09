import React from 'react';
import moment from 'moment';
import { ImStarFull, ImStarEmpty } from 'react-icons/im';
import PlaceImage from '../../../../assets/images/place-image.jpg';
import './styles.scss';

const Review = ({ userName, detail, rating, createdAt }) => {
  return (
    <div className="place-review">
      <div className="review-header">
        <div className="avatar-section">
          <img className="avatar" src={PlaceImage} alt="user avatar" />
          <div className="author-info">
            <span className="author-name">{userName}</span>
            <span className="review-time">
              Reviewed・{moment(createdAt).fromNow()}
            </span>
          </div>
        </div>
        <div className="review-rating">
          {[...Array(rating).keys()].map(item => (
            <ImStarFull key={item} className="rating-star" />
          ))}
          {[...Array(5 - rating).keys()].map(item => (
            <ImStarEmpty key={item} className="rating-star" />
          ))}
        </div>
      </div>
      <p className="review-content">{detail}</p>
    </div>
  );
};

export default Review;
