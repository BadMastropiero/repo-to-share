import {GetServerSideProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

// Config
import {pages} from 'config/pagesUrls';
import {getAbsoluteUrl} from 'utils/routes';

// Components
import Newsletter from 'modules/newsletter/application/Newsletter';

// Interfaces
import NewsletterPageProps from 'modules/newsletter/domain/types';
import {ReactElement} from 'react';
import EmailLayout from 'layouts/EmailLayout';

export default function NewsletterPage({
  headerUserCover,
  headerCoverMessage,
  bodyTitle,
  firstParagraphSection,
  secondParagraphSections,
  sentToEmail,
  appointmentButtonText,
  appointmentButtonLink,
  readMoreButtonText,
  unsubscribeText,
  socialNetworks,
  readMoreLink,
  unsubscribeLink,
  viewInBrowserLink,
  headerMainImage,
  headerBackground,
  footerDecorationImage,
}: NewsletterPageProps) {
  return (
    <Newsletter
      headerUserCover={headerUserCover}
      headerCoverMessage={headerCoverMessage}
      bodyTitle={bodyTitle}
      firstParagraphSection={firstParagraphSection}
      secondParagraphSections={secondParagraphSections}
      sentToEmail={sentToEmail}
      unsubscribeText={unsubscribeText}
      appointmentButtonText={appointmentButtonText}
      readMoreButtonText={readMoreButtonText}
      socialNetworks={socialNetworks}
      headerMainImage={headerMainImage}
      headerBackground={headerBackground}
      footerDecorationImage={footerDecorationImage}
      readMoreLink={readMoreLink}
      unsubscribeLink={unsubscribeLink}
      viewInWebLink={viewInBrowserLink}
      appointmentButtonLink={appointmentButtonLink}
    />
  );
}

NewsletterPage.getLayout = function getLayout(page: ReactElement) {
  return <EmailLayout>{page}</EmailLayout>;
};

export const getServerSideProps: GetServerSideProps = async ({locale, query, req}) => {
  const headerUserCover = query?.coverHeader as string;
  const headerCoverMessage = query?.coverMessage as string;
  const bodyTitle = query?.headerTitle as string; // lets started
  const firstParagraphSection = query?.firstParagraphSection as string;
  const secondParagraphSection = query?.secondParagraphSection as string;
  const sentToEmail = query?.sentToEmail as string;
  const unsubscribeText = query?.unsubscribeText as string;
  const appointmentButtonText = query?.appointmentButtonText as string;
  const appointmentButtonLink = query?.appointmentButtonLink as string;
  const readMoreButtonText = query?.readMoreButtonText as string;
  const readMoreLink = query?.readMoreLink as string;
  const unsubscribeLink = query?.unsubscribeLink as string;
  const headerBackground = query?.coverBackgroundImgUrl as string;
  const headerMainImage = query?.coverImgUrl as string;
  const footerDecorationImage = query?.footerImgUrl as string;

  const socialNetworks = {
    facebook: pages.FACEBOOK,
    twitter: pages.TWITTER,
    linkedin: pages.LINKEDIN,
    instagram: pages.INSTAGRAM,
  };

  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
      socialNetworks,
      headerUserCover: headerUserCover || null,
      headerCoverMessage: headerCoverMessage || null,
      bodyTitle: bodyTitle || null,
      firstParagraphSection: firstParagraphSection || null,
      secondParagraphSections: secondParagraphSection || null,
      sentToEmail: sentToEmail || null,
      appointmentButtonText: appointmentButtonText || null,
      appointmentButtonLink: appointmentButtonLink || null,
      readMoreButtonText: readMoreButtonText || null,
      unsubscribeText: unsubscribeText || null,
      readMoreLink: readMoreLink || null,
      unsubscribeLink: unsubscribeLink || null,
      viewInBrowserLink: getAbsoluteUrl(req.url || ''),
      headerBackground: headerBackground || null,
      headerMainImage: headerMainImage || null,
      footerDecorationImage: footerDecorationImage || null,
    },
  };
};
