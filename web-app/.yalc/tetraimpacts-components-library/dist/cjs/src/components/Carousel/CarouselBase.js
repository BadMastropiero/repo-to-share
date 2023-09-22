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
const react_carousel_1 = __importStar(require("@brainhubeu/react-carousel"));
// Styles
const Carousel_styles_1 = require("./Carousel.styles");
const DeckCarousel_1 = __importDefault(require("./DeckCarousel/DeckCarousel"));
const mapVariantToOffset = {
    blogs: 60,
    services: -400,
};
const maVariantToSlidesToShowPluginOptions = {
    blogs: undefined,
    services: {
        numberOfSlides: 2,
    },
};
const CarouselBase = (_a) => {
    var { children, variant, disabled, infinite, className, slidesWidth, onSlideChange, slideIndex } = _a, rest = __rest(_a, ["children", "variant", "disabled", "infinite", "className", "slidesWidth", "onSlideChange", "slideIndex"]);
    if (variant === 'services') {
        return ((0, jsx_runtime_1.jsx)(DeckCarousel_1.default, Object.assign({ slideIndex: slideIndex, onSlideChange: onSlideChange, disabled: disabled, infinite: infinite }, rest, { children: children })));
    }
    const plugins = [
        {
            resolve: react_carousel_1.slidesToShowPlugin,
            options: variant ? maVariantToSlidesToShowPluginOptions[variant] : null,
        },
    ];
    if (infinite)
        plugins.push('infinite');
    let offset;
    if (variant)
        offset = mapVariantToOffset[variant];
    return ((0, jsx_runtime_1.jsx)(Carousel_styles_1.StyledCarousel, Object.assign({ as: react_carousel_1.default, value: slideIndex, onChange: onSlideChange, className: `${variant}-carousel ${className || ''}`, plugins: plugins, draggable: !disabled, offset: offset, itemWidth: slidesWidth }, { children: children })));
};
exports.default = CarouselBase;
//# sourceMappingURL=CarouselBase.js.map