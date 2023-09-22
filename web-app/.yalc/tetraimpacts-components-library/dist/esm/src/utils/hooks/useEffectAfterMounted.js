import { useEffect, useRef } from 'react';
/**
 * Like useEffect, but skips the first render, kind of the `onMount` event in component.
 * Use like same old `useEffect`
 * @param {Function} effect -
 * @param {*} deps
 */
export function useEffectAfterMounted(effect, deps) {
    const isMounted = useRef(false);
    useEffect(() => {
        if (isMounted.current) {
            effect();
        }
        isMounted.current = true;
    }, deps);
}
export default useEffectAfterMounted;
//# sourceMappingURL=useEffectAfterMounted.js.map