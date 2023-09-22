"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Ripple_styles_1 = require("./Ripple.styles");
const useDebouncedRippleCleanUp = (rippleCount, duration, cleanUpFunction) => {
    (0, react_1.useEffect)(() => {
        let bounce = null;
        if (rippleCount > 0) {
            if (bounce)
                clearTimeout(bounce);
            bounce = setTimeout(() => {
                cleanUpFunction();
                if (bounce)
                    clearTimeout(bounce);
            }, duration * 4);
        }
        return () => {
            if (bounce)
                clearTimeout(bounce);
        };
    }, [rippleCount, duration, cleanUpFunction]);
};
const Ripple = ({ duration, color }) => {
    const [rippleArray, setRippleArray] = (0, react_1.useState)([]);
    useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
        setRippleArray([]);
    });
    const addRipple = (event) => {
        const rippleContainer = event.currentTarget.getBoundingClientRect();
        const size = rippleContainer.width > rippleContainer.height
            ? rippleContainer.width
            : rippleContainer.height;
        const x = event.pageX - rippleContainer.x - size / 2;
        const y = event.pageY - rippleContainer.y - size / 2;
        const newRipple = {
            x,
            y,
            size,
        };
        setRippleArray([...rippleArray, newRipple]);
    };
    return ((0, jsx_runtime_1.jsx)(Ripple_styles_1.RippleContainer, Object.assign({ duration: duration, color: color, onMouseDown: addRipple }, { children: rippleArray.length > 0 &&
            rippleArray.map((ripple, index) => ((0, jsx_runtime_1.jsx)("span", { style: {
                    top: ripple.y,
                    left: ripple.x,
                    width: ripple.size,
                    height: ripple.size,
                } }, `span${index}`))) })));
};
exports.default = Ripple;
//# sourceMappingURL=Ripple.js.map