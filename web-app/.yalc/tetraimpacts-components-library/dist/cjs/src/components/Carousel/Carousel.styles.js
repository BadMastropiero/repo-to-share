"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledCarousel = exports.CarouselWrapper = exports.CarouselControls = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const react_carousel_1 = __importDefault(require("@brainhubeu/react-carousel"));
exports.CarouselControls = styled_components_1.default.div `
  display: flex;
  gap: 20px;
  margin-top: 20px;
  min-height: 60px;
`;
exports.CarouselWrapper = styled_components_1.default.div `
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
exports.StyledCarousel = (0, styled_components_1.default)(react_carousel_1.default) `
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
exports.default = exports.StyledCarousel;
//# sourceMappingURL=Carousel.styles.js.map