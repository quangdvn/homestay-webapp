import React, { useEffect } from 'react';
import Narbar from '../Home/Narbar';
import TopHotel from '../Home/TopHotel';
import Footer from '../Home/Footer';
import { useSelector, useDispatch } from 'react-redux';
import LoadingIndicator from '../LoadingIndicator';
import './styles.scss';
const Bookmark = () => {
  const { listBookMark } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(listBookMark);
  }, [listBookMark, dispatch]);
  return listBookMark ? (
    <div>
      <Narbar />
      <div style={{ height: 64 }}></div>
      <TopHotel listHotel={listBookMark} title="List Hotel: " loading={false} />
      <Footer />
    </div>
  ) : (
    <LoadingIndicator />
  );
};
export default Bookmark;
