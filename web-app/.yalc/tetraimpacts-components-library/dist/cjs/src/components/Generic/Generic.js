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
exports.WithGeneric = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importStar(require("styled-components"));
function WithGeneric(component) {
    const WrappedComponent = (0, styled_components_1.default)(component)(({ theme: { transition }, height, width, padding }) => (0, styled_components_1.css) `
      box-sizing: border-box;
      transition: ${transition};
      height: ${height};
      width: ${width};
      padding: ${padding};
    `);
    // eslint-disable-next-line func-names
    return function (hocProps) {
        return (0, jsx_runtime_1.jsx)(WrappedComponent, Object.assign({}, hocProps));
    };
}
exports.WithGeneric = WithGeneric;
exports.default = WithGeneric;
//# sourceMappingURL=Generic.js.map