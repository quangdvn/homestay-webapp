import React from 'react';
import './styles.scss';
import { RingLoader } from 'react-spinners';

const LoadingIndicator = ({ isHost }) => {
  return (
    <div className="loading-indicator">
      <RingLoader color={isHost ? '#1b858a' : '#f9495b'} />
    </div>
  );
};

export default LoadingIndicator;
