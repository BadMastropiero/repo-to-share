import Image from 'next/image';
import {useRouter} from 'next/router';
import {ArrowRight, Button, Pill, Typography} from 'tetraimpacts-components-library';

// Config
import {careersSections, pages} from 'config/pagesUrls';

// Hooks
import {useTranslation} from 'next-i18next';

// Components
import Link from 'components/Link/Link';

// Styles
import {
  CardContentWrapper,
  CardImageContainer,
  CardTitle,
  CareersSectionCard,
  CareersSectionLayout,
  ContentPositionsContainer,
  ContentSummaryContainer,
  PositionPillsContainer,
  PositionsTitle,
} from './CareersSection.styles';

// Interfaces
import CareersSectionProps from './CareersSection.interface';

export default function CareersSection({
  positionsList,
  mainImage,
  title,
  body,
}: CareersSectionProps) {
  const {t} = useTranslation();
  const router = useRouter();

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
    <CareersSectionLayout>
      <CareersSectionCard>
        <CardImageContainer>
          <Image
            src={mainImage?.url || ''}
            alt={mainImage?.title || ''}
            title={mainImage?.title || ''}
            fill
            style={{objectFit: 'cover'}}
          />
        </CardImageContainer>
        <CardContentWrapper>
          {/* Summary container */}
          <ContentSummaryContainer>
            <CardTitle colorPreset="primary">{title}</CardTitle>
            {/* @ts-ignore */}
            <Typography preset="cardContentPrimary">{body}</Typography>
          </ContentSummaryContainer>
          {/* Positions container */}
          <ContentPositionsContainer>
            <PositionsTitle colorPreset="primary">
              {t('landing-careers-section-positions-title')}
            </PositionsTitle>
            {positionsList?.length && (
              <PositionPillsContainer role="list">
                {positionsList?.map(position => (
                  <Pill
                    text={t(position.id) || ''}
                    key={position.id}
                    onMouseUp={() => handleFilterTag(position.id)}
                    style={{cursor: 'pointer'}}
                  />
                ))}
              </PositionPillsContainer>
            )}
            <Link href={pages.CAREERS} style={{alignSelf: 'flex-end'}}>
              <Button
                text={t('landing-careers-section-discover-button') || 'DISCOVER'}
                aria-label={t('landing-careers-section-discover-button') || 'DISCOVER'}
                afterIcon={ArrowRight}
                style={{cursor: 'pointer'}}
                primary
              />
            </Link>
          </ContentPositionsContainer>
        </CardContentWrapper>
      </CareersSectionCard>
    </CareersSectionLayout>
  );
}
