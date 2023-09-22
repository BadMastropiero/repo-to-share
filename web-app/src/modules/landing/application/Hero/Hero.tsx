// Components
import {
  ArrowRight,
  Button,
  devices,
  Typography,
  useMediaQuery,
} from 'tetraimpacts-components-library';
import TypeWriterContent from 'components/TypeWriterContent/TypeWriterContent';

// Translation
import {useTranslation} from 'next-i18next';
import Link from 'next/link';

// Interfaces
import HeroProps from './Hero.interface';

// Styles
import {HeroContainer, HeroFrame, HeroTitle, TetraimpactsTitle} from './Hero.styles';

function Hero({
  title = 'Tetraimpacts',
  subtitle = '',
  body = '',
  buttonText = '',
  buttonLink = '#',
  fancy = false,
}: HeroProps) {
  const words = [
    'landing-hero-slogan-project',
    'landing-hero-slogan-idea',
    'landing-hero-slogan-skill',
    'landing-hero-slogan-team',
    'landing-hero-slogan-story',
  ];
  const [isTabletScreen] = useMediaQuery(devices.tablet);
  const {t} = useTranslation();

  return (
    <HeroContainer>
      <HeroFrame>
        <HeroTitle>
          <TetraimpactsTitle preset="title" textTransform="uppercase" variant="h1" fancy={fancy}>
            {title}
          </TetraimpactsTitle>
          <TypeWriterContent
            words={words.map(word => t(word))}
            fontSize={isTabletScreen ? '50px' : '30px'}
            style={{
              minHeight: !isTabletScreen ? '75px' : 0, // Avoid shifting the page content when text is on two lines
            }}
            phrase={
              subtitle || t('landing-logo-slogan-start') || 'How Tetraimpacts helps you shape'
            }
          />
        </HeroTitle>
        <Typography
          colorPreset="secondary"
          fontFamily="Roboto Flex"
          fontSize="20px"
          fontWeight="normal"
          lineHeight="150%"
          padding="0px"
          preset="subtitle"
          textAlign="center"
          textTransform=""
          variant="p"
          style={{whiteSpace: 'pre-wrap'}}
        >
          {body || t('hero-body-text')}
        </Typography>
        <Link href={buttonLink} style={{marginTop: '30px'}}>
          <Button
            style={{cursor: 'pointer'}}
            text={buttonText || t('landing-logo-button-label') || "Let's get in shape"}
            afterIcon={ArrowRight}
          />
        </Link>
      </HeroFrame>
    </HeroContainer>
  );
}

export default Hero;
