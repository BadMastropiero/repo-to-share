"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/**
 * @todo Improve the click propagation's stopping in the div container to
 * avoid disabling eslint rules.
 *
 * The following rules are set to avoid conflicts with the linter's checks
 * when attempting to commit the changes introduced at this point.
 * Setting the both rules disabled for the line of interest makes that only
 * one of them works, so it had to be disabled for the whole file
 */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
const react_1 = require("react");
// Styles
const Modal_styles_1 = __importDefault(require("./Modal.styles"));
const Modal = (_a) => {
    var { children, 
    /** Controls whether the modal is open or close */
    isOpen = false, 
    /** A setter to override default behavior */
    setIsOpen, 
    /** When true, pressing Esc key won't close the modal */
    noDismissOnEsc: preventDismissOnEsc = false, 
    /** When true, clicking outside the modal (aka backdrop, overlay) closes the modal */
    closeOnBackdropClick = false, 
    /** backdrop's custom background color, use rgba format to control backdrop's opacity */
    backdropBgColor } = _a, rest = __rest(_a, ["children", "isOpen", "setIsOpen", "noDismissOnEsc", "closeOnBackdropClick", "backdropBgColor"]);
    const modalRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (modalRef.current) {
            modalRef.current.addEventListener('cancel', e => {
                e.preventDefault();
                if (!preventDismissOnEsc)
                    if (setIsOpen)
                        setIsOpen(false);
            });
        }
    }, [modalRef.current]);
    (0, react_1.useEffect)(() => {
        if (modalRef.current) {
            if (isOpen) {
                if (modalRef.current.showModal)
                    modalRef.current.showModal();
            }
            else {
                if (setIsOpen)
                    setIsOpen(false); // should we have this?
                if (modalRef.current.close)
                    modalRef.current.close();
            }
        }
    }, [isOpen]);
    return ((0, jsx_runtime_1.jsx)(Modal_styles_1.default, Object.assign({ role: "dialog", ref: modalRef, onClick: (e) => {
            e.stopPropagation();
            if (closeOnBackdropClick) {
                if (setIsOpen)
                    setIsOpen(false);
            }
        }, backdropBgColor: backdropBgColor }, rest, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ onClick: (e) => {
                e.stopPropagation();
            } }, { children: isOpen && children })) })));
};
exports.default = Modal;
//# sourceMappingURL=Modal.js.map