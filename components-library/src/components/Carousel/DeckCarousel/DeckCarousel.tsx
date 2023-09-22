import React, {useEffect, useState} from 'react';

// Styles
import {StyledDeckCarousel, DeckCard} from './DeckCarousel.styles';

// Interfaces
import {DeckCarouselProps} from './DeckCarousel.interface';

const DeckCarousel: React.FC<DeckCarouselProps> = ({
  children,
  disabled,
  onSlideChange,
  slideIndex,
  infinite,
  autoplayDelay,
  ...rest
}) => {
  const slidesAmmount = Array.isArray(children) ? children.length : 1;
  const [innerSlideIndex, setInnerSlideIndex] = useState(slideIndex || 0);

  const getSlideIndex = (index: number) =>
    Math.abs((slidesAmmount + (index % slidesAmmount)) % slidesAmmount);

  const nextSlide = () => {
    if (infinite || innerSlideIndex !== slidesAmmount - 1)
      setInnerSlideIndex(prev => getSlideIndex(prev + 1));
  };

  const previousSlide = () => {
    if (infinite || innerSlideIndex !== 0) setInnerSlideIndex(prev => getSlideIndex(prev - 1));
  };

  useEffect(() => {
    if (onSlideChange) onSlideChange(innerSlideIndex);
  }, [innerSlideIndex]);

  useEffect(() => {
    if (slideIndex !== undefined && slideIndex !== innerSlideIndex)
      setInnerSlideIndex(getSlideIndex(slideIndex));
  }, [slideIndex]);

  useEffect(() => {
    if (!autoplayDelay) return undefined;
    const autoplay = setInterval(() => nextSlide(), autoplayDelay);
    return () => clearInterval(autoplay);
  }, []);

  return (
    <StyledDeckCarousel as="div" {...rest}>
      {children && Array.isArray(children)
        ? children.map((child, index) => {
            if (
              index === getSlideIndex(innerSlideIndex - 1) &&
              !(!infinite && innerSlideIndex === 0)
            )
              return (
                <DeckCard
                  role="option"
                  className="prev"
                  onClick={!disabled ? previousSlide : undefined}
                >
                  {child}
                </DeckCard>
              );
            if (index === getSlideIndex(innerSlideIndex))
              return (
                <DeckCard role="option" className="current">
                  {child}
                </DeckCard>
              );
            if (
              index === getSlideIndex(innerSlideIndex + 1) &&
              !(!infinite && innerSlideIndex === slidesAmmount - 1)
            )
              return (
                <DeckCard
                  role="option"
                  className="after"
                  onClick={!disabled ? nextSlide : undefined}
                >
                  {child}
                </DeckCard>
              );
            return (
              <DeckCard role="option" className="back">
                {child}
              </DeckCard>
            );
          })
        : children}
      {children && Array.isArray(children) && (
        <DeckCard className="layout-builder">{children[0]}</DeckCard>
      )}
    </StyledDeckCarousel>
  );
};

export default DeckCarousel;
