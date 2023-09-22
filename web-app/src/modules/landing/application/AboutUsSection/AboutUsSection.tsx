import {ThemeContext} from 'styled-components';
import {useContext} from 'react';

// Config
import {pages} from 'config/pagesUrls';
import Image from 'next/image';

// Translation
import {useTranslation} from 'next-i18next';

// Components
import Link from 'next/link';
import {ArrowRight, Button, Typography} from 'tetraimpacts-components-library';
import AboutUsProps from './AboutUsSection.interface';

// Styles
import {
  MainImgContainer,
  SecondImgContainer,
  SectionDetails,
  SectionFrame,
  SectionInfo,
} from './AboutUsSection.styles';

function AboutUsSection({
  mainImg = {title: '', url: ''},
  secondImg = {title: '', url: ''},
  title = '',
  // subtitle = '',
  body = '',
}: AboutUsProps) {
  const {t} = useTranslation();
  const {colors} = useContext(ThemeContext);

  return (
    <SectionFrame>
      <MainImgContainer hideMobile>
        <Image
          alt="WIP"
          fill
          src={mainImg.url}
          style={{
            objectFit: 'contain',
          }}
        />
      </MainImgContainer>
      <SectionInfo>
        <SectionDetails>
          <Typography
            preset="title"
            customColor={colors.blueHighLight}
            fontSize="60px"
            lineHeight="86px"
            fontWeight="500"
            textAlign="center"
          >
            {title}
          </Typography>
          <Typography variant="content" colorPreset="secondary">
            {body}
          </Typography>
          <Link href={pages.ABOUT_US} style={{marginTop: '10px'}}>
            <Button
              primary
              text={t('landing-about-us-button-label') || 'Learn more'}
              afterIcon={ArrowRight}
              style={{cursor: 'pointer'}}
            />
          </Link>
          <MainImgContainer style={{marginTop: '20px'}}>
            <Image
              alt="WIP"
              fill
              src={mainImg.url}
              style={{
                objectFit: 'contain',
              }}
            />
          </MainImgContainer>
        </SectionDetails>
        {secondImg.url && (
          <SecondImgContainer>
            <Image
              alt="WIP"
              fill
              src={secondImg.url}
              style={{
                objectFit: 'contain',
              }}
            />
          </SecondImgContainer>
        )}
      </SectionInfo>
    </SectionFrame>
  );
}

export default AboutUsSection;
