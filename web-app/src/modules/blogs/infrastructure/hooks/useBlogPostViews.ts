import {TIMEOUT_TO_REGISTER_VIEW} from 'config/constants';
import {useEffect, useState} from 'react';
import {getAllBlogPostViews, registerBlogPostView} from '../firestore/views';

function useBlogPostViews(slug: string, timeoutToRegisterView?: number, onlyRegister?: boolean) {
  const [views, setViews] = useState(0);

  useEffect(() => {
    if (!onlyRegister) {
      getAllBlogPostViews(slug).then(res => {
        setViews(res);
      });
    }

    const interval = setInterval(() => {
      registerBlogPostView(slug);
    }, timeoutToRegisterView || TIMEOUT_TO_REGISTER_VIEW);

    return () => clearInterval(interval);
  }, []);

  return views;
}

export default useBlogPostViews;
