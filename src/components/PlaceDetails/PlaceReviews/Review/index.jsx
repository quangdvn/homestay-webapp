import React from 'react';
import { ImStarFull, ImStarEmpty } from 'react-icons/im';
import PlaceImage from '../../../../assets/images/place-image.jpg';
import './styles.scss';

const Review = () => {
  return (
    <div className="place-review">
      <div className="review-header">
        <div className="avatar-section">
          <img className="avatar" src={PlaceImage} alt="user avatar" />
          <div className="author-info">
            <span className="author-name">Nguyễn Anh Khoa</span>
            <span className="review-time">Reviewed・2 years ago</span>
          </div>
        </div>
        <div className="review-rating">
          <ImStarFull className="rating-star" />
          <ImStarFull className="rating-star" />
          <ImStarFull className="rating-star" />
          <ImStarFull className="rating-star" />
          <ImStarEmpty className="rating-star" />
        </div>
      </div>
      <div className="review-title">
        Qui unde exercitationem quis nulla ut earum qui ea sit.
      </div>
      <p className="review-content">
        Distinctio at aut perspiciatis dolores. Sed sit ut labore nostrum. Est
        amet repellat dolore maiores id eligendi eveniet autem praesentium.
        Porro illo perspiciatis repellat atque laborum voluptatem tempore nobis
        odio. Fugiat et molestias ab id temporibus dignissimos culpa fugit.
        Nulla magni iusto dolores at.
      </p>
    </div>
  );
};

export default Review;
