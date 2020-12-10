import React from 'react';
import './styles.scss';
import Header from './Header';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  getListHotelByCity,
  clearListHotel,
} from '../../../store/actions/authAction';
import ContentLoader from 'react-content-loader';
const ExploreDes = ({ listCity, loading }) => {
  const renderImage = name => {
    if (name === 'Ha Noi') {
      return <img src="https://i.ibb.co/4PDZqq6/Th-p-R-a-6.jpg" alt="" />;
    } else if (name === 'Da Nang') {
      return <img src="https://i.ibb.co/tJ7BMZT/da-nang.jpg" alt="" />;
    } else {
      return <img src="https://i.ibb.co/84dQSpH/hcm.jpg" alt="" />;
    }
  };
  const history = useHistory();
  const dispatch = useDispatch();
  const handleGetListHotelByCity = async id => {
    dispatch(clearListHotel());
    await dispatch(getListHotelByCity(id));
  };
  return (
    <div className="explore-destination">
      <Header title="Explore Destinations" />
      <div className="list-city">
        {loading ? (
          <div className="city">
            <ContentLoader viewBox="0 0 380 70">
              <rect x="80" y="17" rx="4" ry="4" width="260" height="370" />
            </ContentLoader>
            <ContentLoader viewBox="0 0 380 70">
              <rect x="80" y="17" rx="4" ry="4" width="260" height="370" />
            </ContentLoader>
            <ContentLoader viewBox="0 0 380 70">
              <rect x="80" y="17" rx="4" ry="4" width="260" height="370" />
            </ContentLoader>
          </div>
        ) : undefined}
        {listCity &&listCity.map(city => (
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
        ))}
      </div>
    </div>
  );
};

export default ExploreDes;
