import React, {useEffect, useState} from 'react';

// Styles
import {CarouselWrapper, CarouselControls} from './Carousel.styles';

// Interfaces
import {CarouselProps} from './Carousel.interface';
import {Button} from '../Button';
import {ArrowLeft, ArrowRight} from '../Icon';
import CarouselBase from './CarouselBase';
import Dots from './Dots/Dots';

const Carousel: React.FC<CarouselProps> = ({
  children,
  infinite,
  showControls,
  showPagination,
  disabled,
  paginationClickable,
  onSlideChange,
  variant,
  slideIndex,
  ...rest
}) => {
  const [currentSlide, setCurrentSlide] = useState(slideIndex || 0);
  const slidesAmmount = Array.isArray(children) ? children.length : 1;

  const nextSlide = () => {
    // setCurrentSlide( (currentSlide + 1) % slidesAmmount)
    setCurrentSlide(currentSlide + 1);
  };

  const previousSlide = () => {
    // setCurrentSlide( (currentSlide - 1) % slidesAmmount)
    setCurrentSlide(currentSlide - 1);
  };

  // Updating current slide based on prop
  useEffect(() => {
    if (slideIndex && slideIndex !== currentSlide) setCurrentSlide(slideIndex);
  }, [slideIndex]);

  return (
    <CarouselWrapper className="ti-carousel-wrapper">
      <CarouselBase
        slideIndex={currentSlide}
        onSlideChange={index => {
          setCurrentSlide(index);
          if (onSlideChange) onSlideChange(index);
        }}
        infinite={infinite}
        variant={variant}
        disabled={disabled}
        role="listbox"
        {...rest}
      >
        {children}
      </CarouselBase>
      {(showControls || showPagination) && (
        <CarouselControls>
          {showControls && (
            <>
              <Button
                presetSize="large"
                afterIcon={ArrowLeft}
                onClick={previousSlide}
                disabled={disabled || (!infinite && currentSlide === 0)}
              />
              <Button
                presetSize="large"
                afterIcon={ArrowRight}
                onClick={nextSlide}
                disabled={disabled || (!infinite && currentSlide === slidesAmmount - 1)}
              />
            </>
          )}
          {showPagination && (
            <Dots
              ammount={slidesAmmount}
              className="ti-carousel-dots"
              value={currentSlide}
              // style={{margin: variant === 'services' ? 'auto' : undefined}}
              style={{margin: !showControls ? 'auto' : undefined}}
              setValue={paginationClickable && !disabled ? setCurrentSlide : undefined}
              role="progressbar"
            />
          )}
        </CarouselControls>
      )}
    </CarouselWrapper>
  );
};

export default Carousel;
