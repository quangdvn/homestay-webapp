/* eslint-disable global-require */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles.scss';

const Footer = () => {
  const { user } = useSelector(state => state.auth);
  return (
    <footer>
      <div className="logo">
        <Link to="/">
          <img src={require('../../../assets/images/user-logo.png')} alt="" />
        </Link>
      </div>
      <div className="menu-nav">
        <Link to="/">Hotel</Link>
        <Link to="/listing">Listing</Link>
        {user.is_host ? <Link to="/hosting">Hosting</Link> : null}
      </div>
      <div className="copy-right">Copyright @ 2020 HomeStay Team.</div>
    </footer>
  );
};
export default Footer;
