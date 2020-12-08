import React from 'react';
import { FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './styles.scss';

const BasicInfo = ({ formData, setFormData }) => {
  return (
    <div className="basic-info">
      <h4>Step 1: Basic information</h4>
      <Row form>
        <Col md={6} className="pr-4">
          <FormGroup>
            <Label className="review-label" for="hotelName">
              Hotel Name
            </Label>
            <Input
              className="review-input text-input"
              type="text"
              name="hotelName"
              id="hotelName"
              required
              value={formData.name}
              onChange={event =>
                setFormData({ ...formData, name: event.target.value })
              }
              placeholder="Write your hotel name here"
            />
          </FormGroup>
        </Col>
        <Col md={3} className="pr-4">
          <FormGroup>
            <Label className="review-label" for="basePrice">
              Price Per Night (USD)
            </Label>
            <Input
              className="review-input text-input"
              type="number"
              step="0.01"
              min="0.01"
              name="basePrice"
              id="basePrice"
              placeholder="00.00"
              value={formData.base_price.toFixed(2)}
              onChange={event =>
                setFormData({
                  ...formData,
                  base_price: parseFloat(event.target.value),
                })
              }
            />
          </FormGroup>
        </Col>
        <Col md={3} className="pr-4">
          <FormGroup>
            <Label className="review-label" for="price">
              Service Fee (USD)
            </Label>
            <Input
              className="review-input text-input"
              type="number"
              name="extraFee"
              id="extraFee"
              step="0.01"
              min="0.01"
              placeholder="00.00"
              value={formData.extra_fee.toFixed(2)}
              onChange={event =>
                setFormData({
                  ...formData,
                  extra_fee: parseFloat(event.target.value),
                })
              }
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup className="mt-4">
        <Label className="review-label" for="hotelDescription">
          Hotel Description
        </Label>
        <Input
          className="review-input"
          type="textarea"
          rows="5"
          required
          name="hotelDescription"
          id="hotelDescription"
          value={formData.description}
          onChange={event =>
            setFormData({ ...formData, description: event.target.value })
          }
          placeholder="Tell people about your hotel, room, location & amenities?"
        />
      </FormGroup>
      <FormGroup className="counter">
        <Label className="review-label" for="hotelDescription">
          How many guests can your hotel accomodate?
        </Label>
        <div className="quantity">
          <button
            type="button"
            onClick={() =>
              setFormData({
                ...formData,
                max_guests: Math.max(1, formData.max_guests - 1),
              })
            }
          >
            <span className="icon">
              <FiMinus />
            </span>
          </button>
          <span className="number">{formData.max_guests}</span>
          <button
            type="button"
            onClick={() =>
              setFormData({
                ...formData,
                max_guests: formData.max_guests + 1,
              })
            }
          >
            <span className="icon">
              <FiPlus />
            </span>
          </button>
        </div>
      </FormGroup>
      <FormGroup className="counter">
        <Label className="review-label" for="hotelDescription">
          How many bedrooms can guests use?
        </Label>
        <div className="quantity">
          <button
            type="button"
            onClick={() =>
              setFormData({
                ...formData,
                bedroom_number: Math.max(1, formData.bedroom_number - 1),
              })
            }
          >
            <span className="icon">
              <FiMinus />
            </span>
          </button>
          <span className="number">{formData.bedroom_number}</span>
          <button
            type="button"
            onClick={() =>
              setFormData({
                ...formData,
                bedroom_number: formData.bedroom_number + 1,
              })
            }
          >
            <span className="icon">
              <FiPlus />
            </span>
          </button>
        </div>
      </FormGroup>
      <FormGroup className="counter">
        <Label className="review-label" for="hotelDescription">
          How many bathrooms can guests use?
        </Label>
        <div className="quantity">
          <button
            type="button"
            onClick={() =>
              setFormData({
                ...formData,
                bathroom_number: Math.max(1, formData.bathroom_number - 1),
              })
            }
          >
            <span className="icon">
              <FiMinus />
            </span>
          </button>
          <span className="number">{formData.bathroom_number}</span>
          <button
            type="button"
            onClick={() =>
              setFormData({
                ...formData,
                bathroom_number: formData.bathroom_number + 1,
              })
            }
          >
            <span className="icon">
              <FiPlus />
            </span>
          </button>
        </div>
      </FormGroup>
    </div>
  );
};

export default BasicInfo;
