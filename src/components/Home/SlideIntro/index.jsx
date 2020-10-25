import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import './styles.scss';
const SlideIntro = () => {
  return (
    <div className="slide-intro">
      <OwlCarousel
        className="owl-theme"
        loop={true}
        items={1}
        autoplay={true}
        autoplayTimeout={7000}
        animateOut={'fadeOut'}
        dots={true}
      >
        <div className="single-slider slider-bg-1"></div>
        <div className="single-slider slider-bg-2"></div>
        <div className="single-slider slider-bg-3"></div>
      </OwlCarousel>
    </div>
  );
};

export default SlideIntro;
