import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
const Footer = () => {
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
        <Link to="/agent">Agent</Link>
        <Link to="/pricing-plan">Pricing</Link>
      </div>
      <div className="copy-right">Copyright @ 2020 RedQ, Inc.</div>
    </footer>
  );
};
export default Footer;
