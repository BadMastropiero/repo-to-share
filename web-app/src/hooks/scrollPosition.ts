// Original implementation in https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj
// Examples in https://codesandbox.io/s/use-scroll-position-8nfin?fontsize=14&file=/src/pages/navbar.jsx:326-341

import {useRef, useLayoutEffect, RefObject, useState} from 'react';

const isBrowser = typeof window !== `undefined`;

type GetScrollPositionParams = {
  element?: RefObject<any> | false | undefined;
  useWindow: boolean;
};

function getScrollPosition({element, useWindow}: GetScrollPositionParams) {
  if (!isBrowser) return {x: 0, y: 0};

  const target = element ? element.current : document.body;
  const position = target.getBoundingClientRect();

  return useWindow ? {x: window.scrollX, y: window.scrollY} : {x: position.left, y: position.top};
}

type Coords = {
  x: number;
  y: number;
};

// TODO implement usage of this hook along a context to avoid unnecessary callbacks
export function useScrollPosition(
  effect: (({prevPos, currPos}: {prevPos: Coords; currPos: Coords}) => void) | undefined,
  deps: any[],
  element: RefObject<any> | false | undefined,
  useWindow: boolean,
  wait: number | undefined
) {
  const prevPos = useRef(getScrollPosition({useWindow}));
  const [pos, setPos] = useState(prevPos.current);

  let throttleTimeout: ReturnType<typeof setTimeout> | null = null;

  const callBack = () => {
    const currPos = getScrollPosition({element, useWindow});
    if (effect) effect({prevPos: prevPos.current, currPos});
    prevPos.current = currPos;
    setPos(currPos);
    throttleTimeout = null;
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, deps);

  return pos;
}

export default useScrollPosition;
