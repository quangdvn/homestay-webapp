import React, { useState, useEffect } from 'react';
import './styles.scss';
import Header from './Header';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  getListHotelByCity,
  clearListHotel,
} from '../../../store/actions/authAction';
import { Instagram } from 'react-content-loader';
import axios from 'axios';
const ExploreDes = () => {
  const renderImage = name => {
    if (name === 'Ha Noi') {
      return <img src="https://i.ibb.co/4PDZqq6/Th-p-R-a-6.jpg" alt="" />;
    } else if (name === 'Da Nang') {
      return <img src="https://i.ibb.co/tJ7BMZT/da-nang.jpg" alt="" />;
    } else {
      return <img src="https://i.ibb.co/84dQSpH/hcm.jpg" alt="" />;
    }
  };
  const [loading, setLoading] = useState(false);
  const [listCity, setListCity] = useState([1, 2, 3]);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleGetListHotelByCity = async id => {
    dispatch(clearListHotel());
    setLoading(true);
    await dispatch(getListHotelByCity(id));
    setLoading(false);
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get('https://homestayy.herokuapp.com/api/v1/location/cities')
      .then(res => {
        setListCity(res.data.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err.message);
        setLoading(false);
      });
  }, []);
  return (
    <div className="explore-destination">
      <Header title="Explore Destinations" />
      <div className="list-city">
        {loading === false
          ? listCity.map(city => (
              <div className="city">
                {renderImage(city.name)}
                <div
                  className="info"
                  onClick={() => {
                    handleGetListHotelByCity(city.id);
                    history.push('/listing');
                  }}
                >
                  <h3 className="name">{city.name}</h3>
                  <span className="number-hotel">{city.total} Hotels</span>
                </div>
              </div>
            ))
          : listCity.map(() => (
              <div className="loading">
                <Instagram width={260} height={370} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default ExploreDes;
