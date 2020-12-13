import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Line } from 'rc-progress';
import { Form } from 'reactstrap';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { reqConfig } from '../../utils/requestConfig';
import { notifyError, notifySuccess } from '../../services/alertService';
import HostNavbar from '../Home/HostNavbar';
import BasicInfo from './BasicInfo';
import ChooseImage from './ChooseImage';
import ChooseLocation from './ChooseLocation';
import LoadingIndicator from '../LoadingIndicator';
import cities from '../../constants/city';
import AmenityRule from './AmenityRule';
import {
  DONE_LOADING,
  IS_LOADING,
  ADD_HOSTED,
} from '../../store/actions/types';
import './styles.scss';

const NewHosting = () => {
  let formComponent;
  let footerNav;
  const { id: hostingId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoading } = useSelector(state => state.auth);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    base_price: '10.0',
    extra_fee: '1.0',
    max_guests: 1,
    bedroom_number: 1,
    bathroom_number: 1,
    homestay_photos: [],
    address: '',
    city_id: 1,
    location_id: 1,
    latitude: cities[0].district[0].latitude,
    longitude: cities[0].district[0].longitude,
    amenities: [],
    rules: [],
  });

  useEffect(() => {
    if (hostingId) {
      dispatch({ type: IS_LOADING });
      axios
        .get(
          `https://homestayy.herokuapp.com/api/v1/travellers/places/${hostingId}.json`
        )
        .then(({ data }) => {
          dispatch({ type: DONE_LOADING });
          setFormData({
            name: data.data.name,
            base_price: data.data.base_price,
            extra_fee: data.data.extra_fee,
            max_guests: data.data.max_guests,
            bedroom_number: data.data.bedroom_number,
            bathroom_number: data.data.bathroom_number,
            city_id: data.data.city_id,
            location_id: data.data.location_id,
            address: data.data.address,
            latitude: data.data.latitude,
            longitude: data.data.longitude,
            amenities: data.data.amenities.map(item => item.id),
            rules: data.data.rules.map(item => item.id),
          });
        })
        .catch(err => {
          dispatch({ type: DONE_LOADING });
          console.log(err.response);
          notifyError('Server error');
          history.push('/hosting');
        });
    }
  }, [hostingId, dispatch, history]);

  const handleSubmit = event => {
    event.preventDefault();
    if (step === 4) {
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('description', formData.description);
      submitData.append('base_price', formData.base_price);
      submitData.append('extra_fee', formData.extra_fee);
      submitData.append('max_guests', formData.max_guests);
      submitData.append('bedroom_number', formData.bedroom_number);
      submitData.append('bathroom_number', formData.bathroom_number);
      submitData.append('location_id', formData.location_id);
      submitData.append('address', formData.address);
      submitData.append('latitude', formData.latitude);
      submitData.append('longitude', formData.longitude);
      submitData.append('thumbnail', formData.thumbnail);
      if (!hostingId) {
        formData.homestay_photos.forEach(item =>
          submitData.append('homestay_photos[]', item)
        );
        formData.amenities.forEach(item =>
          submitData.append('amenities[]', item)
        );
        formData.rules.forEach(item => submitData.append('rules[]', item));
      }
      dispatch({ type: IS_LOADING });
      axios
        .post(
          'https://homestayy.herokuapp.com/api/v1/hosts/places',
          submitData,
          reqConfig(true)
        )
        .then(({ data }) => {
          history.push('/hosting');
          notifySuccess('Hotel created!');
          dispatch({ type: ADD_HOSTED, payload: data.data.id });
          dispatch({ type: DONE_LOADING });
        })
        .catch(err => {
          notifyError(err.response.data.messages[0]);
          dispatch({ type: DONE_LOADING });
        });
    } else if (hostingId && step === 1) {
      setStep(step + 2);
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
          key="notSubmit"
          onClick={() => setStep(step - 1)}
        >
          <RiArrowLeftSLine className="arrow" />
          <span>Back</span>
        </button>
        <button
          type="submit"
          className="next-step"
          key="toSubmit"
          disabled={!formData.thumbnail || !formData.homestay_photos.length}
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
          key="notSubmit"
          className="prev-step"
          onClick={() => setStep(step - 1)}
        >
          <RiArrowLeftSLine className="arrow" />
          <span>Back</span>
        </button>
        <button type="submit" key="toSubmit" className="next-step">
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
          key="notSubmit"
          className="prev-step"
          onClick={() => setStep(step - 1)}
        >
          <RiArrowLeftSLine className="arrow" />
          <span>Back</span>
        </button>
        <button type="submit" key="toSubmit" className="next-step">
          Submit
        </button>
      </div>
    );
  }

  return isLoading ? (
    <LoadingIndicator isHost />
  ) : (
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
