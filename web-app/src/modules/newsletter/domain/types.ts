export default interface NewsletterPageProps {
  headerUserCover: string;
  headerCoverMessage: string;
  bodyTitle: string;
  firstParagraphSection: string;
  secondParagraphSections: string;
  sentToEmail: string;
  unsubscribeText: string;
  appointmentButtonText: string;
  appointmentButtonLink: string;
  readMoreButtonText: string;
  readMoreLink: string;
  unsubscribeLink: string;
  viewInBrowserLink: string;
  headerMainImage: string;
  headerBackground: string;
  footerDecorationImage: string;
  socialNetworks: {
    linkedin: string;
    facebook: string;
    twitter: string;
    instagram: string;
  };
}
