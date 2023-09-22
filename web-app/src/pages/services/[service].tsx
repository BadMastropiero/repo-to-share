import {ReactElement, useState} from 'react';
import {GetStaticPaths, GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

// Data handlers
import getServiceInfo from 'modules/services/infrastructure/contentful/getServiceInfo';
import getServices from 'modules/services/infrastructure/contentful/getServices';

// Layout
import BaseLayout from 'layouts/BaseLayout';

// Components
import Service from 'modules/services/application/ServiceDetail/Service';
import ContactUsSection from 'modules/landing/application/ContactUs/ContactUs';
import MetaInfo from 'components/MetaInfo/MetaInfo';
import Loader from 'components/Loader/Loader';
import CalendlyButton from 'components/Calendly/CalendlyButton';

// Hooks
import {useTranslation} from 'next-i18next';

// Interfaces
import IServiceDetail from 'modules/services/application/ServiceDetail/Service.interface';

// Config
import {serviceSections} from 'config/pagesUrls';
import {supportedLanguages} from 'config/language';
import {markdownToTxt} from 'utils/markdown';
import {defaultLanguage} from '../../../next-i18next.config';

export default function ServiceDetail({service}: IServiceDetail) {
  const {t} = useTranslation();
  const {
    cardImg,
    categoriesCollection: {items: categories},
  } = service;
  const [loading, setLoading] = useState(false);

  return (
    <>
      <MetaInfo
        title={`${service.title} | ${t('app-meta-title')}`}
        description={markdownToTxt(service.shortDescription)}
        imgUrl={`${service.cardImg.url}?fm=png&h=630&fit=fill`}
        twitterCardType="summary_large_image"
      />
      <Loader loading={loading} />
      <div className="main-content navbar-distance" style={{marginBottom: '30px'}}>
        <div className="app-container">
          <Service service={service} contentImgUrl="/illustrations/serviceDetailImg.svg" />
        </div>
        <CalendlyButton />
      </div>
      <section id={serviceSections.CONTACT_US}>
        <ContactUsSection
          title={t('service-contact-us-title')}
          imageUrl={cardImg.url}
          setLoading={setLoading}
          objectives={categories.map(category => ({
            text: category.objective,
            checked: false,
          }))}
        />
      </section>
    </>
  );
}

ServiceDetail.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const {total} = await getServices(defaultLanguage, 1);
  const {services} = await getServices(defaultLanguage, total);

  const paths: Array<string | {params: {service: string}; locale?: string}> = [];

  for (let index = 0; index < total; index += 1) {
    const {slug} = services[index];
    supportedLanguages.forEach(lang => {
      paths.push({params: {service: slug}, locale: lang});
    });
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({locale, params}) => {
  const {service} = params as {service: string};
  const {services} = await getServiceInfo(locale, 1, 6, service);

  return {
    props: {
      ...(await serverSideTranslations(locale || defaultLanguage, ['common'])),
      service: services[0],
    },
  };
};
