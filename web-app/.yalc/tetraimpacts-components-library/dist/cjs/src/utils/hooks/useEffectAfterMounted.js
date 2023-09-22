"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEffectAfterMounted = void 0;
const react_1 = require("react");
/**
 * Like useEffect, but skips the first render, kind of the `onMount` event in component.
 * Use like same old `useEffect`
 * @param {Function} effect -
 * @param {*} deps
 */
function useEffectAfterMounted(effect, deps) {
    const isMounted = (0, react_1.useRef)(false);
    (0, react_1.useEffect)(() => {
        if (isMounted.current) {
            effect();
        }
        isMounted.current = true;
    }, deps);
}
exports.useEffectAfterMounted = useEffectAfterMounted;
exports.default = useEffectAfterMounted;
//# sourceMappingURL=useEffectAfterMounted.js.map