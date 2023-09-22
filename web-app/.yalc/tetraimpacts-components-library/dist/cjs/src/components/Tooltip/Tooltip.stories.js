"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickEvent = exports.Base = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
// import {ArrowLeft, Icon} from '../Icon';
const Tooltip_1 = __importDefault(require("./Tooltip"));
// import ReactTooltip from 'react-tooltip';
const Typography_1 = require("../Typography");
const Button_1 = require("../Button");
exports.default = {
    title: 'Components/Tooltip',
    component: Tooltip_1.default,
};
const Base = args => {
    const { text, place, delayShow, delayHide, primary, clickable, customTextColor, customBackColor, customBorderColor, customShadowColor, } = args;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Typography_1.Typography, Object.assign({ colorPreset: "primary", preset: null, variant: "p" }, { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iste illo doloribus explicabo fuga voluptatum aspernatur deleniti doloremque ..." })), (0, jsx_runtime_1.jsx)(Tooltip_1.default, Object.assign({ id: "iconTip", text: text, place: place, delayShow: delayShow, delayHide: delayHide, primary: primary, clickable: clickable, customTextColor: customTextColor, customBackColor: customBackColor, customBorderColor: customBorderColor, customShadowColor: customShadowColor }, { children: (0, jsx_runtime_1.jsx)(Button_1.Button, { presetSize: "large", primary: true, rounded: true, text: "Button", "data-for": "iconTip", "data-tip": true }) }))] }));
};
exports.Base = Base;
exports.Base.args = {
    text: 'Testing tooltip',
    place: 'top',
    primary: true,
    clickable: false,
};
exports.Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2456%3A5327&t=FUkgv4PJEdZo1qCA-4',
    },
};
const ClickEvent = () => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Typography_1.Typography, Object.assign({ colorPreset: "primary", preset: null, variant: "p" }, { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iste illo doloribus explicabo fuga voluptatum aspernatur deleniti doloremque ..." })), (0, jsx_runtime_1.jsx)(Tooltip_1.default, Object.assign({ id: "clickTip", text: "Button Clicked", delayShow: 0, delayHide: 0, clickable: true, place: "right" }, { children: (0, jsx_runtime_1.jsx)(Button_1.Button, { presetSize: "large", rounded: true, text: "Click me", "data-for": "clickTip", "data-tip": true, "data-event": "click" }) }))] }));
exports.ClickEvent = ClickEvent;
//# sourceMappingURL=Tooltip.stories.js.map