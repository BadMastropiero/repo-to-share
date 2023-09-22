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
exports.StyledCheckbox = exports.Icon = exports.CheckboxContainer = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const Icon_1 = require("../Icon");
exports.CheckboxContainer = styled_components_1.default.div `
  position: relative;
  display: flex;
  vertical-align: middle;
`;
exports.Icon = (0, styled_components_1.default)(Icon_1.CheckMark) `
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
`;
exports.StyledCheckbox = styled_components_1.default.input(({ theme: { colors: { primary, primaryDark, primaryBg, primaryBgDark }, }, primary: isPrimary, width, height, }) => (0, styled_components_1.css) `
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    background-color: ${isPrimary ? primaryDark : primaryBgDark};
    margin: 0;
    width: ${width};
    height: ${height};
    border-radius: 5px;
    &:checked {
      background-color: ${isPrimary ? primary : primaryBg};
    }
  `);
// This is to override global theme or extra props
// StyledCheckbox.defaultProps = styledDefaultProps;
// Icon.defaultProps = styledDefaultProps;
//# sourceMappingURL=Checkbox.styles.js.map