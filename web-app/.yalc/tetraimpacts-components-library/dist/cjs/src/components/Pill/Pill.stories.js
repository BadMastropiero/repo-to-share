"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Icon_1 = require("../Icon");
const Pill_1 = __importDefault(require("./Pill"));
exports.default = {
    title: 'Components/Pill',
    component: Pill_1.default,
};
const Base = args => {
    const { primary, disabled, text, removable, clickable, onAfterIconClick } = args;
    return ((0, jsx_runtime_1.jsx)(Pill_1.default, { primary: primary, disabled: disabled, text: text, removable: removable, afterIcon: Icon_1.ArrowLeft, beforeIcon: Icon_1.Share, clickable: clickable, onAfterIconClick: onAfterIconClick }));
};
exports.Base = Base;
exports.Base.args = {
    primary: true,
    disabled: false,
    text: 'TiPill',
    removable: false,
    clickable: false,
};
exports.Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A1480',
    },
};
//# sourceMappingURL=Pill.stories.js.map