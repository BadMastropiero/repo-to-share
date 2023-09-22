import Image from 'next/image';
import {useRouter} from 'next/router';
import {Close, Pill, Typography} from 'tetraimpacts-components-library';

// Config
import {careersSections, pages} from 'config/pagesUrls';

// Components
import Debris from 'modules/landing/application/Debris/Debris';
import StepCard from 'components/StepCard/StepCard';
import SkillBookmark from 'components/SkillBookmark/SkillBookmark';
import Link from 'components/Link/Link';
import {NoContentText} from 'modules/blogs/application/BlogsList/BlogsList.styles';

// Hooks
import {useTranslation} from 'next-i18next';

// Styles
import {DebrisWrapper} from 'modules/landing/application/Planet/Planet.styles';
import {
  CareersStyledContainer,
  DescriptionContainer,
  FilterTagsContainer,
  HeadingContainer,
  IllustrationContainer,
  PageTitle,
  SkillBookmarkContainer,
  SkillsBookmarksTitle,
  StepCardsContainer,
  StepsContainer,
  StepsContainerTitle,
} from './Careers.styles';

// Interfaces
import CareersProps from './Careers.interface';

export default function Careers({
  title,
  subtitle,
  body,
  mainImage,
  jobsSteps,
  jobsPosititons,
  selectedTags,
}: CareersProps) {
  const {t} = useTranslation();
  const router = useRouter();

  const handleTagFilter = (list: string[]) => {
    const {pathname} = router;
    router.push(
      {
        pathname,
        query: {
          tags: list?.join() || null,
        },
      },
      undefined,
      {scroll: false}
    );
  };

  const handleRemoveFilterTag = (tag: string) => {
    if (selectedTags !== null) handleTagFilter([...selectedTags.filter(item => item !== tag)]);
  };

  return (
    <CareersStyledContainer>
      <HeadingContainer>
        <DescriptionContainer>
          <PageTitle variant="h1" colorPreset="primary">
            {title}
          </PageTitle>
          <IllustrationContainer>
            <Image
              src={mainImage.url || ''}
              fill
              style={{objectFit: 'contain'}}
              alt=""
              title={mainImage.title || ''}
              priority
            />
          </IllustrationContainer>
          <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <Typography fontSize="20px" lineHeight="40px" fontWeight="700">
              {subtitle}
            </Typography>
            <Typography fontWeight="400" fontSize="20px" lineHeight="32px" colorPreset="primary">
              {body}
            </Typography>
          </div>
          {/* <ReactMarkdown content={body} /> */}
        </DescriptionContainer>
      </HeadingContainer>
      <StepsContainer>
        <DebrisWrapper
          style={{width: 'unset', left: '40px', top: '0px', zIndex: 1, pointerEvents: 'none'}}
        >
          <Debris />
        </DebrisWrapper>
        <StepsContainerTitle>{t('careers-steps-card-title')}</StepsContainerTitle>
        <StepCardsContainer>
          {jobsSteps.map(step => (
            <StepCard
              key={step.title}
              title={step.title}
              subtitle={step.subtitle}
              body={step.body}
            />
          ))}
        </StepCardsContainer>
      </StepsContainer>
      <SkillsBookmarksTitle colorPreset="primary" id={careersSections.JOBS_OFFERS}>
        {t('careers-skills-bookmarks-title')}
      </SkillsBookmarksTitle>
      <FilterTagsContainer>
        {selectedTags &&
          selectedTags.map(tag => (
            <Pill
              key={tag}
              aria-label={t(tag) || ''}
              text={t(tag) || ''}
              afterIcon={Close}
              onAfterIconClick={() => handleRemoveFilterTag(tag)}
              afterIconStyles={{cursor: 'pointer'}}
            />
          ))}
      </FilterTagsContainer>
      <SkillBookmarkContainer>
        {jobsPosititons && jobsPosititons.length !== 0 ? (
          jobsPosititons.map(job => (
            <Link key={job.slug} href={`${pages.CAREERS}/${job.slug}`}>
              <SkillBookmark
                content={`__${job.title}.__ ${job.jobProfile}`}
                perks={job.perks}
                isClickable
              />
            </Link>
          ))
        ) : (
          <NoContentText style={{alignSelf: 'center'}}>{t('no-job-offers-result')}</NoContentText>
        )}
      </SkillBookmarkContainer>
    </CareersStyledContainer>
  );
}
