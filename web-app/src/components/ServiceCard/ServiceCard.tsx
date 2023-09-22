import {useEffect, useState} from 'react';
/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image';
import {ArrowRight, Button, Typography} from 'tetraimpacts-components-library';

// Components
import Link from 'components/Link/Link';

// Hooks
import {useTranslation} from 'next-i18next';

// Config
import {pages} from 'config/pagesUrls';

// Components
import ReactMarkdown from 'components/ReactMarkdown/ReactMarkdown';

// Styles
import {
  CardFooter,
  CardHeading,
  CardImageContainer,
  ContentDescription,
  ServiceCardContentWrapper,
  ServiceTag,
  ServiceTagsContainer,
  StyledServiceCard,
  CardTitle,
} from './ServiceCard.styles';

// Interfaces
import ServiceCardProps from './ServiceCard.interface';

export default function ServiceCard({
  imageUrl,
  imageAlt,
  title,
  body,
  topDistance,
  width,
  height,
  invertedFooterContent,
  slug,
  showGoToButton,
  showCategories,
  categories,
  redirectable,
  style,
  onClick,
}: ServiceCardProps) {
  const [serviceSlug, setServiceSlug] = useState<string | undefined>(undefined);

  const {t} = useTranslation();

  useEffect(() => {
    setServiceSlug(slug);
    return () => setServiceSlug(undefined);
  }, [slug]);

  return (
    <StyledServiceCard
      variant="service"
      topDistance={topDistance}
      width={width}
      height={height}
      style={style}
    >
      <Link href={`${pages.SERVICES}/${slug}`} style={{height: '100%'}} disabled={!redirectable}>
        <ServiceCardContentWrapper>
          <CardHeading>
            <CardTitle
              variant="h1"
              // customPreset="serviceTitle"
              preset="subtitle"
              colorPreset="primary"
            >
              {title}
            </CardTitle>
            {showGoToButton && (
              <Button
                beforeIconComponent={<ArrowRight width="16px" height="16px" primary />}
                style={{width: '36px', height: '36px'}}
                aria-label={t('go-to-service-detail') || ''}
              />
            )}
          </CardHeading>
          <ContentDescription>
            <ReactMarkdown content={`${body}` ?? ''} />
          </ContentDescription>
          <CardFooter invertedContent={invertedFooterContent}>
            <CardImageContainer imageSlug={serviceSlug} inverted={invertedFooterContent}>
              <Image
                width={200}
                height={210}
                alt={imageAlt}
                title={imageAlt}
                src={imageUrl}
                priority
                style={{
                  objectFit: 'contain',
                }}
              />
            </CardImageContainer>
            <ServiceTagsContainer>
              {showCategories &&
                categories?.map(category => (
                  <ServiceTag key={category.name} colorPreset="primary">
                    {category.name}
                  </ServiceTag>
                ))}
            </ServiceTagsContainer>
          </CardFooter>
        </ServiceCardContentWrapper>
      </Link>
    </StyledServiceCard>
  );
}
