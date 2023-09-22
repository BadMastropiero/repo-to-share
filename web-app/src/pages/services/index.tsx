import {ReactElement} from 'react';
import {GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

// Data handlers
import getServices from 'modules/services/infrastructure/contentful/getServices';
import getStaticSectionContent from 'modules/landing/infrastructure/contentful/getStaticSectionContent';

// Layout
import BaseLayout from 'layouts/BaseLayout';

// Components
import ServiceList from 'modules/services/application/ServiceList/ServiceList';
import MetaInfo from 'components/MetaInfo/MetaInfo';

// Hooks
import {useTranslation} from 'next-i18next';

// Styles
import {DarkBlueGlobalStyle} from 'styles/Global.styles';

// Interfaces
import IServiceList from 'modules/services/application/ServiceList/ServiceList.interface';

// Config
import {defaultLanguage} from '../../../next-i18next.config';

export default function ServiceDetail({services, title, summary}: IServiceList) {
  const {t} = useTranslation();
  return (
    <div className="main-content navbar-distance">
      <MetaInfo
        title={`${t('services-text')} | ${t('app-meta-title')}`}
        description={t('services-meta-description')}
      />
      <DarkBlueGlobalStyle />
      <div className="app-container">
        <ServiceList services={services} title={title} summary={summary} />
      </div>
    </div>
  );
}

ServiceDetail.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout navbarPrimary={false}>{page}</BaseLayout>;
};

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const {services} = await getServices(locale, 4, 6);
  const {staticSectionContent} = await getStaticSectionContent('landing_services', locale, 1);
  const {
    title,
    content: {body},
  } = staticSectionContent[0];
  return {
    props: {
      ...(await serverSideTranslations(locale || defaultLanguage, ['common'])),
      services,
      title,
      summary: body,
    },
  };
};
