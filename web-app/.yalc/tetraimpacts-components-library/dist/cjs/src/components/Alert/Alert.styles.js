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
exports.AlertButtonContainer = exports.AlertCloseButton = exports.AlertHeader = exports.AlertContainer = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const utils_1 = require("../../utils");
const Button_1 = require("../Button");
const Modal_1 = require("../Modal");
const StyledAlert = (0, styled_components_1.default)(Modal_1.Modal)(({ theme: { colors: { primary: primaryColor, primaryBg, primary100, primary600 }, }, primary: isPrimary, }) => (0, styled_components_1.css) `
    border: 4px solid ${isPrimary ? primary600 : primary100};
    padding: 26px;
    border-radius: 10px;
    background: ${isPrimary ? primaryColor : primaryBg};
    box-shadow: 0px 10px 15px -5px rgba(0, 101, 166, 0.4);
    min-width: 150px;
    ${(0, utils_1.respondAbove)('laptop', {
    maxWidth: '40%',
})}
  `);
exports.AlertContainer = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  gap: 20px;
  word-break: break-word;
`;
exports.AlertHeader = styled_components_1.default.div `
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  justify-content: space-between;
  align-items: center;
`;
exports.AlertCloseButton = (0, styled_components_1.default)(Button_1.Button)(({ theme: { colors: { primaryLight, primaryBg }, }, primary: isPrimary, }) => (0, styled_components_1.css) `
    border: unset;
    background: transparent;
    div:first-child {
      background: transparent;
      svg:first-child {
        fill: ${isPrimary ? primaryBg : primaryLight};
      }
    }

    :hover {
      div:first-child {
        background: transparent;
        svg:first-child {
          fill: ${primaryBg};
        }
      }
    }

    box-shadow: unset;
    flex-shrink: 0;
  `);
exports.AlertButtonContainer = styled_components_1.default.div `
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  justify-items: flex-end;
  gap: 20px;
  align-items: center;
  background: unset;
`;
exports.default = StyledAlert;
//# sourceMappingURL=Alert.styles.js.map