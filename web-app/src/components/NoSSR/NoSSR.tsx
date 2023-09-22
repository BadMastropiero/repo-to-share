import {useState, useEffect} from 'react';

function NoSSR({children}: {children: JSX.Element}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return mounted ? <>{children}</> : null;
}

export default NoSSR;
