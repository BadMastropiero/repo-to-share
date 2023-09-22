import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {FixedBar, MovingBar} from './ProgressBar.styles';

function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      // Fake the progress to 10% and make the progress bar visible
      setProgress(10);
      setVisible(true);
    };

    const handleComplete = () => {
      // Complete the progress, then hide the progress after .5s
      setProgress(100);
      setTimeout(() => {
        setVisible(false);
      }, 500);
    };

    const handleError = () => {
      // Revert the progress to 0 and hide the progress bar after .5s
      setProgress(0);
      setTimeout(() => {
        setVisible(false);
      }, 500);
    };

    // Listen to the router events
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleError);

    // Clean up the event listeners
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleError);
    };
  }, [router.events]);

  return (
    <div>
      {/* Render the progress bar using the progress and visible states */}
      {visible && (
        <FixedBar>
          <MovingBar progress={progress} />
        </FixedBar>
      )}
    </div>
  );
}

export default ProgressBar;
