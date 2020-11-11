import React, { useState } from 'react';
import './styles.scss';
import { DateRangePicker } from 'react-dates';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useFormik } from 'formik';

const HotelSearch = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    adults: 0,
    children: 0,
  });
  const formik = useFormik({
    initialValues: {
      city: '',
      district: '',
    },
    onSubmit: values => {
      console.log(formData);
      console.log(values);
    },
  });
  return (
    <div className="search-hotel">
      <h3>Latest reviews. Lowest prices.</h3>
      <div className="description">
        compares prices from 200+ booking sites to help you find the lowest
        price on the right hotel for you.
      </div>
      <form onSubmit={formik.handleSubmit} className="form-search">
        <div className="city">
          <select onChange={formik.handleChange} value={formik.values.city}>
            <option className="label-select">Select city</option>
            <option value="Hà Nội">Hà Nội </option>
            <option value="Đà Nẵng">Đà Nẵng</option>
            <option value="HCM">HCM</option>
          </select>
        </div>
        <div className="district">
          <select onChange={formik.handleChange} value={formik.values.district}>
            <option className="label-select">Select district</option>
            <option value="Hoàn Kiếm">Hoàn Kiếm</option>
            <option value="Thanh Xuân"> Thanh Xuân</option>
            <option value="Long Biên">Long Biên</option>
          </select>
        </div>
        <div className="form-select-date">
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
        <button className="find-hotel-btn" type="submit">
          Find hotels
        </button>
      </form>
    </div>
  );
};

export default HotelSearch;
