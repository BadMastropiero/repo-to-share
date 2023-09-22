import {ReactElement} from 'react';
import {GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import BaseLayout from 'layouts/BaseLayout';

// Styles
import {StaticPageGlobalStyle} from 'components/StaticPages/StaticPages.styles';

// Hooks
import {useTranslation} from 'next-i18next';

// Interfaces
import {WipProps} from 'components/StaticPages/WiP.interface';

// Components
import WorkInProgress from 'components/StaticPages/WiP';
import MetaInfo from 'components/MetaInfo/MetaInfo';

// Config
import {defaultLanguage} from '../../next-i18next.config';

export default function Wip({wipVectorUrl, workingImageUrl, title}: WipProps) {
  const {t} = useTranslation();

  return (
    <div
      className="flex-1"
      style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
    >
      <MetaInfo title={t('wip-page-title')} description={t('wip-meta-description')} />
      <div className="main-content navbar-distance">
        <StaticPageGlobalStyle />
        <div className="app-container">
          <WorkInProgress
            title={t(title)}
            wipVectorUrl={wipVectorUrl}
            wipVectorUrlAltText={t('wip-svg-alt-text')}
            workingImageUrl={workingImageUrl}
            workingImageUrlAltText=""
          />
        </div>
      </div>
    </div>
  );
}

Wip.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout navbarPrimary={false} navbarBgStyle="transparent">
      {page}
    </BaseLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({locale}) => {
  // this data should be taken from Contentful
  const title = 'wip-text';
  const wipVectorUrl = '/illustrations/wipVector.svg';
  const workingImageUrl =
    'https://images.ctfassets.net/w8n97mj303nk/6ExlgTHQUjYg6Ho2NdBJmo/8e4fb4bf9b83f88f5173b9a365674baf/wip_main_img.svg';

  return {
    props: {
      ...(await serverSideTranslations(locale || defaultLanguage, ['common'])),
      title,
      wipVectorUrl,
      workingImageUrl,
    },
  };
};
