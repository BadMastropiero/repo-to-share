import {useEffect, useState} from 'react';

function useStickOnScroll(titleHeight: number = 500) {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsFixed(scrollPosition >= titleHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isFixed;
}

export default useStickOnScroll;
