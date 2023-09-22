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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_tooltip_1 = __importDefault(require("react-tooltip"));
const styled_components_1 = __importStar(require("styled-components"));
const StyledTooltip = (0, styled_components_1.default)(react_tooltip_1.default)(({ theme: { colors: { primary600, primary: primaryBorder, primaryBg }, tooltip: { colors: { tooltipBg }, }, }, primary: isPrimary, customBackColor, customBorderColor, customShadowColor, }) => (0, styled_components_1.css) `
    min-width: 10px;
    min-height: 18px;
    padding: 5px 8px !important;

    font-size: 15px !important;

    color: ${primaryBg} !important;
    background-color: ${customBackColor || (isPrimary ? primary600 : tooltipBg)} !important;

    border: 2px solid ${customBorderColor || (isPrimary ? primaryBorder : primaryBg)} !important;
    border-radius: 5px !important;

    box-shadow: 0px 10px 15px -5px ${customShadowColor || 'rgba(0, 101, 166, 0.1)'} !important;

    &.show {
      opacity: 1 !important;
    }

    &::before {
      width: 0px !important;
    }

    &::after {
      background-color: ${customBackColor || (isPrimary ? primary600 : tooltipBg)} !important;
      border: 2px solid ${customBorderColor || (isPrimary ? primaryBorder : primaryBg)} !important;

      border-left: 2px solid ${customBackColor || (isPrimary ? primary600 : tooltipBg)} !important; // same as bg
      border-bottom: 2px solid ${customBackColor || (isPrimary ? primary600 : tooltipBg)} !important; // same as bg
      border-radius: 0px 5px 0px 10px !important;
    }

    &.place-right {
      margin-left: 15px !important;

      &:after {
        margin-top: -7px !important;
        left: -7px !important;
      }
    }

    &.place-left {
      margin-right: 15px !important;

      &:after {
        margin-top: -7px !important;
        right: -7px !important;
      }
    }

    &.place-top {
      margin-bottom: 15px !important;

      &::after {
        bottom: -7px !important;
        margin-left: -7px !important;
        box-shadow: 0px 10px 15px -5px ${customShadowColor || 'rgba(0, 101, 166, 0.1)'} !important;
      }
    }

    &.place-bottom {
      margin-top: 15px !important;

      &::after {
        transform: rotate(315deg) !important;
        top: -7px !important;
        margin-left: -7px !important;
      }
    }

    &:hover {
      visibility: visible !important;
      opacity: 1 !important;
    }
  `);
exports.default = StyledTooltip;
//# sourceMappingURL=Tooltip.styles.js.map