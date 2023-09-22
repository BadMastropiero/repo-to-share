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
const DynamicComponent_1 = require("../DynamicComponent");
const PillContainer = (0, styled_components_1.default)(DynamicComponent_1.DynamicComponent)(({ theme: { colors: { primary: primaryColor, primary50, primary600, primaryBg, primary25, primaryDark }, transition, }, primary: isPrimary, disabled, }) => (0, styled_components_1.css) `
    box-sizing: border-box;
    position: relative;
    left: 0;
    top: 0;
    fill: none;
    display: flex;
    flex-direction: row;
    width: fit-content;
    justify-content: center;
    align-content: space-around;
    align-items: center;
    align-self: center;
    padding: 3px 8px;
    gap: 5px;
    height: 28px;

    box-shadow: 0px 10px 15px -5px rgba(0, 101, 166, 0.4);
    background-color: ${(isPrimary && primaryColor) || primaryBg};
    border: 2px solid ${(isPrimary && primary600) || primary25};
    border-radius: 5px;

    transition: ${transition};

    &:hover {
      fill: none;
      background-color: ${disabled || (isPrimary && primary600) || primary50};
      border: 2px solid ${disabled || (isPrimary && primaryDark) || primary25};
      box-shadow: ${disabled ? '' : '0px 10px 15px -5px rgba(0, 101, 166, 0.4)'};
    }

    &:active {
      // TODO Fix the selectors
      // Replicates the initial scheme
      background-color: ${(isPrimary && primaryColor) || primaryBg};
      border: 2px solid ${(isPrimary && primary600) || primary25};
      box-shadow: ${disabled ? '0px 10px 15px -5px rgba(0, 101, 166, 0.4)' : 'none'};
    }

    pointer-events: ${disabled && 'none'};
  `);
exports.default = PillContainer;
//# sourceMappingURL=Pill.styles.js.map