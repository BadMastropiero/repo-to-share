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
const styled_components_1 = __importStar(require("styled-components"));
const Svg = styled_components_1.default.svg(({ theme: { colors: { primary: primaryColor, primaryBg, primaryLight: disabledColor }, }, primary, disabled, color, width, height, }) => (0, styled_components_1.css) `
    border-radius: 0px;
    width: ${width}; // default should be 24px
    height: ${height};
    // display: inline-block;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;

    // Prioritize custom color over the theme's colors
    // stroke-width: .1px;
    // The following could be applied to the stroke as well
    fill: ${(disabled && disabledColor) || color || (primary && primaryColor) || primaryBg};
  `);
exports.default = Svg;
//# sourceMappingURL=IconBase.styles.js.map