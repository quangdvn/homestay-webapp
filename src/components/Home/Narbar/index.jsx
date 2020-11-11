/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Narbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const menu = [
    { name: 'Hotel', url: '/', exact: true },
    { name: 'Listing', url: '/listing' },
    { name: 'Agent', url: '/profile' },
    { name: 'Pricing', url: '/pricing-plan' },
  ];

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <div className={scrolled ? 'scrolled' : 'narbar'}>
      <div className="left">
        <div className="logo">
          <img
            src={
              scrolled
                ? require('../../../assets/images/user-logo.png')
                : require('../../../assets/images/narbar-logo.png')
            }
            alt=""
          />
        </div>
        {scrolled && (
          <div className="search">
            <input
              type="text"
              placeholder='Search  "Đà Nẵng" '
              className="search-destination"
            />
            <FiSearch size="1em" />
          </div>
        )}
      </div>
      <div className="right">
        <div className="menu-nav">
          {menu.map(element => (
            <NavLink
              to={element.url}
              activeClassName="current"
              exact={element.exact}
            >
              {element.name}
            </NavLink>
          ))}
        </div>
        <div className="sign-in-up-btn">
          <div className="sign-in">Sign in</div>
          <div className="sign-up">Sign up</div>
        </div>
      </div>
    </div>
  );
};

export default Narbar;
