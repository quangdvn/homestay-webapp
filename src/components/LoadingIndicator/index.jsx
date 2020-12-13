import React from 'react';
import './styles.scss';
import { RingLoader } from 'react-spinners';

const LoadingIndicator = () => {
  return (
    <div className="loading-indicator">
      <RingLoader color={'#f9495b'} />
    </div>
  );
};

export default LoadingIndicator;
