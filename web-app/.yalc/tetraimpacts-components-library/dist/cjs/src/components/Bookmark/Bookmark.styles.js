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
exports.BmIconContainer = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const DynamicComponent_1 = require("../DynamicComponent");
const StyledBookmark = (0, styled_components_1.default)(DynamicComponent_1.DynamicComponent)(({ theme: { colors: { primary600, primaryBg }, transition, }, primary: isPrimary, }) => (0, styled_components_1.css) `
    color: unset;
    text-decoration: none;

    box-sizing: border-box;
    position: relative;
    left: 0;
    top: 0;
    fill: none;
    display: flex;
    flex-direction: row;
    min-height: 80px;

    background-color: ${(isPrimary && primary600) || primaryBg};
    border-radius: 10px;

    transition: ${transition};

    &:hover {
      /* box-shadow: 0px 10px 15px -5px rgba(0, 101, 166, 0.4); */
    }
  `);
const BmIconContainer = styled_components_1.default.div(({ theme: { colors: { primary: primaryColor, primary100 }, transition, }, primary: isPrimary, }) => (0, styled_components_1.css) `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 0;

    width: 76px;

    transition: ${transition};
    pointer-events: 'none';

    &.before {
      border-right: 4px dashed ${isPrimary ? primaryColor : primary100};
    }

    &.after {
      border-left: 4px dashed ${isPrimary ? primaryColor : primary100};
    }
  `);
exports.BmIconContainer = BmIconContainer;
exports.default = StyledBookmark;
//# sourceMappingURL=Bookmark.styles.js.map