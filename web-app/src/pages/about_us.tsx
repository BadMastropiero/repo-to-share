import {ReactElement} from 'react';
import {GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

// Data handlers
import getStaticSectionContent from 'modules/landing/infrastructure/contentful/getStaticSectionContent';
import getAuthorCollection from 'modules/aboutUs/infrastructure/contentful/getAuthorCollection';
import authorCollectionToIAboutUs from 'modules/aboutUs/infrastructure/aboutUsMappper';

// Components
import AboutUs from 'modules/aboutUs/application/About/AboutUs';
import EndPageContent from 'components/EndPageContent/EndPageContent';
import MetaInfo from 'components/MetaInfo/MetaInfo';
import StaffSection from 'modules/aboutUs/application/StaffSection/StaffSection';

// Layout
import BaseLayout from 'layouts/BaseLayout';

// Interfaces
import IAboutUs from 'modules/aboutUs/application/About/AboutUs.interface';

// Hooks
import {useTranslation} from 'next-i18next';

// Config
import {defaultLanguage} from 'config/language';
import {HOST_DOMAIN} from 'config/constants';
import {aboutSections} from 'config/pagesUrls';

export default function About({summary, staffMembers, title, endPageBanner}: IAboutUs) {
  const {t} = useTranslation();
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <MetaInfo
        title={`${title} | ${t('app-meta-title')}`}
        description={t('about-meta-description')}
        imgUrl={new URL('/AboutUs.png', HOST_DOMAIN).toString()}
      />
      <div>
        <div className="main-content navbar-distance">
          <AboutUs
            summary={summary}
            staffMembers={staffMembers}
            title={title}
            headingImage="/illustrations/plant.svg"
          />
        </div>
        <section id={aboutSections.STAFF_MEMBERS}>
          <StaffSection
            staffMembers={staffMembers}
            defaultAvatar="/illustrations/defaultAvatar.svg"
          />
        </section>
      </div>
      <section>
        <EndPageContent
          content={endPageBanner?.content ?? ''}
          contentImageUrl={endPageBanner?.imageUrl}
        />
      </section>
    </div>
  );
}

About.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export const getStaticProps: GetStaticProps = async ({locale}) => {
  // Call contentful's graphQL API to get resources
  const {staticSectionContent} = await getStaticSectionContent('about-page-banner', locale);
  const {staticSectionContent: staticAboutSection} = await getStaticSectionContent('about', locale);
  const {authorCollection} = await getAuthorCollection('staff', locale, 10);

  const bannerContent = staticSectionContent[0] ? staticSectionContent[0].content.body : null;
  const bannerImage = staticSectionContent[0]
    ? staticSectionContent[0].content.mediaCollection.items[0].img.url
    : null;
  const {
    content: {body},
    title,
  } = staticAboutSection[0];

  const staffMemberCollection = authorCollectionToIAboutUs(authorCollection);

  return {
    props: {
      ...(await serverSideTranslations(locale || defaultLanguage, ['common'])),
      title,
      summary: body,
      staffMembers: staffMemberCollection,
      bannerContent,
      endPageBanner: {
        content: bannerContent,
        imageUrl: bannerImage,
      },
    },
  };
};
