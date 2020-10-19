import React, { useState } from 'react';
import './styles.scss';
const Narbar = () => {
  return (
    <header>
      <div className="left">
        <div className="logo">
          <img src={require('../../assets/images/user-logo.png')} alt="" />
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
          <img src="" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="menu-nav">
          <a href="#">Hotel</a>
          <a href="#">Listing</a>
          <a href="#">Agent</a>
          <a href="#">Pricing</a>
        </div>
        <div className="sign-in-up-btn">
          <div className="sign-in">Sign in</div>
          <div className="sign-up">Sign up</div>
        </div>
      </div>
    </header>
  );
};

export default Narbar;
