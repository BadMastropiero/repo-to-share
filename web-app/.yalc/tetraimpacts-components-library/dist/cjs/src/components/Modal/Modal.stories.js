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
exports.Base = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Typography_1 = require("../Typography");
const Button_1 = require("../Button");
const Modal_1 = __importDefault(require("./Modal"));
const Card_1 = __importStar(require("../Card"));
const Icon_1 = require("../Icon");
exports.default = {
    title: 'Components/Modal',
    component: Modal_1.default,
};
const Base = args => {
    const { isOpen, closeOnBackdropClick, style, backdropBgColor, noDismissOnEsc } = args;
    const [isVisible, setIsVisible] = (0, react_1.useState)(isOpen);
    (0, react_1.useEffect)(() => {
        setIsVisible(isOpen);
    }, [isOpen]);
    const handleOpen = () => {
        setIsVisible(true);
    };
    const handleClose = () => {
        setIsVisible(false);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Button_1.Button, { onClick: handleOpen, presetSize: "small", text: "Open Modal", primary: true, rounded: true }), (0, jsx_runtime_1.jsx)(Modal_1.default, Object.assign({ id: "modal-with-card", isOpen: isVisible, setIsOpen: setIsVisible, closeOnBackdropClick: closeOnBackdropClick, style: style, backdropBgColor: backdropBgColor, noDismissOnEsc: noDismissOnEsc }, { children: (0, jsx_runtime_1.jsxs)(Card_1.default, Object.assign({ width: "420px", variant: "service" }, { children: [(0, jsx_runtime_1.jsx)(Card_1.CardHeader, { children: (0, jsx_runtime_1.jsx)(Typography_1.Typography, Object.assign({ variant: "h1", customPreset: "serviceTitle", fontWeight: "700", gradient: "linear-gradient(45deg, #00EB87, #0066A6)", fontFamily: "Roboto Flex" }, { children: "Card inside a modal" })) }), (0, jsx_runtime_1.jsx)(Card_1.CardContent, { children: (0, jsx_runtime_1.jsx)(Typography_1.Typography, Object.assign({ colorPreset: "primary", preset: "content" }, { children: (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: "Modals can accept all kind of children components." }), (0, jsx_runtime_1.jsx)("li", { children: "You can dismiss this modal by pressing ESC." }), (0, jsx_runtime_1.jsx)("li", { children: "For styling the modal (and backdrop), modify its style prop." })] }) })) }), (0, jsx_runtime_1.jsxs)(Card_1.CardControls, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ style: { display: 'flex', width: '100%', alignItems: 'center', gap: '5px' } }, { children: [(0, jsx_runtime_1.jsx)(Icon_1.Icon, { icon: Icon_1.Share, primary: true, disabled: true, height: "16px", width: "16px" }), (0, jsx_runtime_1.jsx)(Typography_1.Typography, Object.assign({ colorPreset: "disable", fontSize: "12px", lineHeight: "24px", preset: "content", "aria-label": "likes" }, { children: "9999,9999" }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ style: { display: 'flex', flexDirection: 'row', justifyContent: 'end' } }, { children: (0, jsx_runtime_1.jsx)(Button_1.Button, { onClick: handleClose, presetSize: "small", rounded: true, text: "Close" }) }))] })] })) }))] }));
};
exports.Base = Base;
exports.Base.args = {
    isOpen: false,
    closeOnBackdropClick: false,
    style: undefined,
    backdropBgColor: undefined,
    noDismissOnEsc: false,
};
exports.Base.parameters = {
    design: {
        type: 'figma',
        url: '',
    },
};
//# sourceMappingURL=Modal.stories.js.map