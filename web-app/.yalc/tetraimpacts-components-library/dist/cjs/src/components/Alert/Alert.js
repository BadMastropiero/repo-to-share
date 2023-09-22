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
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_1 = require("../Button");
const Icon_1 = require("../Icon");
const Typography_1 = require("../Typography");
// Styles
const Alert_styles_1 = __importStar(require("./Alert.styles"));
const Alert = ({ title = 'Message Type', description = 'Message description', acceptText = 'ACCEPT', rejectText = 'CANCEL', onAccept, onReject, noCloseButton = false, isOpen = false, setIsOpen, backdropBgColor, primary = false, }) => ((0, jsx_runtime_1.jsx)(Alert_styles_1.default, Object.assign({ primary: primary, isOpen: isOpen, className: "ti-alert", noDismissOnEsc: true, backdropBgColor: backdropBgColor, setIsOpen: setIsOpen }, { children: (0, jsx_runtime_1.jsxs)(Alert_styles_1.AlertContainer, Object.assign({ className: "ti-alert-container" }, { children: [(0, jsx_runtime_1.jsxs)(Alert_styles_1.AlertHeader, Object.assign({ className: "ti-alert-header" }, { children: [(0, jsx_runtime_1.jsx)(Typography_1.Typography, Object.assign({ fontWeight: "700", fontSize: "16px", height: "19px", lineHeight: "19px", fontFamily: "Roboto Flex", fontStyle: "normal", colorPreset: primary ? 'secondary' : 'primary', padding: "0px 0px 0px 1px" // * Needed to correct typography left border shadowing first letter
                     }, { children: title })), noCloseButton || ((0, jsx_runtime_1.jsx)(Alert_styles_1.AlertCloseButton, { className: "ti-alert-close-btn", presetSize: "small", afterIcon: Icon_1.Close, rounded: true, onClick: onReject, primary: primary }))] })), (0, jsx_runtime_1.jsx)(Typography_1.Typography, Object.assign({ fontWeight: "500", fontSize: "12px", lineHeight: "20.4px", fontFamily: "Roboto Flex", fontStyle: "normal", colorPreset: primary ? 'secondary' : 'disable' }, { children: description })), (0, jsx_runtime_1.jsxs)(Alert_styles_1.AlertButtonContainer, Object.assign({ className: "ti-alert-buttons-container" }, { children: [(0, jsx_runtime_1.jsx)(Button_1.Button, { className: "ti-alert-reject-btn", presetSize: "small", text: rejectText, rounded: true, onClick: onReject, primary: !primary, presetType: "text" }), (0, jsx_runtime_1.jsx)(Button_1.Button, { className: "ti-alert-accept-btn", presetSize: "small", text: acceptText, rounded: true, onClick: onAccept, primary: primary })] }))] })) })));
exports.default = Alert;
//# sourceMappingURL=Alert.js.map