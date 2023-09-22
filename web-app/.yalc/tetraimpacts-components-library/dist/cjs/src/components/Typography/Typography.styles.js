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
exports.StyledTypography = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const DynamicComponent_1 = require("../DynamicComponent");
exports.StyledTypography = (0, styled_components_1.default)(DynamicComponent_1.DynamicComponent)(({ theme: { typography: { base: { fontFamily, margin, padding, colors, color, lineHeight, fontSize, fontStyle, fontWeight, textAlign, textTransform, letterSpacing, textDecorationLine, gradient, }, }, }, margin: customMargin, padding: customPadding, lineNumbers, }) => (0, styled_components_1.css) `
    font-family: ${fontFamily};
    font-size: ${fontSize};
    line-height: ${lineHeight};
    font-style: ${fontStyle};
    font-weight: ${fontWeight};
    text-align: ${textAlign};
    text-transform: ${textTransform};
    letter-spacing: ${letterSpacing};
    text-decoration-line: ${textDecorationLine};
    margin: ${customMargin || margin};
    padding: ${customPadding || padding};
    color: ${color && !gradient ? colors[color] || color : null};
    background: ${gradient};
    -webkit-background-clip: ${gradient ? 'text' : null};
    background-clip: ${gradient ? 'text' : null};
    -webkit-text-fill-color: ${gradient ? 'transparent' : null};
    text-fill-color: ${gradient ? 'transparent' : null};
    width: ${gradient ? 'fit-content' : null};

    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${lineNumbers};
    display: -webkit-box;
    -webkit-box-orient: vertical;
  `);
exports.default = exports.StyledTypography;
//# sourceMappingURL=Typography.styles.js.map