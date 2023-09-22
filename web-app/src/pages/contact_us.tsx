import {GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

// Components
import MetaInfo from 'components/MetaInfo/MetaInfo';

// Styles
import {StaticPageGlobalStyle} from 'components/StaticPages/StaticPages.styles';

// Hooks
import {useTranslation} from 'next-i18next';

// Config
import {defaultLanguage} from '../../next-i18next.config';

export default function ContactUs() {
  const {t} = useTranslation();
  return (
    <div className="main-content">
      <StaticPageGlobalStyle />
      <div className="app-container">
        <MetaInfo
          title={`${t('contact-us-text')} | ${t('app-meta-title')}`}
          description={t('contact-page-meta-description')}
        />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  // Temporarily disable page, could be done in next config though
  return {
    notFound: true,
  };

  return {
    props: {
      ...(await serverSideTranslations(locale || defaultLanguage, ['common'])),
    },
  };
};
