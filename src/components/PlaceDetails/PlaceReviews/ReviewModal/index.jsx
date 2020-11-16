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
import './styles.scss';

const ReviewModal = ({ isOpen, toggle }) => {
  const [formData, setFormData] = useState({
    rating: 0,
    title: '',
    content: '',
  });

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
      <Form className="review-form">
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
          <Label className="review-label" for="title">
            Title of your review
          </Label>
          <Input
            className="review-input"
            type="text"
            name="title"
            id="title"
            placeholder="Summarize your visit or highlight an interesting detail"
          />
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
            placeholder="Tell people about your experience: your room, location, amenities?"
          />
        </FormGroup>
        <Button className="submit-review">Submit your review</Button>
      </Form>
    </Modal>
  );
};

export default ReviewModal;
