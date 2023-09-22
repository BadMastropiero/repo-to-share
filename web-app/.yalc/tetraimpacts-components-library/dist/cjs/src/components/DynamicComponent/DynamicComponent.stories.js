"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const DynamicComponent_1 = __importDefault(require("./DynamicComponent"));
exports.default = {
    title: 'Support/DynamicComponent',
    component: DynamicComponent_1.default,
};
const Base = args => {
    const { tag } = args;
    return ((0, jsx_runtime_1.jsx)(DynamicComponent_1.default, Object.assign({ tag: tag }, args, { children: "Test" })));
};
exports.Base = Base;
exports.Base.args = {
    tag: 'h1',
};
//# sourceMappingURL=DynamicComponent.stories.js.map