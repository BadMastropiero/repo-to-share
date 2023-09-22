import {Typography} from 'tetraimpacts-components-library';

// Hooks
import {useTranslation} from 'next-i18next';

// Styles
import {
  ContentWrapper,
  CustomTypography,
  EndPageContainer,
  EndPageImage,
  EndPageImageContainer,
  TextWrapper,
} from './EndPageContent.styles';

// Interface
import IEndPageContent from './EndPageContent.interface';

export default function EndPageContent({content, contentImageUrl}: IEndPageContent) {
  const {t} = useTranslation();
  return (
    <ContentWrapper>
      <EndPageContainer>
        <EndPageImageContainer>
          {contentImageUrl && (
            <EndPageImage
              width={271}
              height={304}
              src={contentImageUrl}
              alt={t('about-staff-members-image')}
              title=""
            />
          )}
        </EndPageImageContainer>
        <TextWrapper>
          <Typography
            fontFamily="Teko"
            fontWeight="500"
            fontSize="60px"
            lineHeight="100%"
            textAlign="center"
            textTransform="uppercase"
          >
            Tetraimpacts
          </Typography>
          <CustomTypography colorPreset="secondary">{content && `${content}`}</CustomTypography>
        </TextWrapper>
      </EndPageContainer>
    </ContentWrapper>
  );
}
