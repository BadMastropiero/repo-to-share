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
exports.StyledSocialButton = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const Button_1 = __importDefault(require("../Button"));
const Button_styles_1 = require("../Button.styles");
exports.StyledSocialButton = (0, styled_components_1.default)(Button_1.default)(({ theme: { colors: { primary, primaryDark, primary50, primary100 }, }, primary: isPrimary, rounded, }) => (0, styled_components_1.css) `
    box-shadow: none;
    border-radius: ${rounded ? '50%' : null};
    border-color: ${isPrimary ? primaryDark : primary100};

    ${Button_styles_1.StyledIconContainer} {
      background: ${isPrimary ? primary : primary50};
    }

    &:disabled {
      ${Button_styles_1.StyledIconContainer} {
        background: ${isPrimary ? primary : primary50};
      }
    }
    &:hover:not(:disabled) {
      border-color: ${isPrimary ? primary : primary50};
      box-shadow: 0px 10px 15px -5px ${primaryDark};
      ${Button_styles_1.StyledIconContainer} {
        background: ${isPrimary ? primaryDark : primary100};
      }
    }
    &:active:not(:disabled) {
      box-shadow: none;
    }
  `);
exports.default = exports.StyledSocialButton;
//# sourceMappingURL=SocialButton.styles.js.map