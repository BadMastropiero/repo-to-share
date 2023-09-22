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
exports.StyledNavButton = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const Button_1 = __importDefault(require("../Button"));
const Button_styles_1 = require("../Button.styles");
exports.StyledNavButton = (0, styled_components_1.default)(Button_1.default)(({ theme: { colors: { primary, primary200, primaryBg, primary25, primary600 }, }, primary: isPrimary, highlight, isActive, }) => (0, styled_components_1.css) `
    --bgHlColor: ${(highlight && (isPrimary ? primary25 : primary600)) || 'transparent'};
    --borderHlColor: ${isPrimary ? primary : primaryBg};
    --tic: 0.5s;

    flex-direction: column;
    border-radius: 0px;
    box-shadow: none;
    border: unset;
    border-top: 4px solid transparent;
    border-bottom: 4px solid
      ${(isActive && (isPrimary ? primary600 : primary25)) || `var(--bgHlColor)`};
    background: var(--bgHlColor);
    height: 80px;

    // Don't show the icon by default
    ${Button_styles_1.StyledIconContainer} {
      display: none;
    }

    p:first-of-type {
      // Set the proper typography
      padding: 10px;
      font-family: 'Roboto Flex';
      font-size: 12px;
      line-height: 14.06px;
      font-weight: 500;
      color: var(--borderHlColor);
    }

    @keyframes iconAppearance {
      0% {
        fill-opacity: 50%;
      }
      25% {
        fill-opacity: 75%;
      }
      50% {
        fill-opacity: 90%;
      }
      100% {
        fill-opacity: 100%;
      }
    }

    @keyframes floating {
      0% {
        transform: translatey(0px);
      }
      50% {
        transform: translatey(-5px);
      }
      100% {
        transform: translatey(0px);
      }
    }

    @keyframes dive {
      0% {
        transform: translatey(0px);
      }
      50% {
        transform: translatey(3px);
      }
      100% {
        transform: translatey(0px);
      }
    }

    &:hover:not(:disabled) {
      // Keep the same item's background colors
      background: var(--bgHlColor);
      border-bottom: 4px solid var(--borderHlColor);

      p:first-of-type {
        animation-name: dive;
        animation-duration: var(--tic);
      }

      ${Button_styles_1.StyledIconContainer} {
        display: flex;
        background: var(--bgHlColor);
        animation-name: floating;
        animation-duration: var(--tic);
      }

      div:first-child {
        // Set the proper paddings and icon size & color
        padding: 10px 0 0;
        svg:first-child {
          animation-name: iconAppearance;
          animation-duration: var(--tic);
          fill: var(--borderHlColor);
          width: 24px;
          height: 24px;
        }
      }
    }

    &:active:not(:disabled) {
      // Show the bottom border in the opposite color
      border-bottom: 4px solid var(--borderHlColor);
    }

    &:disabled {
      // Keep the same item's background colors
      background: var(--bgHlColor);
      ${Button_styles_1.StyledIconContainer} {
        background: var(--bgHlColor);
      }

      // Change the icon color to a disabled tone
      div:first-child {
        svg:first-child {
          fill: ${isPrimary ? primary200 : primary};
        }
      }

      p:first-of-type {
        color: ${isPrimary ? primary200 : primary};
      }
    }
  `);
exports.default = exports.StyledNavButton;
//# sourceMappingURL=NavButton.styles.js.map