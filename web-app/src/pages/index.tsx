import {GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import getServiceInfo from 'modules/services/infrastructure/contentful/getServices';
import {getPromotedBlogs} from 'modules/landing/infrastructure/contentful/getPromotedBlogs';

// Data handlers
import getStaticSectionContent from 'modules/landing/infrastructure/contentful/getStaticSectionContent';
import {blogsSimpleMapper} from 'modules/landing/infrastructure/responseMappers';

// Interfaces
import {ContentfulImgAsset} from 'modules/landing/application/AboutUsSection/AboutUsSection.interface';
import {ReactElement, useState} from 'react';
import CIService from 'modules/services/domain/types';

// Config
import {defaultLanguage} from 'config/language';
import {pages, landingSections} from 'config/pagesUrls';
import ContactUsSection from 'modules/landing/application/ContactUs/ContactUs';
import ContactUsProps from 'modules/landing/application/ContactUs/ContactUS.interface';
import {ENABLED_MODULES} from 'config/constants';

// Components
import Hero from 'modules/landing/application/Hero/Hero';
import AboutUsSection from 'modules/landing/application/AboutUsSection/AboutUsSection';
import BaseLayout from 'layouts/BaseLayout';
import {LandingGlobalStyle} from 'modules/landing/application/Landing/Landing.styles';
import Blogs from 'modules/landing/application/Blogs/Blogs';
import Planet from 'modules/landing/application/Planet/Planet';
import {Blog} from 'modules/blogs/application/BlogsList/BlogsList.interface';
import ServicesSection from 'modules/landing/application/ServicesSection/ServicesSection';
import Parallax from 'components/Parallax/Parallax';
import Asteroid from 'modules/landing/application/Asteroid/Asteroid';
import Debris from 'modules/landing/application/Debris/Debris';
import {DebrisWrapper} from 'modules/landing/application/Planet/Planet.styles';
import {devices, useMediaQuery} from 'tetraimpacts-components-library';
import Loader from 'components/Loader/Loader';
import CareersSection from 'modules/landing/application/CareersSection/CareersSection';
import getJobCollectionTags from 'modules/landing/infrastructure/contentful/getCareerPositionsTags';
import careersTagsFilter from 'modules/landing/infrastructure/careersTagsFilter';
import {ScrollProvider} from 'contexts/ScrollHeight';

type HomeProps = {
  aboutUs: {
    title: string;
    subtitle: string;
    body: string;
    mainImg: ContentfulImgAsset;
    secondImg: ContentfulImgAsset;
  };
  services: {
    servicesList: CIService[];
    title: string;
    body: string;
  };
  contactUs: ContactUsProps;
  blogs: {
    blogsList: Blog[];
  };
  careers: {
    title: string;
    body: string;
    mainImage: {
      title: string;
      url: string;
    };
    jobCollectionTags: {
      id: string;
      name: string;
    }[];
  };
};

export default function Home({aboutUs, contactUs, blogs, services, careers}: HomeProps) {
  const [isTabletScreen] = useMediaQuery(devices.tablet);
  const contactUsHandleSendButton = () => true;
  const [loading, setLoading] = useState(false);

  return (
    <div className="y-scroll-snap-sections" style={{overflow: 'hidden'}}>
      <Loader loading={loading} />

      <LandingGlobalStyle />

      <Planet>
        <section id={landingSections.HERO} className="flex-center" style={{zIndex: 4}}>
          <Hero buttonLink={pages.SERVICES} fancy />
        </section>
      </Planet>

      {ENABLED_MODULES.services && (
        <section
          id={landingSections.SERVICES}
          className="main-content"
          style={{
            zIndex: 4,
            position: 'relative',
          }}
        >
          <ServicesSection
            body={services.body}
            // mainImg={services.mainImg}
            // secondImg={services.secondImg}
            // subtitle={services.subtitle}
            title={services.title}
            services={services.servicesList}
          />
        </section>
      )}

      <Parallax speed={40}>
        <Asteroid
          size={150}
          style={{
            position: 'absolute',
            top: isTabletScreen ? '-650px' : '120px',
            right: '-60px',
          }}
        />
      </Parallax>

      <Parallax speed={20}>
        <Asteroid
          size={400}
          style={{
            position: 'absolute',
            top: isTabletScreen ? '-400px' : '-430px',
            left: '-200px',
          }}
        />
      </Parallax>

      {ENABLED_MODULES.aboutUs && (
        <>
          {isTabletScreen && (
            <Parallax speed={20}>
              <DebrisWrapper style={{position: 'absolute', left: '-400px', top: '0px', zIndex: 0}}>
                <Debris />
              </DebrisWrapper>
            </Parallax>
          )}

          {isTabletScreen && (
            <Parallax speed={25}>
              <Asteroid
                size={40}
                blurAmount={1}
                style={{position: 'absolute', top: '300px', right: '60px'}}
              />
            </Parallax>
          )}

          <section
            id={landingSections.ABOUT_US}
            className="main-content flex-center"
            style={{
              zIndex: 4,
              position: 'relative',
            }}
          >
            <AboutUsSection
              body={aboutUs.body}
              mainImg={aboutUs.mainImg}
              // secondImg={aboutUs.secondImg}
              subtitle={aboutUs.subtitle}
              title={aboutUs.title}
            />
          </section>
        </>
      )}

      {ENABLED_MODULES.blogs && (
        <>
          {isTabletScreen && (
            <Parallax speed={20}>
              <DebrisWrapper style={{position: 'absolute', top: '0px', zIndex: 0}}>
                <Debris />
              </DebrisWrapper>
            </Parallax>
          )}

          <section
            id={landingSections.BLOGS}
            style={{
              zIndex: 4,
              position: 'relative',
            }}
          >
            <Blogs blogsList={blogs.blogsList} />
          </section>
        </>
      )}

      {ENABLED_MODULES.careers && (
        <>
          <Parallax speed={20}>
            <Asteroid
              size={100}
              style={{
                position: 'absolute',
                top: isTabletScreen ? '-200px' : '50px',
                left: '50px',
              }}
            />
          </Parallax>
          <section
            id={landingSections.CAREERS}
            className="main-content flex-center"
            style={{zIndex: 4, position: 'relative'}}
          >
            <CareersSection
              mainImage={careers.mainImage}
              title={careers.title}
              body={careers.body}
              positionsList={careers.jobCollectionTags}
            />
          </section>
        </>
      )}

      {ENABLED_MODULES.contactUs && (
        <section
          id={landingSections.CONTACT_US}
          style={{
            zIndex: 4,
            position: 'relative',
          }}
        >
          <ContactUsSection
            title={contactUs.title}
            handleSendButton={contactUsHandleSendButton}
            imageUrl={contactUs.imageUrl}
            lottie={contactUs.lottie}
            setLoading={setLoading}
          />
        </section>
      )}
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <ScrollProvider>
      <BaseLayout navbarPrimary={false}>{page}</BaseLayout>
    </ScrollProvider>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async ({locale}) => {
  // AboutUs Content

  // Call contentful's graphQL API to get AboutUs section resources
  const aboutUsStaticContent = await getStaticSectionContent('landing_about', locale);

  const {title} = aboutUsStaticContent.staticSectionContent[0];
  const {subtitle, body} = aboutUsStaticContent.staticSectionContent[0].content;
  const mainImg =
    aboutUsStaticContent.staticSectionContent[0].content.mediaCollection.items[0]?.img;
  const secondImg =
    aboutUsStaticContent.staticSectionContent[0].content.mediaCollection.items[1]?.img;

  // *** Blogs Section Content *** //
  const blogsList = blogsSimpleMapper(getPromotedBlogs(locale, 7));

  // *** ContactUs Content *** //
  const contactUsTitle = 'contact-us-title';
  const contactUsStaticContent = await getStaticSectionContent('contact', locale);
  const {url: contactUsImageUrl} =
    contactUsStaticContent.staticSectionContent[0].content.mediaCollection.items[0].img;

  // *** Services Content *** //
  const servicesStaticContent = await getStaticSectionContent('landing_services', locale);
  const {title: servicesTitle} = servicesStaticContent.staticSectionContent[0];
  const {body: servicesBody} = servicesStaticContent.staticSectionContent[0].content;
  const {services} = await getServiceInfo(locale, 10);

  // *** Careers Content *** //
  const careersStaticContent = await getStaticSectionContent('landing_careers', locale);
  const {title: careersSectionTitle} = careersStaticContent.staticSectionContent[0];
  const {
    body: careersBody,
    mediaCollection: {items: careersMediaCollection},
  } = careersStaticContent.staticSectionContent[0].content;
  const {jobCollectionTags} = await getJobCollectionTags(locale);

  const filteredJobCollectionTags = careersTagsFilter(jobCollectionTags);

  return {
    props: {
      ...(await serverSideTranslations(locale || defaultLanguage, ['common'])),
      aboutUs: {
        title,
        subtitle,
        body,
        mainImg,
        secondImg,
      },
      contactUs: {
        title: contactUsTitle,
        imageUrl: contactUsImageUrl,
      },
      blogs: {
        blogsList,
      },
      services: {
        title: servicesTitle,
        body: servicesBody,
        servicesList: services,
      },
      careers: {
        title: careersSectionTitle,
        body: careersBody,
        mainImage: careersMediaCollection[0].img,
        jobCollectionTags: filteredJobCollectionTags,
      },
    },
  };
};
