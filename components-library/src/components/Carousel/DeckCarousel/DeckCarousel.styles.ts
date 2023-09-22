import styled from 'styled-components';

export const StyledDeckCarousel = styled.div`
  position: relative;
  margin-bottom: 20px;
  perspective: 1000px;
  transform-style: preserve-3d;
  perspective: 1000px;
  pointer-events: none;
`;

export const DeckCard = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: fit-content;
  height: fit-content;
  transition: transform 0.55s ease;
  pointer-events: all;
  margin: auto;
  &.prev {
    transform: translate3d(-35%, 0, -120px);
  }
  &.current {
    transform: translate3d(0, 0, 0);
  }
  &.after {
    transform: translate3d(35%, 0, -120px);
  }
  &.back {
    transform: translate3d(0, 0, -120px);
  }
  &.layout-builder {
    position: initial;
    z-index: -1;
    visibility: hidden;
  }
`;

export default StyledDeckCarousel;
