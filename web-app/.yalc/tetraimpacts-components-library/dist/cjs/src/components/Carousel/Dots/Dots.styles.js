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
exports.Dot = exports.Dots = void 0;
const styled_components_1 = __importStar(require("styled-components"));
exports.Dots = styled_components_1.default.div `
  display: flex;
  min-height: 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
exports.Dot = styled_components_1.default.div(({ theme: { colors: { primaryLight, primaryDark }, transition, }, primary: isPrimary, selected, }) => {
    let bg = 'transparent';
    if (!selected)
        bg = isPrimary ? primaryDark : primaryLight;
    return (0, styled_components_1.css) `
      box-sizing: content-box;
      transition: ${transition};
      height: 10px;
      width: 10px;
      background-color: ${bg};
      border-radius: 50%;
      border: ${selected && `5px solid ${!isPrimary ? primaryDark : primaryLight}`};
    `;
});
exports.default = exports.Dots;
//# sourceMappingURL=Dots.styles.js.map