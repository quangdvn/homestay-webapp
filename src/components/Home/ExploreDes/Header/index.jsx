import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
const Header = ({ title }) => {
  return (
    <div className="header">
      <h3 className="title">{title}</h3>
      <Link to="/">Show all</Link>
    </div>
  );
};
export default Header;
