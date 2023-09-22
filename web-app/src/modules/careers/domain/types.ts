export default interface IJobPosition {
  title: string;
  slug: string;
  coreResponsabilities: string;
  jobProfile: string;
  keyQualifications: string;
  perks: string[];
  keywords: string[];
  contactInfo: {
    email: string;
    calendly: string;
    interview: string;
  };
  extraInfo: string;
  contentfulMetadata: {
    tags: {
      id: string;
      name: string;
    }[];
  };
}
