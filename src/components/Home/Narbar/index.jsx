/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import { useLocation, NavLink, Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../../store/actions/authAction';

const Narbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(location.pathname !== '/');
  const dispatch = useDispatch();
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
    { name: 'Hosting', url: '/hosting' },
    { name: 'Profile', url: '/profile' },
  ];
  const { user, isLogin } = useSelector(state => state.auth);

  useEffect(() => {
    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
    }
  }, [user.full_name]);
  return (
    <div className={scrolled ? 'scrolled' : 'narbar'}>
      <div className="left">
        <Link className="logo" to="/">
          <img
            src={
              scrolled
                ? require('../../../assets/images/user-logo.png')
                : require('../../../assets/images/narbar-logo.png')
            }
            alt=""
          />
        </Link>
        {scrolled && (
          <div className="search" style={{ display: 'none' }}>
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
              key={element.name}
              to={element.url}
              activeClassName="current"
              exact={element.exact}
            >
              {element.name}
            </NavLink>
          ))}
        </div>
        {isLogin || localStorage.getItem('token') ? (
          <div className="dropdown">
            {user.full_name && (
              <div
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ backgroundColor: '#f9495b' }}
              >
                Hello, {user.full_name}!
              </div>
            )}

            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link className="dropdown-item" to="/">
                View Profile
              </Link>
              <Link className="dropdown-item" to="/host/homes">
                Become a host
              </Link>
              <Link
                className="dropdown-item"
                to="/"
                onClick={() => {
                  dispatch(logOut());
                }}
              >
                Logout
              </Link>
            </div>
          </div>
        ) : (
          <div className="sign-in-up-btn">
            <Link className="sign-in" to="/sign-in">
              Sign in
            </Link>
            <Link className="sign-up" to="/sign-up">
              Sign up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Narbar;
