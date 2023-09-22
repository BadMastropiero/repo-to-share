import {useEffect, useState} from 'react';

export function useMediaQuery(initalQuery: string) {
  const [query, setQuery] = useState(initalQuery);
  const [matches, setMatches] = useState(false);

  // check query and listen for media change.
  useEffect(() => {
    if (!query) return undefined;

    const onChange = (mql: MediaQueryListEvent) => {
      setMatches(mql.matches);
    };

    const mql = window.matchMedia(query);

    setMatches(mql.matches);

    try {
      mql.addEventListener('change', onChange);
    } catch {
      mql.addListener(onChange);
    }

    return () => {
      try {
        mql.removeEventListener('change', onChange);
      } catch {
        mql.removeListener(onChange);
      }
    };
  }, [query]);

  return [matches, setQuery] as const;
}

export default useMediaQuery;
