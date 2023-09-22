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
// Styles
import { StyledCard, BlogCard, ServiceCard, CardDoubleSidedWrapper } from './Card.styles';
const Card = (_a) => {
    var { children, variant, disabled, animateCardFlip } = _a, rest = __rest(_a, ["children", "variant", "disabled", "animateCardFlip"]);
    let SelectedCard = StyledCard;
    if (variant === 'service')
        SelectedCard = ServiceCard;
    if (variant === 'blog')
        SelectedCard = BlogCard;
    if (animateCardFlip === 'flip') {
        return (_jsx(CardDoubleSidedWrapper, { children: _jsx(SelectedCard, Object.assign({ disabled: disabled }, rest, { children: children })) }));
    }
    return (_jsx(SelectedCard, Object.assign({ disabled: disabled }, rest, { children: children })));
};
export default Card;
//# sourceMappingURL=Card.js.map