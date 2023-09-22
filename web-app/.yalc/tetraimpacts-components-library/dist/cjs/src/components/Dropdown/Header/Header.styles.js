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
const HeaderContainer = styled_components_1.default.div(({ theme: { colors: { primary: primaryColor, primary50, primary600, primaryBg }, transition, }, primary: isPrimary, disabled, }) => (0, styled_components_1.css) `
    position: relative;
    left: 0;
    top: 0;
    fill: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: space-between;
    align-items: center;
    flex-grow: 0;
    padding: 10px;
    gap: 5px;
    // width: 184px; //for testing visual matching with figma design
    height: 51px;

    background-color: ${(isPrimary && (disabled ? primaryColor : primaryColor)) ||
    (disabled ? primaryBg : primaryBg)};

    border-radius: 10px;
    // cursor: ${disabled ? '' : 'pointer'};
    transition: ${transition};
    box-sizing: border-box;
    isolation: isolate;

    border: 4px solid
      ${(isPrimary && (disabled ? primary600 : primary600)) || (disabled ? primary50 : primary50)};

    /* &:hover {
      fill: none;
      background-color: ${disabled || (isPrimary && primary600) || primary50};
      border: 4px solid ${disabled || (isPrimary && primary50) || primary600};
    } */
  `);
exports.default = HeaderContainer;
//# sourceMappingURL=Header.styles.js.map