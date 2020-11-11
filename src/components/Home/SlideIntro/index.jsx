import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import './styles.scss';

const SlideIntro = () => {
  return (
    <div className="slide-intro">
      <OwlCarousel
        className="owl-theme"
        loop
        items={1}
        autoplay
        autoplayTimeout={7000}
        animateOut="fadeOut"
        dots
      >
        <div className="single-slider slider-bg-1" />
        <div className="single-slider slider-bg-2" />
        <div className="single-slider slider-bg-3" />
      </OwlCarousel>
    </div>
  );
};

export default SlideIntro;
