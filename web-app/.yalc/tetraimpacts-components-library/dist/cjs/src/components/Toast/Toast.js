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
const react_1 = require("react");
const styled_components_1 = require("styled-components");
// import {Button} from '../Button';
const Icon_1 = require("../Icon");
const Typography_1 = require("../Typography");
// Styles
const Toast_styles_1 = __importStar(require("./Toast.styles"));
const Toast = ({ message = 'Message', description = 'Description', actionLabel = 'Action', onActionClicked, onDismissed, onTimeout = () => null, noIcon, noCloseButton = false, noAction = false, isOpen = false, setIsOpen, background, highlightColor = '#FFFFFF', icon, type, timeout = 5000, isSnackbar = false, className, style, }) => {
    var _a, _b, _c, _d;
    const { colors } = (0, react_1.useContext)(styled_components_1.ThemeContext);
    const presetBackground = type ? colors.toast[type.concat('Bg')] : background;
    const presetHighlight = type ? colors.toast[type] : highlightColor;
    const baseClassName = `ti-${isSnackbar ? 'snackbar' : 'toast'}`;
    const mapTypeToIcon = {
        error: Icon_1.Error,
        info: Icon_1.Info,
        success: Icon_1.Task,
        warning: Icon_1.Warning,
        default: Icon_1.Info,
    };
    const handleDismiss = () => {
        if (onDismissed) {
            onDismissed();
        }
        setIsOpen(false);
    };
    const handleAction = () => {
        if (onActionClicked) {
            onActionClicked();
        }
        setIsOpen(false);
    };
    (0, react_1.useEffect)(() => {
        const tim = setTimeout(() => {
            if (isOpen) {
                onTimeout();
                setIsOpen(false);
            }
        }, timeout);
        return () => {
            clearTimeout(tim);
        };
    }, [isOpen]);
    return isOpen ? ((0, jsx_runtime_1.jsxs)(Toast_styles_1.default, Object.assign({ className: `${baseClassName} ${className}`, background: presetBackground, highlightColor: presetHighlight, style: style }, { children: [noIcon || ((0, jsx_runtime_1.jsx)(Toast_styles_1.ToastIcon, { isSnackbar: isSnackbar, icon: icon || mapTypeToIcon[type || 'default'], customColor: presetHighlight, primary: true, correctAlign: noAction && noCloseButton })), (0, jsx_runtime_1.jsxs)(Toast_styles_1.ToastContent, Object.assign({ className: `${baseClassName}-content` }, { children: [(0, jsx_runtime_1.jsxs)(Toast_styles_1.ToastHeader, Object.assign({ isSnackbar: isSnackbar, className: `${baseClassName}-header` }, { children: [(0, jsx_runtime_1.jsx)(Typography_1.Typography, Object.assign({ fontWeight: isSnackbar ? '500' : '700', fontSize: isSnackbar ? '14px' : '16px', height: isSnackbar ? '16.4px' : '19px', lineHeight: isSnackbar ? '16.4px' : '19px', fontFamily: "Roboto Flex", fontStyle: "normal", colorPreset: "primary", style: {
                                    marginTop: `${isSnackbar
                                        ? (noAction && noCloseButton && '3px') || '0px'
                                        : (noAction && noCloseButton && '0px') || '5px'}`,
                                }, customColor: presetHighlight }, { children: message })), (noCloseButton && noAction) || ((0, jsx_runtime_1.jsxs)(Toast_styles_1.ToastButtonsContainer, Object.assign({ className: `${baseClassName}-container` }, { children: [noAction || ((0, jsx_runtime_1.jsx)(Toast_styles_1.ToastButton, { className: `${baseClassName}-action-btn ${type || 'default'}`, presetSize: "small", text: actionLabel, rounded: true, onClick: handleAction, highlightColor: type ? presetHighlight : (_a = colors === null || colors === void 0 ? void 0 : colors.toast) === null || _a === void 0 ? void 0 : _a.default, hoverColor: type ? presetBackground : (_b = colors === null || colors === void 0 ? void 0 : colors.toast) === null || _b === void 0 ? void 0 : _b.defaultBg })), noCloseButton || ((0, jsx_runtime_1.jsx)(Toast_styles_1.ToastButton, { className: `${baseClassName}-close-btn ${type || 'default'}`, presetSize: "small", afterIcon: Icon_1.Close, rounded: true, onClick: handleDismiss, highlightColor: type ? presetHighlight : (_c = colors === null || colors === void 0 ? void 0 : colors.toast) === null || _c === void 0 ? void 0 : _c.default, hoverColor: type ? presetBackground : (_d = colors === null || colors === void 0 ? void 0 : colors.toast) === null || _d === void 0 ? void 0 : _d.defaultBg }))] })))] })), isSnackbar || ((0, jsx_runtime_1.jsx)(Typography_1.Typography, Object.assign({ fontWeight: "500", fontSize: "12px", lineHeight: "20.4px", fontFamily: "Roboto Flex", fontStyle: "normal", colorPreset: "disable", customColor: presetHighlight }, { children: description })))] }))] }))) : null;
};
exports.default = Toast;
//# sourceMappingURL=Toast.js.map