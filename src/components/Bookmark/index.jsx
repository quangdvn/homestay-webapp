import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { reqConfig } from '../../utils/requestConfig';
import Narbar from '../Home/Narbar';
import TopHotel from '../Home/TopHotel';
import LoadingIndicator from '../LoadingIndicator';
import { notifyError } from '../../services/alertService';
import './styles.scss';

const Bookmark = () => {
  const { listBookMark } = useSelector(state => state.auth);
  const history = useHistory();
  const location = useLocation();
  const [tab, setTab] = useState(location.state?.bookingTab ? 2 : 1);
  const [loading, setLoading] = useState(true);
  const [booked, setBooked] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        'https://homestayy.herokuapp.com/api/v1/travellers/bookings',
        reqConfig()
      )
      .then(({ data }) => {
        setBooked(data.data.bookings);
        setLoading(false);
      })
      .catch(() => {
        history.push('/');
        notifyError('Something wrong has happed when fetching data.');
      });
  }, [history]);

  return listBookMark && !loading ? (
    <div className="my-profile">
      <Narbar />
      <div className="profile-navbar">
        <div className="nav-items">
          <button
            type="button"
            className={`nav-item ${tab === 1 ? 'active' : ''}`}
            onClick={() => setTab(1)}
          >
            Bookmarks
          </button>
          <button
            type="button"
            className={`nav-item ${tab === 2 ? 'active' : ''}`}
            onClick={() => setTab(2)}
          >
            Booked places
          </button>
        </div>
      </div>
      <div className="margin-top" />
      {tab === 1 ? (
        <>
          {!listBookMark.length ? (
            <div className="empty">
              You haven&apos;t bookmarked any place yet!
            </div>
          ) : (
            <TopHotel
              listHotel={listBookMark}
              title={`Your bookmarks (${listBookMark.length})`}
              loading={false}
            />
          )}
        </>
      ) : (
        <>
          {!booked.length ? (
            <div className="empty">You haven&apos;t booked any place yet!</div>
          ) : (
            <TopHotel
              listHotel={booked}
              title={`Your booked places (${booked.length})`}
              loading={false}
            />
          )}
        </>
      )}
    </div>
  ) : (
    <LoadingIndicator />
  );
};
export default Bookmark;
