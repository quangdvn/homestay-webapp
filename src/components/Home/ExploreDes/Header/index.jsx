import React from 'react';
import './styles.scss';

const Header = ({ title }) => {
  return (
    <div className="header">
      <h3 className="title">{title}</h3>
    </div>
  );
};
export default Header;
