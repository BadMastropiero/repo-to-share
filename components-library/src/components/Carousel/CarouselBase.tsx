import React from 'react';
import ExternCarousel, {CarouselPluginTypes, slidesToShowPlugin} from '@brainhubeu/react-carousel';

// Styles
import {StyledCarousel} from './Carousel.styles';

// Interfaces
import {CarouselBaseProps} from './Carousel.interface';
import DeckCarousel from './DeckCarousel/DeckCarousel';

const mapVariantToOffset = {
  blogs: 60,
  services: -400,
};

const maVariantToSlidesToShowPluginOptions = {
  blogs: undefined,
  services: {
    numberOfSlides: 2,
  },
};

const CarouselBase: React.FC<CarouselBaseProps> = ({
  children,
  variant,
  disabled,
  infinite,
  className,
  slidesWidth,
  onSlideChange,
  slideIndex,
  ...rest
}) => {
  if (variant === 'services') {
    return (
      <DeckCarousel
        slideIndex={slideIndex}
        onSlideChange={onSlideChange}
        disabled={disabled}
        infinite={infinite}
        {...rest}
      >
        {children}
      </DeckCarousel>
    );
  }

  const plugins: (string | CarouselPluginTypes)[] = [
    {
      resolve: slidesToShowPlugin,
      options: variant ? maVariantToSlidesToShowPluginOptions[variant] : null,
    },
  ];

  if (infinite) plugins.push('infinite');

  let offset;
  if (variant) offset = mapVariantToOffset[variant];

  return (
    <StyledCarousel
      as={ExternCarousel}
      value={slideIndex}
      onChange={onSlideChange}
      className={`${variant}-carousel ${className || ''}`}
      plugins={plugins}
      draggable={!disabled}
      offset={offset}
      itemWidth={slidesWidth}
    >
      {children}
    </StyledCarousel>
  );
};

export default CarouselBase;
