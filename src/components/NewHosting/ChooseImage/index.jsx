import React from 'react';
import ChoosePhotos from './ChoosePhotos';
import ChooseThumb from './ChooseThumb';
import './styles.scss';

const ChooseImage = ({ formData, setFormData }) => {
  return (
    <div className="choose-image">
      <h4>Step 2: Upload images</h4>
      <ChooseThumb formData={formData} setFormData={setFormData} />
      <ChoosePhotos formData={formData} setFormData={setFormData} />
    </div>
  );
};

export default ChooseImage;
