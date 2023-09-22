import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
// import {Button} from '../Button';
import { Close, Error, Info, Task, Warning } from '../Icon';
import { Typography } from '../Typography';
// Styles
import StyledToast, { ToastButtonsContainer, ToastButton, ToastContent, ToastHeader, ToastIcon, } from './Toast.styles';
const Toast = ({ message = 'Message', description = 'Description', actionLabel = 'Action', onActionClicked, onDismissed, onTimeout = () => null, noIcon, noCloseButton = false, noAction = false, isOpen = false, setIsOpen, background, highlightColor = '#FFFFFF', icon, type, timeout = 5000, isSnackbar = false, className, style, }) => {
    var _a, _b, _c, _d;
    const { colors } = useContext(ThemeContext);
    const presetBackground = type ? colors.toast[type.concat('Bg')] : background;
    const presetHighlight = type ? colors.toast[type] : highlightColor;
    const baseClassName = `ti-${isSnackbar ? 'snackbar' : 'toast'}`;
    const mapTypeToIcon = {
        error: Error,
        info: Info,
        success: Task,
        warning: Warning,
        default: Info,
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
    useEffect(() => {
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
    return isOpen ? (_jsxs(StyledToast, Object.assign({ className: `${baseClassName} ${className}`, background: presetBackground, highlightColor: presetHighlight, style: style }, { children: [noIcon || (_jsx(ToastIcon, { isSnackbar: isSnackbar, icon: icon || mapTypeToIcon[type || 'default'], customColor: presetHighlight, primary: true, correctAlign: noAction && noCloseButton })), _jsxs(ToastContent, Object.assign({ className: `${baseClassName}-content` }, { children: [_jsxs(ToastHeader, Object.assign({ isSnackbar: isSnackbar, className: `${baseClassName}-header` }, { children: [_jsx(Typography, Object.assign({ fontWeight: isSnackbar ? '500' : '700', fontSize: isSnackbar ? '14px' : '16px', height: isSnackbar ? '16.4px' : '19px', lineHeight: isSnackbar ? '16.4px' : '19px', fontFamily: "Roboto Flex", fontStyle: "normal", colorPreset: "primary", style: {
                                    marginTop: `${isSnackbar
                                        ? (noAction && noCloseButton && '3px') || '0px'
                                        : (noAction && noCloseButton && '0px') || '5px'}`,
                                }, customColor: presetHighlight }, { children: message })), (noCloseButton && noAction) || (_jsxs(ToastButtonsContainer, Object.assign({ className: `${baseClassName}-container` }, { children: [noAction || (_jsx(ToastButton, { className: `${baseClassName}-action-btn ${type || 'default'}`, presetSize: "small", text: actionLabel, rounded: true, onClick: handleAction, highlightColor: type ? presetHighlight : (_a = colors === null || colors === void 0 ? void 0 : colors.toast) === null || _a === void 0 ? void 0 : _a.default, hoverColor: type ? presetBackground : (_b = colors === null || colors === void 0 ? void 0 : colors.toast) === null || _b === void 0 ? void 0 : _b.defaultBg })), noCloseButton || (_jsx(ToastButton, { className: `${baseClassName}-close-btn ${type || 'default'}`, presetSize: "small", afterIcon: Close, rounded: true, onClick: handleDismiss, highlightColor: type ? presetHighlight : (_c = colors === null || colors === void 0 ? void 0 : colors.toast) === null || _c === void 0 ? void 0 : _c.default, hoverColor: type ? presetBackground : (_d = colors === null || colors === void 0 ? void 0 : colors.toast) === null || _d === void 0 ? void 0 : _d.defaultBg }))] })))] })), isSnackbar || (_jsx(Typography, Object.assign({ fontWeight: "500", fontSize: "12px", lineHeight: "20.4px", fontFamily: "Roboto Flex", fontStyle: "normal", colorPreset: "disable", customColor: presetHighlight }, { children: description })))] }))] }))) : null;
};
export default Toast;
//# sourceMappingURL=Toast.js.map