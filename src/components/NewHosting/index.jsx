import React, { useState } from 'react';
import { Line } from 'rc-progress';
import { Form } from 'reactstrap';
import { RiArrowLeftSLine } from 'react-icons/ri';
import HostNavbar from '../Home/HostNavbar';
import BasicInfo from './BasicInfo';
import ChooseImage from './ChooseImage';
import ChooseLocation from './ChooseLocation';
import cities from '../../constants/city';
import './styles.scss';
import AmenityRule from './AmenityRule';

const NewHosting = () => {
  let formComponent;
  let footerNav;
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    base_price: 1.0,
    extra_fee: 1.0,
    max_guests: 1,
    bedroom_number: 1,
    bathroom_number: 1,
    photos: [],
    address: '',
    city_id: 1,
    location_id: 1,
    latitude: cities[0].district[0].latitude,
    longitude: cities[0].district[0].longitude,
    amenities: [],
    rules: [],
  });

  const handleSubmit = event => {
    event.preventDefault();
    if (step === 4) {
      console.log(formData);
    } else {
      setStep(step + 1);
    }
  };

  if (step === 1) {
    formComponent = <BasicInfo formData={formData} setFormData={setFormData} />;
    footerNav = (
      <div className="inner-wrapper">
        <button type="submit" className="next-step">
          Next
        </button>
      </div>
    );
  } else if (step === 2) {
    formComponent = (
      <ChooseImage formData={formData} setFormData={setFormData} />
    );
    footerNav = (
      <div className="inner-wrapper flex">
        <button
          type="button"
          className="prev-step"
          onClick={() => setStep(step - 1)}
        >
          <RiArrowLeftSLine className="arrow" />
          <span>Back</span>
        </button>
        <button
          type="submit"
          className="next-step"
          disabled={!formData.thumbnail || !formData.photos.length}
        >
          Next
        </button>
      </div>
    );
  } else if (step === 3) {
    formComponent = (
      <ChooseLocation formData={formData} setFormData={setFormData} />
    );
    footerNav = (
      <div className="inner-wrapper flex">
        <button
          type="button"
          className="prev-step"
          onClick={() => setStep(step - 1)}
        >
          <RiArrowLeftSLine className="arrow" />
          <span>Back</span>
        </button>
        <button type="submit" className="next-step">
          Next
        </button>
      </div>
    );
  } else {
    formComponent = (
      <AmenityRule formData={formData} setFormData={setFormData} />
    );
    footerNav = (
      <div className="inner-wrapper flex">
        <button
          type="button"
          className="prev-step"
          onClick={() => setStep(step - 1)}
        >
          <RiArrowLeftSLine className="arrow" />
          <span>Back</span>
        </button>
        <button type="submit" className="next-step">
          Submit
        </button>
      </div>
    );
  }

  return (
    <div className="new-hosting">
      <HostNavbar isFixed />
      <Line
        className="progress-bar"
        percent={25 * step}
        strokeColor="#1B858A"
        strokeWidth={0.6}
      />
      <Form className="hosting-form" onSubmit={handleSubmit}>
        <div className="form-container">{formComponent}</div>
        <div className="footer-nav">{footerNav}</div>
      </Form>
    </div>
  );
};

export default NewHosting;
