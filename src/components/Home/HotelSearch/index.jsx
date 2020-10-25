import React, { useState } from 'react';
import './styles.scss';
import { DateRangePicker } from 'react-dates';
const HotelSearch = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState('startDate');
  const onDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };
  return (
    <div className="search-hotel">
      <h3>Latest reviews. Lowest prices.</h3>
      <div className="description">
        compares prices from 200+ booking sites to help you find the lowest
        price on the right hotel for you.
      </div>
      <div className="form-search">
        <div className="city">
          <select>
            <option className="label-select">Select city</option>
            <option value="Hà Nội">Hà Nội </option>
            <option value="Đà Nẵng">Đà Nẵng</option>
            <option value="HCM">HCM</option>
          </select>
        </div>
        <div className="district">
          <select>
            <option className="label-select">Select district</option>
            <option value="Hoàn Kiếm">Hoàn Kiếm</option>
            <option value="Thanh Xuân"> Thanh Xuân</option>
            <option value="Long Biên">Long Biên</option>
          </select>
        </div>
        <div className="form-select-date">
          <DateRangePicker
            endDate={endDate}
            endDateId="endDate"
            focusedInput={focusedInput.focusedInput}
            isOutsideRange={() => null}
            onDatesChange={onDatesChange}
            onFocusChange={focusedInput => setFocusedInput({ focusedInput })}
            startDate={startDate}
            startDateId="startDate"
          />
        </div>
        <div className="room-guest-select">
          <div className="room-guest">
            <div className="guest">
              <span>Guest:</span>
              <div> 9</div>
            </div>
            <div className="guest">
              <span>Guest:</span>
              <div> 9</div>
            </div>
          </div>
        <div id = "room-guest-popup">
      <div className = "room">
        <label > Room</label>
        
      </div>
        </div>
        </div>

        <div className="find-hotel-btn">Find hotels</div>
      </div>
    </div>
  );
};

export default HotelSearch;
