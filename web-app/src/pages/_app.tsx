import React, {ReactElement, ReactNode, useEffect} from 'react';

// Styles
import 'styles/globals.css';
import {GlobalStyle} from 'styles/Global.styles';

// Config
import {ThemeProvider} from 'styled-components';
import {logEvent} from 'firebase/analytics';
import {appTheme} from 'styles/theme';

// HOC
import {appWithTranslation, useTranslation} from 'next-i18next';

// Interfaces
import type {AppProps} from 'next/app';
import {getFirebaseAnalyticsInstance} from 'firebaseApp/firebase';

// Components
import type {NextPage} from 'next';

// Hooks
import {useRouter} from 'next/router';
import {OG_LOGO_URL, HOST_DOMAIN} from 'config/constants';
import MetaInfo from 'components/MetaInfo/MetaInfo';
import {UserDataProvider} from 'contexts/UserData';

// import { Roboto_Flex } from '@next/font/google';

// const globalFont = Roboto_Flex({
//   weight: ['400', '700'],
//   style: ['normal', ''],
//   subsets: ['latin'],
// })

// Suppress useLayoutEffect (and its warnings) when not running in a browser
if (typeof window === 'undefined') React.useLayoutEffect = () => {};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({Component, pageProps}: AppPropsWithLayout) {
  const getLayout = Component.getLayout || (page => page);
  const {t} = useTranslation();

  const router = useRouter();

  useEffect(() => {
    // Check if this commented line is needed
    // if (process.env.NODE_ENV === 'production') {

    const analyticsInstance = getFirebaseAnalyticsInstance();

    // TODO improve this type
    // Logging page views in google analytics
    const logScreenView = (url: any) => {
      if (analyticsInstance) logEvent(analyticsInstance, 'page_view', url);
    };

    router.events.on('routeChangeComplete', logScreenView);

    // For First Page
    logScreenView(window.location.pathname);

    // Remvove Event Listener after un-mount
    return () => {
      router.events.off('routeChangeComplete', logScreenView);
    };
  }, []);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <>
      {/* <style jsx global>{`
        html {
          font-family: ${globalFont.style.fontFamily};
        }
      `}</style> */}
      <MetaInfo
        title={t('app-meta-title') || ''}
        description={t('app-meta-description') || ''}
        imgUrl={OG_LOGO_URL}
        url={new URL(router.pathname, HOST_DOMAIN).toString()}
      />
      <ThemeProvider theme={appTheme}>
        <GlobalStyle />
        <UserDataProvider>{getLayout(<Component {...pageProps} />)}</UserDataProvider>
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(App);
