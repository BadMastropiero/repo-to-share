import {ReactElement} from 'react';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {GetStaticProps} from 'next';
import BaseLayout from 'layouts/BaseLayout';

// Styles
import {StaticPageGlobalStyle} from 'components/StaticPages/StaticPages.styles';

// Interfaces
import {WipProps} from 'components/StaticPages/WiP.interface';

// Components
import WorkInProgress from 'components/StaticPages/WiP';
import MetaInfo from 'components/MetaInfo/MetaInfo';

// Config
import {defaultLanguage} from '../../next-i18next.config';

interface NotFoundProps extends WipProps {
  starsImageUrl: string;
}

export default function NotFound({
  wipVectorUrl,
  workingImageUrl,
  title,
  starsImageUrl,
}: NotFoundProps) {
  const {t} = useTranslation();

  return (
    <div
      className="flex-1"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${starsImageUrl}), linear-gradient(180deg, #00eb87 0%, #0065a6 100%)`,
      }}
    >
      <MetaInfo title={t('not-found-page-title')} description={t('not-found-meta-description')} />
      <div className="main-content navbar-distance">
        <StaticPageGlobalStyle />
        <div className="app-container">
          <WorkInProgress
            title={t(title)}
            wipVectorUrl={wipVectorUrl}
            wipVectorUrlAltText={t('not-found-svg-alt-text')}
            workingImageUrl={workingImageUrl}
            workingImageUrlAltText=""
          />
        </div>
      </div>
    </div>
  );
}

NotFound.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout navbarPrimary={false} navbarBgStyle="transparent">
      {page}
    </BaseLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({locale}) => {
  // this data should be taken from Contentful
  const title = 'not-found-text';
  const wipVectorUrl = '/illustrations/404.svg';
  const workingImageUrl =
    'https://images.ctfassets.net/w8n97mj303nk/6pEdMODAuC8uDGm6IP6xAn/4f16a7e94c9ee1030ab0fd27879191da/404_main_img.svg';
  const starsImageUrl =
    'https://images.ctfassets.net/w8n97mj303nk/1d3o2MovAfM97yZw0yumfG/0f04a46b51385234741df77d8779f7b2/Stars.svg';

  return {
    props: {
      ...(await serverSideTranslations(locale || defaultLanguage, ['common'])),
      title,
      wipVectorUrl,
      workingImageUrl,
      starsImageUrl,
    },
  };
};
