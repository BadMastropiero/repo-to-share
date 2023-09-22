import Image from 'next/image';

// Hooks
import {useTranslation} from 'next-i18next';

// Components
import ReactMarkdown from 'components/ReactMarkdown/ReactMarkdown';

// Styles
import {
  HeadingContainer,
  HeadingContentContainer,
  HeadingTitle,
  IllustrationContainer,
  StyledAboutUsContainer,
  SummaryContainer,
} from './AboutUs.styles';

// Interfaces
import IAboutUs from './AboutUs.interface';

export default function AboutUs({headingImage, title, summary}: IAboutUs) {
  const {t} = useTranslation();
  return (
    <StyledAboutUsContainer>
      <HeadingContainer>
        <HeadingTitle colorPreset="primary" variant="h1">
          {title}
        </HeadingTitle>
        <HeadingContentContainer>
          <SummaryContainer>
            <ReactMarkdown content={summary} />
          </SummaryContainer>
          <IllustrationContainer>
            <Image
              src={headingImage || ''}
              width={250}
              height={250}
              alt={t('about-plant-image')}
              title={`${t('about-plant-image')}`}
            />
          </IllustrationContainer>
        </HeadingContentContainer>
      </HeadingContainer>
    </StyledAboutUsContainer>
  );
}
