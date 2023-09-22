import {GetStaticProps} from 'next';
import {ReactElement} from 'react';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import BaseLayout from 'layouts/BaseLayout';

// Styles
import {StaticPageGlobalStyle} from 'components/StaticPages/StaticPages.styles';

// Components
import MetaInfo from 'components/MetaInfo/MetaInfo';
import WorkInProgress from 'components/StaticPages/WiP';

// Hooks
import {useTranslation} from 'next-i18next';

// Config
import {defaultLanguage} from 'config/language';

export default function Show500() {
  const {t} = useTranslation();
  return (
    <>
      <MetaInfo title={t('error-500-page-title')} description={t('error-500-meta-description')} />
      <StaticPageGlobalStyle />
      <div
        className="flex-1"
        style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
      >
        <div className="main-content navbar-distance">
          <div className="app-container">
            <WorkInProgress
              title={t('error-500-text-error')}
              wipVectorUrl="/illustrations/500.svg"
              wipVectorUrlAltText={t('error-500-svg-alt-text')}
              workingImageUrl="/illustrations/thinkingOverDesktop.svg"
              workingImageUrlAltText=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

Show500.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout navbarPrimary={false} navbarBgStyle="transparent">
      {page}
    </BaseLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale || defaultLanguage, ['common'])),
  },
});
