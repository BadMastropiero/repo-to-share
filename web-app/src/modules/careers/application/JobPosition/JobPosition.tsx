import {useRouter} from 'next/router';
import {useTranslation} from 'next-i18next';
import {Button, Pill, Typography} from 'tetraimpacts-components-library';

// Components
import ReactMarkdown from 'components/ReactMarkdown/ReactMarkdown';
import TextList from 'components/TextList/TextList';
import Link from 'components/Link/Link';

// Config
import {pages, careersSections} from 'config/pagesUrls';

// Hooks
import useStickOnScroll from 'hooks/stickOnScroll';

// Styles
import {
  PositionDetailsContainer,
  JobPositionLayout,
  SectionTitle,
  ContactFloatingContainer,
  DashedDivider,
  PillsContainer,
  BodyContainer,
  PageTitle,
} from './JobPosition.styles';

// Interfaces
import JobPositionProps from './JobPosition.interface';

export default function JobPosition({jobPosition, email}: JobPositionProps) {
  const {
    title,
    coreResponsabilities,
    jobProfile,
    keyQualifications,
    perks,
    contentfulMetadata: {tags},
  } = jobPosition;

  const {t} = useTranslation();

  const router = useRouter();

  const isFixed = useStickOnScroll(190);

  const handleFilterTag = (tag: string) => {
    router.push(
      {
        pathname: pages.CAREERS,
        query: {
          tags: [tag]?.join() || null,
        },
        hash: careersSections.JOBS_OFFERS,
      },
      undefined,
      {scroll: true}
    );
  };

  return (
    <JobPositionLayout>
      <PageTitle colorPreset="primary">{title}</PageTitle>
      <BodyContainer>
        <PositionDetailsContainer>
          <SectionTitle>{t('job-offer-responsabilities-section-title')}</SectionTitle>
          <ReactMarkdown content={coreResponsabilities} />
          <SectionTitle>{t('job-offer-profile-section-title')}</SectionTitle>
          <ReactMarkdown content={jobProfile} />
          <SectionTitle>{t('job-offer-qualifications-section-title')}</SectionTitle>
          <ReactMarkdown content={keyQualifications} />
        </PositionDetailsContainer>
        <ContactFloatingContainer isFixed={isFixed}>
          <TextList bulletsPoints={perks} />
          <DashedDivider />
          <Typography fontWeight="700">{t('job-offer-contact-apply-text')}</Typography>
          <Typography>{t('job-offer-contact-feedback')}</Typography>
          <Typography fontWeight="700" type="email">
            {email}
          </Typography>
          <PillsContainer role="list">
            {tags?.map(tag => (
              <Pill
                aria-label={t(tag.id) || ''}
                text={t(tag.id) || ''}
                key={tag.id}
                onMouseUp={() => handleFilterTag(tag.id)}
                style={{cursor: 'pointer'}}
              />
            ))}
          </PillsContainer>
          <Link
            href={`mailto:${email}`}
            style={{alignSelf: 'center', marginTop: '90px', cursor: 'pointer'}}
          >
            <Button
              aria-label={t('landing-contact-us-send-button') || ''}
              text={t('navbar-contact_us-button-label') || 'CONTACT US'}
              primary
            />
          </Link>
        </ContactFloatingContainer>
      </BodyContainer>
    </JobPositionLayout>
  );
}
