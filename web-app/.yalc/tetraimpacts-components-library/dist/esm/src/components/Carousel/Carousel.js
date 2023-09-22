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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
// Styles
import { CarouselWrapper, CarouselControls } from './Carousel.styles';
import { Button } from '../Button';
import { ArrowLeft, ArrowRight } from '../Icon';
import CarouselBase from './CarouselBase';
import Dots from './Dots/Dots';
const Carousel = (_a) => {
    var { children, infinite, showControls, showPagination, disabled, paginationClickable, onSlideChange, variant, slideIndex } = _a, rest = __rest(_a, ["children", "infinite", "showControls", "showPagination", "disabled", "paginationClickable", "onSlideChange", "variant", "slideIndex"]);
    const [currentSlide, setCurrentSlide] = useState(slideIndex || 0);
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
    useEffect(() => {
        if (slideIndex && slideIndex !== currentSlide)
            setCurrentSlide(slideIndex);
    }, [slideIndex]);
    return (_jsxs(CarouselWrapper, Object.assign({ className: "ti-carousel-wrapper" }, { children: [_jsx(CarouselBase, Object.assign({ slideIndex: currentSlide, onSlideChange: index => {
                    setCurrentSlide(index);
                    if (onSlideChange)
                        onSlideChange(index);
                }, infinite: infinite, variant: variant, disabled: disabled, role: "listbox" }, rest, { children: children })), (showControls || showPagination) && (_jsxs(CarouselControls, { children: [showControls && (_jsxs(_Fragment, { children: [_jsx(Button, { presetSize: "large", afterIcon: ArrowLeft, onClick: previousSlide, disabled: disabled || (!infinite && currentSlide === 0) }), _jsx(Button, { presetSize: "large", afterIcon: ArrowRight, onClick: nextSlide, disabled: disabled || (!infinite && currentSlide === slidesAmmount - 1) })] })), showPagination && (_jsx(Dots, { ammount: slidesAmmount, className: "ti-carousel-dots", value: currentSlide, 
                        // style={{margin: variant === 'services' ? 'auto' : undefined}}
                        style: { margin: !showControls ? 'auto' : undefined }, setValue: paginationClickable && !disabled ? setCurrentSlide : undefined, role: "progressbar" }))] }))] })));
};
export default Carousel;
//# sourceMappingURL=Carousel.js.map