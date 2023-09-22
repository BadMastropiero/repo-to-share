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
exports.RippleContainer = void 0;
const styled_components_1 = __importStar(require("styled-components"));
exports.RippleContainer = styled_components_1.default.div(({ color, duration }) => (0, styled_components_1.css) `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    span {
      transform: scale(0);
      border-radius: 100%;
      position: absolute;
      opacity: 0.75;
      background-color: ${color};
      animation-name: ripple;
      animation-duration: ${duration}ms;
    }

    @keyframes ripple {
      to {
        opacity: 0;
        transform: scale(2);
      }
    }
  `);
exports.default = exports.RippleContainer;
//# sourceMappingURL=Ripple.styles.js.map