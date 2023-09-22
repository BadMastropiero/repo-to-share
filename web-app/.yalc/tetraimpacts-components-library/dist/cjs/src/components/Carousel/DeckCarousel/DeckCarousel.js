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
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
// Styles
const DeckCarousel_styles_1 = require("./DeckCarousel.styles");
const DeckCarousel = (_a) => {
    var { children, disabled, onSlideChange, slideIndex, infinite, autoplayDelay } = _a, rest = __rest(_a, ["children", "disabled", "onSlideChange", "slideIndex", "infinite", "autoplayDelay"]);
    const slidesAmmount = Array.isArray(children) ? children.length : 1;
    const [innerSlideIndex, setInnerSlideIndex] = (0, react_1.useState)(slideIndex || 0);
    const getSlideIndex = (index) => Math.abs((slidesAmmount + (index % slidesAmmount)) % slidesAmmount);
    const nextSlide = () => {
        if (infinite || innerSlideIndex !== slidesAmmount - 1)
            setInnerSlideIndex(prev => getSlideIndex(prev + 1));
    };
    const previousSlide = () => {
        if (infinite || innerSlideIndex !== 0)
            setInnerSlideIndex(prev => getSlideIndex(prev - 1));
    };
    (0, react_1.useEffect)(() => {
        if (onSlideChange)
            onSlideChange(innerSlideIndex);
    }, [innerSlideIndex]);
    (0, react_1.useEffect)(() => {
        if (slideIndex !== undefined && slideIndex !== innerSlideIndex)
            setInnerSlideIndex(getSlideIndex(slideIndex));
    }, [slideIndex]);
    (0, react_1.useEffect)(() => {
        if (!autoplayDelay)
            return undefined;
        const autoplay = setInterval(() => nextSlide(), autoplayDelay);
        return () => clearInterval(autoplay);
    }, []);
    return ((0, jsx_runtime_1.jsxs)(DeckCarousel_styles_1.StyledDeckCarousel, Object.assign({ as: "div" }, rest, { children: [children && Array.isArray(children)
                ? children.map((child, index) => {
                    if (index === getSlideIndex(innerSlideIndex - 1) &&
                        !(!infinite && innerSlideIndex === 0))
                        return ((0, jsx_runtime_1.jsx)(DeckCarousel_styles_1.DeckCard, Object.assign({ role: "option", className: "prev", onClick: !disabled ? previousSlide : undefined }, { children: child })));
                    if (index === getSlideIndex(innerSlideIndex))
                        return ((0, jsx_runtime_1.jsx)(DeckCarousel_styles_1.DeckCard, Object.assign({ role: "option", className: "current" }, { children: child })));
                    if (index === getSlideIndex(innerSlideIndex + 1) &&
                        !(!infinite && innerSlideIndex === slidesAmmount - 1))
                        return ((0, jsx_runtime_1.jsx)(DeckCarousel_styles_1.DeckCard, Object.assign({ role: "option", className: "after", onClick: !disabled ? nextSlide : undefined }, { children: child })));
                    return ((0, jsx_runtime_1.jsx)(DeckCarousel_styles_1.DeckCard, Object.assign({ role: "option", className: "back" }, { children: child })));
                })
                : children, children && Array.isArray(children) && ((0, jsx_runtime_1.jsx)(DeckCarousel_styles_1.DeckCard, Object.assign({ className: "layout-builder" }, { children: children[0] })))] })));
};
exports.default = DeckCarousel;
//# sourceMappingURL=DeckCarousel.js.map