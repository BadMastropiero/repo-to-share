import React, {useContext, useEffect, useState} from 'react';
import {ThemeContext} from 'styled-components';
import Link from 'components/Link/Link';
import {ENABLED_MODULES} from 'config/constants';

// Components
import {
  Facebook,
  Instagram,
  Linkedin,
  PhoneInCall,
  SocialButton,
  Twitter,
  Bookmark,
  MailSend,
  Typography,
  devices,
  useMediaQuery,
} from 'tetraimpacts-components-library';
import Subscriber from 'components/Subscriber/Subscriber';
import ParallelList from 'components/ParallelList/ParallelList';
import Logo from 'components/Logo/Logo';

// Translation
import {useTranslation} from 'next-i18next';

// Styles
import {
  AppDataContainer,
  InfoContainer,
  LegalContainer,
  LogoWrapper,
  SocialButtons,
  SocialMediaContainer,
  StyledFooter,
  SubscriberContainer,
} from './Footer.styles';

// Interfaces
import FooterProps from './Footer.interface';

function Footer({
  phoneNumber,
  email,
  facebookUrl = '',
  instagramUrl = '',
  linkedInUrl = '',
  privacyPolicyUrl = '',
  termsConditionsUrl = '',
  twitterUrl = '',
}: FooterProps) {
  const [socialPresetSize, setSocialPresetSize] = useState<'normal' | 'large'>('normal');
  const {colors} = useContext(ThemeContext);
  const [isTabletScreen] = useMediaQuery(devices.tablet);

  const {t} = useTranslation();

  useEffect(() => {
    setSocialPresetSize(isTabletScreen ? 'large' : 'normal');
  }, [isTabletScreen]);

  return (
    <StyledFooter>
      {(isTabletScreen || !ENABLED_MODULES.auth) && (
        <AppDataContainer twoCols={!ENABLED_MODULES.subscribe}>
          <SocialMediaContainer>
            <LogoWrapper>
              <Logo customColor={colors?.primary25} width="209" height="80" />
            </LogoWrapper>
            <SocialButtons>
              <Link href={linkedInUrl || {}} disabled={!linkedInUrl}>
                <SocialButton
                  aria-label="linkedin"
                  primary
                  icon={Linkedin}
                  presetSize={socialPresetSize}
                  disabled={!linkedInUrl}
                />
              </Link>

              <Link href={instagramUrl} disabled={!instagramUrl}>
                <SocialButton
                  aria-label="instagram"
                  primary
                  icon={Instagram}
                  presetSize={socialPresetSize}
                  disabled={!instagramUrl}
                />
              </Link>

              <Link href={facebookUrl} disabled={!facebookUrl}>
                <SocialButton
                  aria-label="facebook"
                  primary
                  icon={Facebook}
                  presetSize={socialPresetSize}
                  disabled={!facebookUrl}
                />
              </Link>

              <Link href={twitterUrl} disabled={!twitterUrl}>
                <SocialButton
                  aria-label="twitter"
                  primary
                  icon={Twitter}
                  presetSize={socialPresetSize}
                  disabled={!twitterUrl}
                />
              </Link>
            </SocialButtons>
          </SocialMediaContainer>

          <InfoContainer>
            <Bookmark primary beforeIcon={MailSend} text={email} href={`mailto: ${email}`} />
            <Bookmark
              primary
              beforeIcon={PhoneInCall}
              text={phoneNumber}
              href={`tel: ${phoneNumber}`}
            />
          </InfoContainer>

          {ENABLED_MODULES.subscribe && (
            <SubscriberContainer>
              <Subscriber />
            </SubscriberContainer>
          )}
        </AppDataContainer>
      )}

      <LegalContainer>
        <ParallelList joinBy={<Typography>•</Typography>}>
          <Typography colorPreset="secondary">2022 © TETRAIMPACTS</Typography>

          <Typography colorPreset="secondary">{t('footer-rights-reservation')}</Typography>

          <Link href={privacyPolicyUrl}>
            <Typography colorPreset="secondary">{t('footer-privacy-policy')}</Typography>
          </Link>

          <Link href={termsConditionsUrl}>
            <Typography colorPreset="secondary">{t('footer-terms-conditions')}</Typography>
          </Link>
        </ParallelList>
      </LegalContainer>
    </StyledFooter>
  );
}

export default Footer;
