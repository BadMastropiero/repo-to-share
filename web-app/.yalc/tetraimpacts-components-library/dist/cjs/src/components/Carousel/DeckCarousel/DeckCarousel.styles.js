"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeckCard = exports.StyledDeckCarousel = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.StyledDeckCarousel = styled_components_1.default.div `
  position: relative;
  margin-bottom: 20px;
  perspective: 1000px;
  transform-style: preserve-3d;
  perspective: 1000px;
  pointer-events: none;
`;
exports.DeckCard = styled_components_1.default.div `
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
exports.default = exports.StyledDeckCarousel;
//# sourceMappingURL=DeckCarousel.styles.js.map