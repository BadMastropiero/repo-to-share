import IJobPosition from 'modules/careers/domain/types';

export default interface CareersProps {
  title: string;
  subtitle: string;
  body: string;
  mainImage: {
    title: string | null;
    url: string | null;
  };
  jobsSteps: {
    title: string;
    subtitle: string;
    body: string;
  }[];
  jobsPosititons: IJobPosition[];
  selectedTags: string[] | null;
}
