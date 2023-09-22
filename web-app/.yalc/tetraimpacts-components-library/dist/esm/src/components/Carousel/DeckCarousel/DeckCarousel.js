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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
// Styles
import { StyledDeckCarousel, DeckCard } from './DeckCarousel.styles';
const DeckCarousel = (_a) => {
    var { children, disabled, onSlideChange, slideIndex, infinite, autoplayDelay } = _a, rest = __rest(_a, ["children", "disabled", "onSlideChange", "slideIndex", "infinite", "autoplayDelay"]);
    const slidesAmmount = Array.isArray(children) ? children.length : 1;
    const [innerSlideIndex, setInnerSlideIndex] = useState(slideIndex || 0);
    const getSlideIndex = (index) => Math.abs((slidesAmmount + (index % slidesAmmount)) % slidesAmmount);
    const nextSlide = () => {
        if (infinite || innerSlideIndex !== slidesAmmount - 1)
            setInnerSlideIndex(prev => getSlideIndex(prev + 1));
    };
    const previousSlide = () => {
        if (infinite || innerSlideIndex !== 0)
            setInnerSlideIndex(prev => getSlideIndex(prev - 1));
    };
    useEffect(() => {
        if (onSlideChange)
            onSlideChange(innerSlideIndex);
    }, [innerSlideIndex]);
    useEffect(() => {
        if (slideIndex !== undefined && slideIndex !== innerSlideIndex)
            setInnerSlideIndex(getSlideIndex(slideIndex));
    }, [slideIndex]);
    useEffect(() => {
        if (!autoplayDelay)
            return undefined;
        const autoplay = setInterval(() => nextSlide(), autoplayDelay);
        return () => clearInterval(autoplay);
    }, []);
    return (_jsxs(StyledDeckCarousel, Object.assign({ as: "div" }, rest, { children: [children && Array.isArray(children)
                ? children.map((child, index) => {
                    if (index === getSlideIndex(innerSlideIndex - 1) &&
                        !(!infinite && innerSlideIndex === 0))
                        return (_jsx(DeckCard, Object.assign({ role: "option", className: "prev", onClick: !disabled ? previousSlide : undefined }, { children: child })));
                    if (index === getSlideIndex(innerSlideIndex))
                        return (_jsx(DeckCard, Object.assign({ role: "option", className: "current" }, { children: child })));
                    if (index === getSlideIndex(innerSlideIndex + 1) &&
                        !(!infinite && innerSlideIndex === slidesAmmount - 1))
                        return (_jsx(DeckCard, Object.assign({ role: "option", className: "after", onClick: !disabled ? nextSlide : undefined }, { children: child })));
                    return (_jsx(DeckCard, Object.assign({ role: "option", className: "back" }, { children: child })));
                })
                : children, children && Array.isArray(children) && (_jsx(DeckCard, Object.assign({ className: "layout-builder" }, { children: children[0] })))] })));
};
export default DeckCarousel;
//# sourceMappingURL=DeckCarousel.js.map