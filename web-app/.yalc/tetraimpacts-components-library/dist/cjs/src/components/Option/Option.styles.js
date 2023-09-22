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
const OptionContainer = styled_components_1.default.div(({ theme: { colors: { primary: primaryColor, primary50, primary600, primaryBg }, transition, }, primary: isPrimary, noCheckbox, disabled, }) => (0, styled_components_1.css) `
    position: relative;
    left: 0;
    top: 0;
    fill: none;
    display: flex;
    flex-direction: row;
    justify-content: ${noCheckbox ? 'flex-end' : 'space-between'};
    align-content: space-around;
    align-items: center;
    align-self: center;
    padding: 5px 10px 5px 5px;
    gap: 5px;
    height: 20px;
    background-color: ${isPrimary ? primaryColor : primaryBg};
    border-radius: 10px;
    /* cursor: ${disabled ? '' : 'pointer'}; */
    transition: ${transition};

    &:hover {
      fill: none;
      background-color: ${disabled || (isPrimary && primary600) || primary50};
    }
  `);
exports.default = OptionContainer;
//# sourceMappingURL=Option.styles.js.map