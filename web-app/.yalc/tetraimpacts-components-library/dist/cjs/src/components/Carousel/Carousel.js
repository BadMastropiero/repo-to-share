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
const react_1 = require("react");
// Styles
const Carousel_styles_1 = require("./Carousel.styles");
const Button_1 = require("../Button");
const Icon_1 = require("../Icon");
const CarouselBase_1 = __importDefault(require("./CarouselBase"));
const Dots_1 = __importDefault(require("./Dots/Dots"));
const Carousel = (_a) => {
    var { children, infinite, showControls, showPagination, disabled, paginationClickable, onSlideChange, variant, slideIndex } = _a, rest = __rest(_a, ["children", "infinite", "showControls", "showPagination", "disabled", "paginationClickable", "onSlideChange", "variant", "slideIndex"]);
    const [currentSlide, setCurrentSlide] = (0, react_1.useState)(slideIndex || 0);
    const slidesAmmount = Array.isArray(children) ? children.length : 1;
    const nextSlide = () => {
        // setCurrentSlide( (currentSlide + 1) % slidesAmmount)
        setCurrentSlide(currentSlide + 1);
    };
    const previousSlide = () => {
        // setCurrentSlide( (currentSlide - 1) % slidesAmmount)
        setCurrentSlide(currentSlide - 1);
    };
    // Updating current slide based on prop
    (0, react_1.useEffect)(() => {
        if (slideIndex && slideIndex !== currentSlide)
            setCurrentSlide(slideIndex);
    }, [slideIndex]);
    return ((0, jsx_runtime_1.jsxs)(Carousel_styles_1.CarouselWrapper, Object.assign({ className: "ti-carousel-wrapper" }, { children: [(0, jsx_runtime_1.jsx)(CarouselBase_1.default, Object.assign({ slideIndex: currentSlide, onSlideChange: index => {
                    setCurrentSlide(index);
                    if (onSlideChange)
                        onSlideChange(index);
                }, infinite: infinite, variant: variant, disabled: disabled, role: "listbox" }, rest, { children: children })), (showControls || showPagination) && ((0, jsx_runtime_1.jsxs)(Carousel_styles_1.CarouselControls, { children: [showControls && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Button_1.Button, { presetSize: "large", afterIcon: Icon_1.ArrowLeft, onClick: previousSlide, disabled: disabled || (!infinite && currentSlide === 0) }), (0, jsx_runtime_1.jsx)(Button_1.Button, { presetSize: "large", afterIcon: Icon_1.ArrowRight, onClick: nextSlide, disabled: disabled || (!infinite && currentSlide === slidesAmmount - 1) })] })), showPagination && ((0, jsx_runtime_1.jsx)(Dots_1.default, { ammount: slidesAmmount, className: "ti-carousel-dots", value: currentSlide, 
                        // style={{margin: variant === 'services' ? 'auto' : undefined}}
                        style: { margin: !showControls ? 'auto' : undefined }, setValue: paginationClickable && !disabled ? setCurrentSlide : undefined, role: "progressbar" }))] }))] })));
};
exports.default = Carousel;
//# sourceMappingURL=Carousel.js.map