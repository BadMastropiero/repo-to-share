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
const Svg = styled_components_1.default.svg(({ theme: { checkedBg, primaryCheckedBg, primaryLight: disabledColor }, primary, disabled, color, }) => (0, styled_components_1.css) `
    display: inline-block;
    border-radius: 0px;
    width: 4em;
    height: 3em;
    fill: none;

    // Priorize color over the theme
    // stroke: ${disabled && disabledColor};
    stroke: ${(disabled && disabledColor) || color || (primary && primaryCheckedBg) || checkedBg};

    // background: ${primary ? checkedBg : primaryCheckedBg};
    stroke-width: 1em;

    &.bold {
      stroke-width: 8px;
    }

    &.fill-icon {
      fill: currentColor;
      stroke: none;
    }
  `);
exports.default = Svg;
//# sourceMappingURL=Icon.styles.js.map