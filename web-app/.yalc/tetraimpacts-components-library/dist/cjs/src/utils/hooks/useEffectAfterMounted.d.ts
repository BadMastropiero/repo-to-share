/**
 * Like useEffect, but skips the first render, kind of the `onMount` event in component.
 * Use like same old `useEffect`
 * @param {Function} effect -
 * @param {*} deps
 */
export declare function useEffectAfterMounted(effect: () => void, deps: any[]): void;
export default useEffectAfterMounted;
