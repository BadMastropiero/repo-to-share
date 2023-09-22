import Image from 'next/image';

// Components
import ReactMarkdown from 'components/ReactMarkdown/ReactMarkdown';

// Config
import {ENABLED_MODULES} from 'config/constants';

// Hooks
import {useTranslation} from 'next-i18next';

// Styles
import {
  DescriptionContainer,
  HeadingContainer,
  IllustrationContainer,
  PageTitle,
  SkillCard,
  SkillCardContainer,
  StyledContainer,
} from './Service.styles';

// Interfaces
import IServiceDetail from './Service.interface';

export default function Service({service, contentImgUrl, showCalendlyWidget}: IServiceDetail) {
  const {
    detailedInfo,
    title,
    categoriesCollection: {items: categories},
  } = service;

  const {t} = useTranslation();

  return (
    <StyledContainer withBottomPadding={!ENABLED_MODULES.calendlyAsWidget || !showCalendlyWidget}>
      <PageTitle colorPreset="primary" variant="h1">
        {title}
      </PageTitle>
      <HeadingContainer>
        <DescriptionContainer>
          <ReactMarkdown content={detailedInfo} />
        </DescriptionContainer>
        <IllustrationContainer>
          <Image
            src={contentImgUrl || ''}
            fill
            style={{objectFit: 'contain'}}
            alt={t('service-detail-main-img')}
            title={'service-detail-main-img' || ''}
            priority
          />
        </IllustrationContainer>
      </HeadingContainer>
      <SkillCardContainer>
        {categories.length !== 0 &&
          categories.map(category => (
            <SkillCard key={category.sys.id} alwaysShowRibbon="left" primary>
              <ReactMarkdown content={`__${category.name}.__ ${category.description}`} />
            </SkillCard>
          ))}
      </SkillCardContainer>
    </StyledContainer>
  );
}
