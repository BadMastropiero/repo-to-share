import {ReactElement} from 'react';
import {GetStaticPaths, GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

// Components
import MetaInfo from 'components/MetaInfo/MetaInfo';

// Data handlers
import getJobPositionCollection from 'modules/careers/infrastructure/contentful/getJobPositionCollection';

// Config
import {defaultLanguage, supportedLanguages} from 'config/language';

// Layout
import BaseLayout from 'layouts/BaseLayout';

// Hooks
import {useTranslation} from 'react-i18next';

// Utils
import {markdownToTxt} from 'utils/markdown';

// Domain types
import IJobPosition from 'modules/careers/domain/types';
import JobPosition from 'modules/careers/application/JobPosition/JobPosition';

export default function JobPositionPage(jobPositionProps: IJobPosition) {
  const {title, extraInfo} = jobPositionProps;

  const {t} = useTranslation();
  return (
    <>
      <MetaInfo
        title={`${title} | ${t('app-meta-title')}`}
        description={markdownToTxt(extraInfo || '')}
      >
        {/* {keywords && <meta name="keywords" content={`${keywords.toString()}`} />} */}
      </MetaInfo>
      <div className="main-content flex-center navbar-distance">
        <JobPosition jobPosition={{...jobPositionProps}} email="info@tetraimpacts.com" />
      </div>
    </>
  );
}

JobPositionPage.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const {total} = await getJobPositionCollection(defaultLanguage, 1);
  const {jobPositionCollection} = await getJobPositionCollection(defaultLanguage, total);

  const paths: Array<string | {params: {position: string}; locale?: string}> = [];

  for (let index = 0; index < total; index += 1) {
    const {slug} = jobPositionCollection[index];
    supportedLanguages.forEach(lang => {
      paths.push({params: {position: slug}, locale: lang});
    });
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IJobPosition> = async ({locale, params}) => {
  const {position} = params as {position: string};

  const {jobPositionCollection} = await getJobPositionCollection(locale, 1, position);

  return {
    props: {
      ...(await serverSideTranslations(locale || defaultLanguage, ['common'])),
      ...jobPositionCollection[0],
    },
  };
};
