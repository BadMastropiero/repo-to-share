import React, {useContext, useEffect, useState} from 'react';
import {ThemeContext} from 'styled-components';
import {supportedLanguagesObjects} from 'config/language';
import {ENABLED_MODULES, SUBSCRIPTION_OFFERED_DELAY, areNoModulesEnabled} from 'config/constants';

// Components
import {
  devices,
  Icon,
  Typography,
  People,
  Graph,
  Blog,
  Communication,
  useMediaQuery,
  ViewCarrousel,
} from 'tetraimpacts-components-library';
import Logo from 'components/Logo/Logo';
import Link from 'components/Link/Link';
import LanguageSelector from 'components/LanguageSelector/LanguageSelector';
import {
  launchSubscriptionConfirmationModal,
  launchSubscriptionWithEmailModal,
} from 'components/TIModals/ModalHandler';

// Hooks
import {useScrollPosition} from 'hooks/scrollPosition';
import useLanguageSelector from 'hooks/languageSelector';
import useProvideAuth from 'firebaseApp/hooks/useAuth';

// Translation
import {useTranslation} from 'next-i18next';

// Constants & utils
import {SUBSCRIPTION_OFFERED, SUBSCRIPTION_OFFERED_EXPIRATION_DAYS} from 'config/cookies';
import {getCookie, setCookie} from 'utils/cookiesHandler';
import {isSubscribed} from 'firebaseApp/users/userData';
import {User} from 'firebase/auth';
import UserAuthControl from './UserAuthControl/UserAuthControl';

// Interfaces
import NavbarProps from './Navbar.interface';

// Styles
import {
  CustomNavButton,
  NabvarLeft,
  NavbarContentContainer,
  NavbarItemContainer,
  NavbarRightContent,
  StyledMobileNavbar,
  StyledNavbar,
  StyledNavbarWrapper,
} from './Navbar.styles';

