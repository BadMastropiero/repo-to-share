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
import { jsx as _jsx } from "react/jsx-runtime";
import ExternCarousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
// Styles
import { StyledCarousel } from './Carousel.styles';
import DeckCarousel from './DeckCarousel/DeckCarousel';
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
        return (_jsx(DeckCarousel, Object.assign({ slideIndex: slideIndex, onSlideChange: onSlideChange, disabled: disabled, infinite: infinite }, rest, { children: children })));
    }
    const plugins = [
        {
            resolve: slidesToShowPlugin,
            options: variant ? maVariantToSlidesToShowPluginOptions[variant] : null,
        },
    ];
    if (infinite)
        plugins.push('infinite');
    let offset;
    if (variant)
        offset = mapVariantToOffset[variant];
    return (_jsx(StyledCarousel, Object.assign({ as: ExternCarousel, value: slideIndex, onChange: onSlideChange, className: `${variant}-carousel ${className || ''}`, plugins: plugins, draggable: !disabled, offset: offset, itemWidth: slidesWidth }, { children: children })));
};
export default CarouselBase;
//# sourceMappingURL=CarouselBase.js.map