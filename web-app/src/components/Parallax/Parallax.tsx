import {useScrollPosition} from 'contexts/ScrollHeight';
import {CSSProperties, useCallback, useEffect} from 'react';

function Parallax({
  children,
  speed = 10,
  className,
  style,
  unit = 'px',
}: {
  children: JSX.Element;
  speed?: number;
  className?: string;
  style?: CSSProperties;
  unit?: 'px' | '%';
}) {
  const y = useScrollPosition();

  const parallax = useCallback(
    () => (
      <div
        className={className}
        style={{
          ...style,
          transform: `translate3d(0, ${y * 0.01 * speed}${unit}, 0)`,
        }}
      >
        {children}
      </div>
    ),
    [y]
  );

  useEffect(() => {
    requestAnimationFrame(parallax);
  }, []);

  return parallax();
}

export default Parallax;
