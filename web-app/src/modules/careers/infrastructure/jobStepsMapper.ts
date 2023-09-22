import {StaticSectionContent} from 'modules/landing/domain/contentful/types';

const jobStepsMapper = (jobStepsStaticContent: StaticSectionContent[]) =>
  jobStepsStaticContent.map(jobStep => ({
    title: jobStep.title,
    subtitle: jobStep.content.subtitle,
    body: jobStep.content.body,
  }));

export default jobStepsMapper;
