import React, { useState } from 'react';
import { DateRangePicker } from 'react-dates';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './styles.scss';

const BookingForm = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    startDate: null,
    endDate: null,
    adults: 0,
    children: 0,
  });

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div className="booking-form">
      <header className="booking-form-header">
        <h4 className="one-night-price">
          $16.5 <span>/ night</span>
        </h4>
        <a className="contact-hotel" href="/">
          Contact Hotel
        </a>
      </header>
      <form onSubmit={handleSubmit} className="booking-form-main">
        <div className="form-item form-dates">
          <span>Dates</span>
          <DateRangePicker
            startDate={formData.startDate}
            startDateId="start-date-id"
            endDate={formData.endDate}
            endDateId="end-date-id"
            onDatesChange={({ startDate, endDate }) =>
              setFormData({ ...formData, startDate, endDate })
            }
            focusedInput={focusedInput}
            onFocusChange={input => setFocusedInput(input)}
            numberOfMonths={1}
            startDatePlaceholderText="Check In"
            endDatePlaceholderText="Check Out"
          />
        </div>
        <div className="form-item form-guests">
          <span>Guests</span>
          <div className="with-popup">
            <button
              type="button"
              className="show-popup"
              onClick={() => setShowPopup(!showPopup)}
            >
              <span>
                Adults {formData.adults ? `: ${formData.adults}` : null}
              </span>
              <span>ー</span>
              <span>
                Children {formData.children ? `: ${formData.children}` : null}
              </span>
            </button>
            {showPopup && (
              <div className="popup-container">
                <div className="popup">
                  <div className="counter adult">
                    <span>Adult</span>
                    <div className="quantity">
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            adults: Math.max(0, formData.adults - 1),
                          })
                        }
                      >
                        <span className="icon">
                          <FiMinus />
                        </span>
                      </button>
                      <span className="number">{formData.adults}</span>
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            adults: formData.adults + 1,
                          })
                        }
                      >
                        <span className="icon">
                          <FiPlus />
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="counter children">
                    <span>Children</span>
                    <div className="quantity">
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            children: Math.max(0, formData.children - 1),
                          })
                        }
                      >
                        <span className="icon">
                          <FiMinus />
                        </span>
                      </button>
                      <span className="number">{formData.children}</span>
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            children: formData.children + 1,
                          })
                        }
                      >
                        <span className="icon">
                          <FiPlus />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <button type="submit" className="reserve-button">
          Reserve
        </button>
        <span className="not-charge">You won&apos;t be charge yet</span>
        <div className="price-cal">
          <div className="price-item base-price">
            <span className="price-desc">$16.5 x 2 nights</span>
            <span className="number">$33.0</span>
          </div>
          <div className="price-item service-fee">
            <span className="price-desc">Service fee</span>
            <span className="number service">+ $5.45</span>
          </div>
        </div>
        <div className="total-price">
          <span>Total</span>
          <span className="number">$38.45</span>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
