import { useEffect, useState } from 'react';
export function useMediaQuery(initalQuery) {
    const [query, setQuery] = useState(initalQuery);
    const [matches, setMatches] = useState(false);
    // check query and listen for media change.
    useEffect(() => {
        if (!query)
            return undefined;
        const onChange = (mql) => {
            setMatches(mql.matches);
        };
        const mql = window.matchMedia(query);
        setMatches(mql.matches);
        try {
            mql.addEventListener('change', onChange);
        }
        catch (_a) {
            mql.addListener(onChange);
        }
        return () => {
            try {
                mql.removeEventListener('change', onChange);
            }
            catch (_a) {
                mql.removeListener(onChange);
            }
        };
    }, [query]);
    return [matches, setQuery];
}
export default useMediaQuery;
//# sourceMappingURL=useMediaQuery.js.map