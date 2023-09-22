import styled from 'styled-components';
import Carousel from '@brainhubeu/react-carousel';
export const CarouselControls = styled.div `
  display: flex;
  gap: 20px;
  margin-top: 20px;
  min-height: 60px;
`;
export const CarouselWrapper = styled.div `
  overflow: auto; // This is for avoiding huge scroll bar when removing overflow hidden from Carousel lib

  // Hide scrollbar
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  padding-bottom: 20px; // This is a workaround to avoid clipping shadows and some other effect
  .BrainhubCarousel__container {
    overflow: visible; // Removing overflow hidden to correctly show shadows and effects of cards without clipping
  }
`;
export const StyledCarousel = styled(Carousel) `
  // Removing overflow hidden to correctly show shadows and effects of cards without clipping
  &.blogs-carousel {
    overflow: visible;
    .BrainhubCarousel,
    .BrainhubCarousel__trackContainer,
    .BrainhubCarousel__track {
      overflow: visible;
    }
  }
`;
export default StyledCarousel;
//# sourceMappingURL=Carousel.styles.js.map