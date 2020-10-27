import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselControl,
} from 'reactstrap';
import PlaceImage from '../../../assets/images/place-image.jpg';
import PlaceImage2 from '../../../assets/images/place-image-2.jpg';
import './styles.scss';

const PhotoCarousel = ({ isOpen, toggle }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const photos = [
    {
      src: PlaceImage,
      altText: 'Alt text 1',
    },
    {
      src: PlaceImage2,
      altText: 'Alt text 2',
    },
  ];
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
        {photos.map(item => {
          return (
            <CarouselItem
              onExiting={() => setAnimating(true)}
              onExited={() => setAnimating(false)}
              key={item.src}
            >
              <img src={item.src} alt={item.altText} />
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