function Navbar({
  primary,
  backgroundStyle,
  homeUrl = '',
  aboutUsUrl = '',
  blogsUrl = '',
  careersUrl = '',
  contactUsUrl = '',
  servicesUrl = '',
  activeUrl = 'none',
}: NavbarProps) {
  const [isTabletScreen] = useMediaQuery(devices.tablet);
  const {colors} = useContext(ThemeContext);

  const [selectedLanguage, setSelectedLanguage] = useLanguageSelector();
  const {t} = useTranslation();

  const [visible, setVisible] = useState(true);
  const [isTopPosition, setIsTopPosition] = useState(true);
  const {user} = useProvideAuth();

  const logoBGFilterColors = isTopPosition
    ? undefined
    : {
        primaryColor: colors.primary800,
        secondaryColor: colors.primaryBg,
      };

  const navLinks = [
    {
      name: t('navbar-services-button-label').toLowerCase() || 'SERVICES',
      icon: Graph,
      url: servicesUrl,
      ariaLabel: t('aria-go-services-page'),
      enabled: ENABLED_MODULES.services,
    },
    {
      name: t('navbar-about-button-label').toLowerCase() || 'ABOUT',
      icon: People,
      url: aboutUsUrl,
      ariaLabel: t('aria-go-about-page'),
      enabled: ENABLED_MODULES.aboutUs,
    },
    {
      name: 'blogs',
      icon: Blog,
      url: blogsUrl,
      ariaLabel: t('aria-go-blogs-page'),
      enabled: ENABLED_MODULES.blogs,
    },
    {
      name: t('navbar-careers-button-label').toLowerCase() || 'CAREERS',
      icon: ViewCarrousel,
      url: careersUrl,
      ariaLabel: t('aria-go-careers-page'),
      enabled: ENABLED_MODULES.careers,
    },
    {
      name: t('navbar-contact_us-button-label').toLowerCase() || 'CONTACT US',
      icon: Communication,
      url: contactUsUrl,
      ariaLabel: t('aria-go-contact-page'),
      enabled: ENABLED_MODULES.contactUs && isTabletScreen,
    },
  ];

  useScrollPosition(
    ({prevPos, currPos}) => {
      const isShow = currPos.y > prevPos.y;
      const isTop = currPos.y >= -50;
      setIsTopPosition(isTop);
      if (isShow !== visible) setVisible(isShow);
    },
    [visible],
    false,
    false,
    300
  );

  const checkSubscriptionOffered = async (currUser?: User) => {
    const subscriptionOffered = getCookie(SUBSCRIPTION_OFFERED);
    if (subscriptionOffered) return;
    setCookie(
      SUBSCRIPTION_OFFERED,
      'true',
      new Date(Date.now() + SUBSCRIPTION_OFFERED_EXPIRATION_DAYS * 864e5).toUTCString(),
      '/'
    );
    if (!currUser) {
      setTimeout(() => {
        launchSubscriptionWithEmailModal();
      }, SUBSCRIPTION_OFFERED_DELAY);

      return;
    }
    if (await isSubscribed(currUser)) return;
    setTimeout(() => {
      launchSubscriptionConfirmationModal();
    }, SUBSCRIPTION_OFFERED_DELAY);
  };

  useEffect(() => {
    checkSubscriptionOffered(user || undefined);
  }, [user]);

  return (
    <>
      {!isTabletScreen && (
        <StyledMobileNavbar visible={visible} isTopPosition={isTopPosition} isPrimary={primary}>
          {ENABLED_MODULES.auth ? (
            <div style={{flex: 1, display: 'flex', justifyContent: 'flex-start'}}>
              <UserAuthControl
                defaultAvatarBgFilter={logoBGFilterColors}
                isDrawerVisible={visible}
                isMobileMScreen={isTabletScreen}
                primary={primary}
              />
            </div>
          ) : (
            <span style={{flex: 1}} />
          )}
          <Link
            href={homeUrl}
            aria-label={t('aria-go-home-page')}
            style={{flex: 1, display: 'flex', justifyContent: 'center'}}
          >
            <Logo
              primary={primary}
              width="78px"
              height="30px"
              backgroundFilter={logoBGFilterColors}
            />
          </Link>
          <div style={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
            <LanguageSelector
              primary={primary}
              selected={selectedLanguage}
              options={supportedLanguagesObjects}
              setSelected={setSelectedLanguage}
            />
          </div>
        </StyledMobileNavbar>
      )}
      <StyledNavbarWrapper
        visible={visible}
        isTopPosition={isTopPosition}
        primary={primary}
        backgroundStyle={backgroundStyle}
      >
        <NavbarContentContainer>
          <StyledNavbar
            style={{display: areNoModulesEnabled && !isTabletScreen ? 'none' : undefined}}
          >
            {isTabletScreen ? (
              <>
                <Link href={homeUrl} aria-label={t('aria-go-home-page')}>
                  <Logo
                    primary={primary}
                    width="122px"
                    height="47px"
                    backgroundFilter={logoBGFilterColors}
                  />
                </Link>
                <NabvarLeft>
                  {navLinks.map(
                    element =>
                      element.enabled && (
                        <Link
                          href={element.url}
                          scroll={false}
                          aria-label={element.ariaLabel}
                          key={element.name}
                        >
                          <CustomNavButton
                            isActive={activeUrl === element.url}
                            primary={primary}
                            text={element.name}
                            icon={element.icon}
                          />
                        </Link>
                      )
                  )}
                </NabvarLeft>
                <NavbarRightContent>
                  <LanguageSelector
                    primary={primary}
                    selected={selectedLanguage}
                    options={supportedLanguagesObjects}
                    setSelected={setSelectedLanguage}
                  />
                  {ENABLED_MODULES.auth && (
                    <UserAuthControl
                      defaultAvatarBgFilter={logoBGFilterColors}
                      isMobileMScreen={isTabletScreen}
                      primary={primary}
                    />
                  )}
                </NavbarRightContent>
              </>
            ) : (
              navLinks.map(
                element =>
                  element.enabled && (
                    <Link
                      href={element.url}
                      scroll={false}
                      aria-label={element.ariaLabel}
                      key={element.name}
                    >
                      <NavbarItemContainer>
                        <Icon primary icon={element.icon} />
                        <Typography
                          textTransform="capitalize"
                          fontWeight="400"
                          fontSize="12px"
                          lineHeight="24px"
                        >
                          {element.name}
                        </Typography>
                      </NavbarItemContainer>
                    </Link>
                  )
              )
            )}
          </StyledNavbar>
        </NavbarContentContainer>
      </StyledNavbarWrapper>
    </>
  );
}

export default Navbar;
