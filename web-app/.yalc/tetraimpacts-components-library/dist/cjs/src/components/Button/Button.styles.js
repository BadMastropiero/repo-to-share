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
exports.StyledTextButton = exports.StyledButton = exports.StyledIconContainer = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const DynamicComponent_1 = require("../DynamicComponent");
exports.StyledIconContainer = styled_components_1.default.div(({ theme: { colors: { primary100, primaryDark }, }, primary: isPrimary, padding, }) => (0, styled_components_1.css) `
    transition: all 0.3s;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: ${isPrimary ? primaryDark : primary100};
    padding: ${padding};
  `);
exports.StyledButton = (0, styled_components_1.default)(DynamicComponent_1.DynamicComponent)(({ theme: { colors: { primary, primaryDark, primary50, primary100, primary200, primary600, primary800, primaryBg, }, transition, }, primary: isPrimary, rounded, }) => (0, styled_components_1.css) `
    transition: ${transition};
    position: relative; // For the ripple effect to work
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    isolation: isolate;
    box-sizing: border-box;
    background-color: ${isPrimary ? primary : primary50};
    margin: 0;
    padding: 0;
    box-shadow: 0px 10px 15px -5px rgba(0, 101, 166, 0.4);
    border-radius: ${rounded ? '10px' : null};
    border: 4px solid ${isPrimary ? primary600 : primaryBg};
    overflow: hidden;
    height: min-content;
    &:disabled {
      background-color: ${isPrimary ? primary : primary50};
      ${exports.StyledIconContainer} {
        background: ${isPrimary ? primaryDark : primary100};
      }
    }
    &:hover:not(:disabled) {
      background-color: ${isPrimary ? primaryDark : primary100};
      ${exports.StyledIconContainer} {
        background: ${isPrimary ? primary800 : primary200};
      }
    }
    &:active:not(:disabled) {
      box-shadow: none;
    }
  `);
exports.StyledTextButton = (0, styled_components_1.default)(exports.StyledButton)(({ theme: { colors: { primaryDark, primary100 }, }, primary: isPrimary, }) => (0, styled_components_1.css) `
    background-color: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border: none;
    overflow: hidden;
    height: min-content;
    &:disabled {
      background-color: transparent;
    }
    &:hover:not(:disabled) {
      // TODO this line is here to update styles if needs to be differ from original button
      background-color: ${!isPrimary ? primaryDark : primary100};
    }
  `);
exports.default = exports.StyledButton;
//# sourceMappingURL=Button.styles.js.map