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
exports.Flip = exports.Blog = exports.Service2 = exports.Service = exports.Base = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Typography_1 = require("../Typography");
const _1 = __importStar(require("."));
const CardHelpers_styles_1 = require("./CardHelpers/CardHelpers.styles");
const Icon_1 = require("../Icon");
exports.default = {
    title: 'Components/Card',
    component: _1.Card,
};
const Base = args => ((0, jsx_runtime_1.jsxs)(_1.default, Object.assign({ width: "280px", height: "380px" }, args, { children: [(0, jsx_runtime_1.jsx)(CardHelpers_styles_1.CardHeader, { children: (0, jsx_runtime_1.jsx)(Typography_1.Typography, Object.assign({ variant: "h1", customPreset: "serviceTitle", fontWeight: "700", gradient: "linear-gradient(45deg, #00EB87, #0066A6)", fontFamily: "Roboto Flex" }, { children: "Shape your ideas" })) }), (0, jsx_runtime_1.jsx)(CardHelpers_styles_1.CardContent, { children: (0, jsx_runtime_1.jsx)(Typography_1.Typography, Object.assign({ colorPreset: "primary", preset: "content" }, { children: "Consulting. Get the insights you need about your market and how to build your business with analysis and technology awareness." })) })] })));
exports.Base = Base;
const Service = () => ((0, jsx_runtime_1.jsxs)(_1.default, Object.assign({ width: "280px", height: "380px", variant: "service" }, { children: [(0, jsx_runtime_1.jsx)(CardHelpers_styles_1.CardHeader, { children: (0, jsx_runtime_1.jsx)(Typography_1.Typography, Object.assign({ variant: "h1", customPreset: "serviceTitle", fontWeight: "700", gradient: "linear-gradient(45deg, #00EB87, #0066A6)", fontFamily: "Roboto Flex" }, { children: "Shape your ideas" })) }), (0, jsx_runtime_1.jsx)(CardHelpers_styles_1.CardContent, { children: (0, jsx_runtime_1.jsx)(Typography_1.Typography, Object.assign({ colorPreset: "primary", preset: "content" }, { children: "Consulting. Get the insights you need about your market and how to build your business with analysis and technology awareness." })) }), (0, jsx_runtime_1.jsx)(CardHelpers_styles_1.CardControls, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ style: { display: 'flex', width: '100%', alignItems: 'center', gap: '5px' } }, { children: [(0, jsx_runtime_1.jsx)(Icon_1.Icon, { icon: Icon_1.Share, primary: true, disabled: true, height: "16px", width: "16px" }), (0, jsx_runtime_1.jsx)(Typography_1.Typography, Object.assign({ colorPreset: "disable", fontSize: "12px", lineHeight: "24px", preset: "content", "aria-label": "likes" }, { children: "9999,9999" }))] })) })] })));
exports.Service = Service;
const Service2 = ({ titleText }) => ((0, jsx_runtime_1.jsxs)(_1.default, Object.assign({ width: "900px", height: "380px", variant: "service", style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    } }, { children: [(0, jsx_runtime_1.jsx)(CardHelpers_styles_1.CardHeader, { children: (0, jsx_runtime_1.jsx)(Typography_1.Typography, Object.assign({ variant: "h1", 
                // customPreset="serviceTitle"
                preset: "title", fontWeight: "500", colorPreset: "primary" }, { children: titleText || 'Shape your ideas' })) }), (0, jsx_runtime_1.jsx)(CardHelpers_styles_1.CardContent, { children: (0, jsx_runtime_1.jsx)(Typography_1.Typography, Object.assign({ colorPreset: "disable", preset: "content", style: { maxWidth: '500px', textAlign: 'center' } }, { children: "Consulting. Get the insights you need about your market and how to build your business with analysis and technology awareness." })) })] })));
exports.Service2 = Service2;
const Blog = args => ((0, jsx_runtime_1.jsxs)(_1.default, Object.assign({ variant: "blog", style: { width: '380px' } }, args, { children: [(0, jsx_runtime_1.jsx)(CardHelpers_styles_1.CardContent, Object.assign({ style: { height: '173px' } }, { children: (0, jsx_runtime_1.jsx)("img", { src: "assets/blogImage.svg", alt: "Example Blog Card SVG" }) })), (0, jsx_runtime_1.jsx)(CardHelpers_styles_1.CardControls, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ style: { display: 'flex', width: '100%', alignItems: 'center', gap: '5px' } }, { children: [(0, jsx_runtime_1.jsx)(Icon_1.Icon, { icon: Icon_1.Share, primary: true, disabled: true, height: "16px", width: "16px" }), (0, jsx_runtime_1.jsx)(Typography_1.Typography, Object.assign({ colorPreset: "disable", fontSize: "12px", lineHeight: "24px", preset: "content", "aria-label": "likes" }, { children: "9999,9999" }))] })) }), (0, jsx_runtime_1.jsx)(CardHelpers_styles_1.CardHeader, { children: (0, jsx_runtime_1.jsx)(Typography_1.Typography, Object.assign({ variant: "h3", customPreset: "serviceTitle", fontWeight: "700", fontFamily: "Roboto Flex", colorPreset: "primary", fontSize: "20px", lineHeight: "23.44px", lineNumbers: 2 }, { children: "How Tetraimpacts helps you shape yourself Your business How Tetraimpacts helps you shape yourself Your business" })) })] })));
exports.Blog = Blog;
const Flip = () => ((0, jsx_runtime_1.jsxs)(_1.default, Object.assign({ width: "280px", height: "380px", variant: "service", animateCardFlip: "flip" }, { children: [(0, jsx_runtime_1.jsxs)(CardHelpers_styles_1.CardFront, { children: [(0, jsx_runtime_1.jsx)(CardHelpers_styles_1.CardHeader, { children: (0, jsx_runtime_1.jsx)(Typography_1.Typography, Object.assign({ variant: "h1", customPreset: "serviceTitle", fontWeight: "700", colorPreset: "primary", fontFamily: "Roboto Flex", "aria-checked": "mixed", fontSize: "30px", lineHeight: "35.16px" }, { children: "Shape your ideas" })) }), (0, jsx_runtime_1.jsx)(CardHelpers_styles_1.CardContent, { children: (0, jsx_runtime_1.jsx)("img", { src: "assets/creativeThinking.svg", alt: "Example Blog Card SVG" }) })] }), (0, jsx_runtime_1.jsxs)(CardHelpers_styles_1.CardBack, { children: [(0, jsx_runtime_1.jsx)(CardHelpers_styles_1.CardHeader, { children: (0, jsx_runtime_1.jsx)(Typography_1.Typography, Object.assign({ variant: "h1", customPreset: "serviceTitle", fontWeight: "700", gradient: "linear-gradient(45deg, #00EB87, #0066A6)", fontFamily: "Roboto Flex" }, { children: "Shape your ideas" })) }), (0, jsx_runtime_1.jsx)(CardHelpers_styles_1.CardContent, { children: (0, jsx_runtime_1.jsx)(Typography_1.Typography, Object.assign({ colorPreset: "primary", preset: "content", fontSize: "16px" }, { children: "Consulting. Get the insights you need about your market and how to build your business with analysis and technology awareness." })) })] })] })));
exports.Flip = Flip;
exports.Base.args = {
    disabled: false,
    variant: 'service',
};
exports.Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A2797',
    },
};
exports.Service.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A2797',
    },
};
exports.Blog.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=146%3A13183',
    },
};
//# sourceMappingURL=Card.stories.js.map