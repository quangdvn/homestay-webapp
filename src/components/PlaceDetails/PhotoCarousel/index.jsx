import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselControl,
} from 'reactstrap';
import './styles.scss';

const PhotoCarousel = ({ isOpen, toggle, photos }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === photos.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? photos.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <Modal
      id="photo-modal"
      isOpen={isOpen}
      toggle={toggle}
      modalTransition={{
        timeout: {
          enter: 0,
          exit: 100,
        },
      }}
    >
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        interval={2000}
        ride="carousel"
      >
        <CarouselIndicators
          items={photos}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {photos.map((item, index) => {
          return (
            <CarouselItem
              onExiting={() => setAnimating(true)}
              onExited={() => setAnimating(false)}
              key={item.url}
            >
              <img src={item.url} alt={`Alt text ${index}`} />
            </CarouselItem>
          );
        })}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </Modal>
  );
};

PhotoCarousel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default PhotoCarousel;
