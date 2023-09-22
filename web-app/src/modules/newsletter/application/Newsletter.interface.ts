export default interface NewsletterProps {
  // Newsletter information
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
  viewInWebLink: string;
  headerBackground: string;
  headerMainImage: string;
  footerDecorationImage: string;
  socialNetworks: {
    linkedin: string;
    facebook: string;
    twitter: string;
    instagram: string;
  };
}
