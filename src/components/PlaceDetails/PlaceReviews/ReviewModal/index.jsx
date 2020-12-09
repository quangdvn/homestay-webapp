import React, { useState } from 'react';
import {
  Modal,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import { reqConfig } from '../../../../utils/requestConfig';
import { notifyError, notifySuccess } from '../../../../services/alertService';
import './styles.scss';

const ReviewModal = ({
  isOpen,
  toggle,
  placeId,
  addReview,
  replaceReview,
  userReview,
}) => {
  const [formData, setFormData] = useState({
    rating: userReview ? userReview.rating : 0,
    content: userReview ? userReview.detail : '',
  });

  const isDisabled = () => {
    return !formData.rating || !formData.content;
  };

  const postReview = () => {
    axios
      .post(
        'https://homestayy.herokuapp.com/api/v1/travellers/reviews',
        {
          place_id: placeId,
          detail: formData.content,
          rating: formData.rating,
        },
        reqConfig()
      )
      .then(({ data }) => {
        notifySuccess('Review added!');
        addReview(data.data);
      })
      .catch(err => {
        notifyError(err.response.data.message);
      });
  };

  const editReview = reviewId => {
    axios
      .patch(
        `https://homestayy.herokuapp.com/api/v1/travellers/reviews/${reviewId}`,
        {
          detail: formData.content,
          rating: formData.rating,
        },
        reqConfig()
      )
      .then(({ data }) => {
        notifySuccess('Review updated!');
        replaceReview(reviewId, data.data);
      })
      .catch(err => {
        notifyError(err.response.data.message);
      });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (userReview) {
      editReview(userReview.id);
    } else {
      postReview();
    }
  };

  return (
    <Modal
      id="review-modal"
      isOpen={isOpen}
      toggle={toggle}
      modalTransition={{
        timeout: {
          enter: 0,
          exit: 100,
        },
      }}
    >
      <ModalHeader toggle={toggle} />
      <h4 className="write-review">Write your review here</h4>
      <Form className="review-form" onSubmit={handleSubmit}>
        <FormGroup>
          <Label className="review-label" for="rating">
            Overall Rating
          </Label>
          <div className="rating">
            {[5, 4, 3, 2, 1].map(value => (
              <FaStar
                key={value}
                className={`icon ${formData.rating >= value ? 'active' : ''}`}
                onClick={() => setFormData({ ...formData, rating: value })}
              />
            ))}
          </div>
        </FormGroup>
        <FormGroup>
          <Label className="review-label" for="content">
            Details of your review
          </Label>
          <Input
            className="review-input"
            type="textarea"
            rows="5"
            name="content"
            id="content"
            value={formData.content}
            onChange={event =>
              setFormData({ ...formData, content: event.target.value })
            }
            placeholder="Tell people about your experience: your room, location, amenities?"
          />
        </FormGroup>
        <Button
          className={`submit-review ${isDisabled() ? 'disabled' : ''}`}
          disabled={isDisabled()}
        >
          Submit your review
        </Button>
      </Form>
    </Modal>
  );
};

export default ReviewModal;
