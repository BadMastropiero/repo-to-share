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
exports.InputLabelWrapper = exports.InputWrapper = exports.StyledInput = exports.InputLabel = exports.InputLegend = exports.InputFieldset = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const Typography_1 = require("../Typography");
const styleMixins_1 = require("../../utils/styleMixins");
// Not in use, WIP
exports.InputFieldset = styled_components_1.default.fieldset(({ theme: { colors: { primary, primary100 }, transition, }, }) => (0, styled_components_1.css) `
    transition: ${transition};
    position: absolute;
    inset: -5px 0px 0px;
    pointer-events: none;
    margin: 0;
    padding: 0;
    border: none;
    border-bottom: 4px dashed ${primary};
    &:disabled {
      border-bottom-color: ${primary100};
    }
  `);
// Not in use, WIP
exports.InputLegend = styled_components_1.default.legend(({ theme: { transition } }) => (0, styled_components_1.css) `
    transition: ${transition};
    transform: scale(0.8);
    &.as-placeholder {
      //transform: translate(14px, 16px) scale(1);
      transform: translate(14px, 50%) scale(1);
    }
  `);
exports.InputLabel = (0, styled_components_1.default)(Typography_1.Typography)(({ theme: { colors: { primary, primary200, primaryDark, primaryBg }, transition, }, primary: isPrimary, disabled, }) => (0, styled_components_1.css) `
    transition: ${transition};
    position: absolute;
    bottom: 100%;
    transform: translateY(50%);
    font-size: 11px;
    left: 0;
    pointer-events: none;

    color: ${() => {
    if (isPrimary)
        return disabled ? primary200 : primary;
    return disabled ? primaryDark : primaryBg;
}};
    &.as-placeholder {
      bottom: 50%;
      font-size: 100%;
    }
  `);
exports.StyledInput = styled_components_1.default.input(({ theme: { colors: { primary, caret, primaryBg, primary200, primaryDark }, transition, }, $primary: isPrimary, disabled, }) => (0, styled_components_1.css) `
    transition: ${transition};
    pointer-events: all;

    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;

    width: 100%;
    padding: 0px;
    border-width: 0;

    font: inherit;
    caret-color: ${caret};
    color: ${() => {
    if (isPrimary)
        return disabled ? primary200 : primary;
    return disabled ? primaryDark : primaryBg;
}};
    background-color: transparent;

    &:focus,
    &.noEmpty {
      outline: none;
    }
  `);
exports.InputWrapper = styled_components_1.default.div(({ theme: { colors: { primary, primaryBg, primary200, primaryDark }, transition, }, disabled, primary: isPrimary, }) => (0, styled_components_1.css) `
    ${(0, styleMixins_1.flexAlignment)('row-center')}
    height: 52px;
    transition: ${transition};
    border-bottom: 4px dashed;
    border-color: ${() => {
    if (isPrimary)
        return disabled ? primary200 : primary;
    return disabled ? primaryDark : primaryBg;
}};
  `);
exports.InputLabelWrapper = styled_components_1.default.div `
  position: relative;
  align-self: end;
  /* width: 100%; */
  flex: 1;
`;
exports.default = exports.StyledInput;
//# sourceMappingURL=Input.styles.js.map