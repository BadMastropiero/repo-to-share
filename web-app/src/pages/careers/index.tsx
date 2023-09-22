import {ReactElement} from 'react';
import {GetServerSideProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

// Data handlers
import getStaticSectionContent from 'modules/landing/infrastructure/contentful/getStaticSectionContent';
import careersStaticContentMapper from 'modules/careers/infrastructure/careersStaticContentMapper';
import getJobPositionCollection from 'modules/careers/infrastructure/contentful/getJobPositionCollection';

// Layout
import BaseLayout from 'layouts/BaseLayout';

// Components
import MetaInfo from 'components/MetaInfo/MetaInfo';
import Careers from 'modules/careers/application/Careers/Careers';

// Hooks
import {useTranslation} from 'next-i18next';

// Interfaces
import CareersProps from 'modules/careers/application/Careers/Careers.interface';

// Config
import {defaultLanguage} from 'config/language';
import {markdownToTxt} from 'utils/markdown';
import jobStepsMapper from 'modules/careers/infrastructure/jobStepsMapper';

export default function CareersPage({
  title,
  subtitle,
  body,
  mainImage,
  jobsSteps,
  jobsPosititons,
  selectedTags,
}: CareersProps) {
  const {t} = useTranslation();
  return (
    <div className="main-content navbar-distance app-container">
      <MetaInfo
        title={`${title} | ${t('app-meta-title')}`}
        description={markdownToTxt(subtitle)}
        imgUrl={`${mainImage.url}?fm=png&h=630&fit=fill`}
        twitterCardType="summary_large_image"
      />
      <Careers
        title={title}
        subtitle={subtitle}
        body={body}
        mainImage={mainImage}
        jobsSteps={jobsSteps}
        jobsPosititons={jobsPosititons}
        selectedTags={selectedTags}
      />
    </div>
  );
}

CareersPage.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export const getServerSideProps: GetServerSideProps<CareersProps> = async ({
  locale,
  query,
  res,
}) => {
  // Careers page static content
  const {staticSectionContent} = await getStaticSectionContent('careers', locale);
  const pageStaticContent = careersStaticContentMapper(staticSectionContent);

  // Jobs steps static content
  const {staticSectionContent: jobStepStaticContent} = await getStaticSectionContent(
    'job_step',
    locale,
    4,
    ['title_ASC']
  );
  const mappedJobSteps = jobStepsMapper(jobStepStaticContent);

  // Tags filter
  const tagsFilter = query?.tags?.toString().length ? query?.tags?.toString().split(',') : null;
  const selectedTags = tagsFilter?.length ? tagsFilter : null;

  // Jobs positions
  const {jobPositionCollection} = await getJobPositionCollection(
    locale,
    undefined,
    null,
    selectedTags || null
  );

  res.setHeader('Cache-Control', 'public, s-maxage=100, stale-while-revalidate=59');
  return {
    props: {
      ...(await serverSideTranslations(locale || defaultLanguage, ['common'])),
      jobsSteps: mappedJobSteps,
      jobsPosititons: jobPositionCollection,
      selectedTags,
      ...pageStaticContent,
    },
  };
};
