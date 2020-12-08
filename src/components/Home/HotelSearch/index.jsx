import React, { useState } from 'react';
import './styles.scss';
import { DateRangePicker } from 'react-dates';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useFormik } from 'formik';
import axios from 'axios';
import city from '../../../constants/city';
import { useDispatch } from 'react-redux';
import { getSearchHotel } from '../../../store/actions/authAction';
const HotelSearch = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    guests: 0,
  });
  const formik = useFormik({
    initialValues: {
      city_id: null,
      district_id: null,
    },
    onSubmit: values => {
      let data = {
        ...values,
        check_in_date: formData.startDate.format('YYYY-MM-DD'),
        check_out_date: formData.endDate.format('YYYY-MM-DD'),
        guests: formData.guests,
        city_id: parseInt(values.city_id),
        district_id: parseInt(values.district_id),
      };
      handleSearchHotel(data);
    },
  });
  const dispatch = useDispatch();
  const handleSearchHotel = data => {
    console.log(data);
    axios

      .get(
        'https://homestayy.herokuapp.com/api/v1/travellers/places',
        {
          'Content-Type': 'application/json',
        },
        data
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err.response.data));

    //await dispatch(getSearchHotel(data));
  };
  return (
    <div className="search-hotel">
      <h3>Latest reviews. Lowest prices.</h3>
      <div className="description">
        compares prices from 200+ booking sites to help you find the lowest
        price on the right hotel for you.
      </div>
      <form onSubmit={formik.handleSubmit} className="form-search">
        <div className="city">
          <select
            onChange={formik.handleChange}
            value={formik.values.city_id}
            id="city_id"
            name="city_id"
            className="mdb-select md-form colorful-select dropdown-primary"
          >
            <option className="label-select">Select city</option>
            {city.map(data => (
              <option value={data.city_id}>{data.name}</option>
            ))}
          </select>
        </div>
        <div className="district">
          <select
            onChange={formik.handleChange}
            value={formik.values.district_id}
            id="district_id"
            name="district_id"
            className="mdb-select md-form colorful-select dropdown-primary"
          >
            <option className="label-select">Select district</option>
            {formik.values.city_id &&
              city
                .find(
                  element => element.city_id === parseInt(formik.values.city_id)
                )
                .district.map(data => (
                  <option value={data.district_id}>{data.name}</option>
                ))}
          </select>
        </div>
        <div className="form-dates">
          <DateRangePicker
            startDate={formData.startDate}
            startDateId="start-date-id"
            endDate={formData.endDate}
            endDateId="end-date-id"
            onDatesChange={({ startDate, endDate }) =>
              setFormData({
                ...formData,
                startDate,
                endDate,
              })
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
                Guests {formData.guests ? `: ${formData.guests}` : `: 0`}
              </span>
            </button>
            {showPopup && (
              <div className="popup-container">
                <div className="popup">
                  <div className="counter adult">
                    <span>Guest</span>
                    <div className="quantity">
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            guests: Math.max(0, formData.guests - 1),
                          })
                        }
                      >
                        <span className="icon">
                          <FiMinus />
                        </span>
                      </button>
                      <span className="number">{formData.guests}</span>
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            guests: formData.guests + 1,
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
