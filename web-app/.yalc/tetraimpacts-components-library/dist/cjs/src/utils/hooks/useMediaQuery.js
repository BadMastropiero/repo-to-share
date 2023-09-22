"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMediaQuery = void 0;
const react_1 = require("react");
function useMediaQuery(initalQuery) {
    const [query, setQuery] = (0, react_1.useState)(initalQuery);
    const [matches, setMatches] = (0, react_1.useState)(false);
    // check query and listen for media change.
    (0, react_1.useEffect)(() => {
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
exports.useMediaQuery = useMediaQuery;
exports.default = useMediaQuery;
//# sourceMappingURL=useMediaQuery.js.map