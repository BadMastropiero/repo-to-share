"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogCard = exports.ServiceCard = exports.CardDoubleSidedWrapper = exports.StyledCard = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const CardHelpers_styles_1 = require("./CardHelpers/CardHelpers.styles");
exports.StyledCard = styled_components_1.default.div(({ theme: { transition }, disabled }) => (0, styled_components_1.css) `
    box-sizing: border-box;
    transition: ${transition};
    pointer-events: ${disabled && 'none'};
    transform-style: preserve-3d;
  `);
exports.CardDoubleSidedWrapper = styled_components_1.default.div `
  background-color: transparent;
  perspective: 1000px;
  ${exports.StyledCard} {
    position: relative;
  }
  transform-style: preserve-3d;
  width: fit-content;
  height: fit-content;
  &:hover {
    ${exports.StyledCard} {
      transform: rotateY(180deg);
      transition: transform 0.6s;
    }
  }
`;
exports.ServiceCard = (0, styled_components_1.default)(exports.StyledCard)(({ theme: { colors: { primary25 }, }, }) => (0, styled_components_1.css) `
    box-shadow: 0px 10px 15px -5px rgba(0, 101, 166, 0.4);
    border-radius: 10px;
    padding: 30px;
    border: 4px solid #ffffff;
    background: ${primary25};
    /* cursor: pointer; */
    &:hover {
      transform: scale(1.05);
      box-shadow: 0px 20px 30px -10px rgba(0, 101, 166, 0.4);
    }
  `);
exports.BlogCard = (0, styled_components_1.default)(exports.StyledCard)(({ theme: { transition, colors: { primary25 }, }, }) => (0, styled_components_1.css) `
    ${CardHelpers_styles_1.CardContent} {
      /* cursor: pointer; */
      transition: ${transition};
      background: ${primary25};
      border-radius: 20px;
      width: fit-content;
      &:hover {
        box-shadow: 0px 20px 30px -10px rgba(0, 101, 166, 0.4);
      }
    }
    ${CardHelpers_styles_1.CardHeader}, ${CardHelpers_styles_1.CardControls} {
      padding: 0 20px;
    }
  `);
exports.default = exports.StyledCard;
//# sourceMappingURL=Card.styles.js.map