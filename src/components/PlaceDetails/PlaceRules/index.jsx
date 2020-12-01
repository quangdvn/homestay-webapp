import React from 'react';
import { Element } from 'react-scroll';
import './styles.scss';

const PlaceRules = ({ rules }) => {
  return (
    <Element className="place-details-rules" name="rules">
      <h4 className="title">Rules</h4>
      <ul className="rules">
        {rules.map(item => (
          <li key={item.name} className="rule">
            {item.name}.
          </li>
        ))}
      </ul>
    </Element>
  );
};

export default PlaceRules;
