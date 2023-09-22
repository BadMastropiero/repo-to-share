import {ReactNode, createContext, useContext, useEffect, useState} from 'react';

export const ScrollHeightContext = createContext<number>(0);

export function ScrollProvider({children}: {children?: ReactNode | ReactNode[]}) {
  const [scrollPosition, setScroll] = useState<number>(0);

  const onScroll = () => {
    setScroll(+window.scrollY.toFixed(2));
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <ScrollHeightContext.Provider value={scrollPosition}>{children}</ScrollHeightContext.Provider>
  );
}

export default ScrollProvider;

export function useScrollPosition() {
  const scrollPosition = useContext(ScrollHeightContext);

  if (scrollPosition === undefined) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }

  return scrollPosition;
}
