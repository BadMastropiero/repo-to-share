import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { RippleContainer } from './Ripple.styles';
const useDebouncedRippleCleanUp = (rippleCount, duration, cleanUpFunction) => {
    useEffect(() => {
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
    const [rippleArray, setRippleArray] = useState([]);
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
    return (_jsx(RippleContainer, Object.assign({ duration: duration, color: color, onMouseDown: addRipple }, { children: rippleArray.length > 0 &&
            rippleArray.map((ripple, index) => (_jsx("span", { style: {
                    top: ripple.y,
                    left: ripple.x,
                    width: ripple.size,
                    height: ripple.size,
                } }, `span${index}`))) })));
};
export default Ripple;
//# sourceMappingURL=Ripple.js.map