import {useRef} from 'react';
import {ENABLED_MODULES} from 'config/constants';

// Hooks
import {useTranslation} from 'next-i18next';
import useOnClickOutside from 'hooks/clickOutside';

// Components
import Link from 'components/Link/Link';
import Image from 'next/image';
import {
  Icon,
  MailEnvelope,
  PhoneInCall,
  SocialButton,
  Typography,
} from 'tetraimpacts-components-library';

// Methods
import {handleSubscriptionFlow} from 'components/TIModals/ModalHandler';

// Styles
import {
  ContactCard,
  ContactContainer,
  DrawerSubscribeButton,
  // ContentContainer,
  SocialMediaContainer,
  StyledDrawerWrapper,
  TextButton,
  TextContainer,
  UserInfoContainer,
} from './Drawer.styles';

// Interfaces
import IDrawer from './Drawer.interface';

export default function Drawer({
  showDrawer,
  user,
  email,
  phoneNumber,
  socialNetworks,
  primary,
  setModalOpen,
  setShowDrawer,
}: IDrawer) {
  const {t} = useTranslation();

  const ref = useRef<any>();
  useOnClickOutside(ref, () => setShowDrawer(false));

  return (
    <StyledDrawerWrapper visible={showDrawer} ref={ref} primary={primary}>
      <UserInfoContainer>
        <Image
          width={51}
          height={51}
          src={user?.photoURL || '/illustrations/generic_avatar.png'}
          alt={t('user-photo')}
          style={{
            borderRadius: '50%',
          }}
        />
        <TextContainer>
          <Typography
            fontWeight="300"
            fontSize="12px"
            lineHeight="14px"
            colorPreset={!primary ? 'primary' : 'secondary'}
          >
            {t('drawer-welcome-text')}
          </Typography>
          <Typography
            fontWeight="600"
            fontSize="18px"
            lineHeight="21px"
            colorPreset={!primary ? 'primary' : 'secondary'}
          >
            {user?.displayName}
          </Typography>
        </TextContainer>
      </UserInfoContainer>
      {/* <ContentContainer>
        <Typography
          fontWeight="600"
          fontSize="16px"
          lineHeight="19px"
          colorPreset={!primary ? 'primary' : 'secondary'}
        >
          {t('navbar-drawer-groups')}
        </Typography>
        <Typography
          fontWeight="600"
          fontSize="16px"
          lineHeight="19px"
          colorPreset={!primary ? 'primary' : 'secondary'}
        >
          {t('navbar-drawer-events')}
        </Typography>
      </ContentContainer> */}

      <div
        style={{display: 'flex', flexDirection: 'column', gap: '50px', alignItems: 'flex-start'}}
      >
        <ContactContainer>
          <Typography
            fontWeight="600"
            fontSize="16px"
            lineHeight="19px"
            colorPreset={!primary ? 'primary' : 'secondary'}
          >
            {t('drawer-write-us')}
          </Typography>

          <ContactCard href={`mailto: ${email}`} $isPrimary={primary}>
            <Icon icon={MailEnvelope} primary={!primary} />
            <Typography
              fontWeight="500"
              fontSize="12px"
              lineHeight="14px"
              colorPreset="secondary"
              customColor={primary ? undefined : 'primary'}
            >
              {email}
            </Typography>
          </ContactCard>
          <ContactCard href={`tel: ${phoneNumber}`} $isPrimary={primary}>
            <Icon icon={PhoneInCall} primary={!primary} />
            <Typography
              fontWeight="500"
              fontSize="12px"
              lineHeight="14px"
              colorPreset="secondary"
              customColor={primary ? undefined : 'primary'}
            >
              {phoneNumber}
            </Typography>
          </ContactCard>
          {ENABLED_MODULES.subscribe && (
            <DrawerSubscribeButton
              aria-label="subscribe now"
              presetSize="normal"
              text={t('drawer-subscribe-button-text') || 'Subscribe now'}
              onClick={() => handleSubscriptionFlow(user)}
              primary
            />
          )}

          <SocialMediaContainer>
            {socialNetworks?.length !== 0 &&
              socialNetworks?.map(item => (
                <Link href={item.link} key={item.name}>
                  <SocialButton
                    aria-label={item.name}
                    primary={primary}
                    icon={item.icon}
                    presetSize="small"
                  />
                </Link>
              ))}
          </SocialMediaContainer>
        </ContactContainer>
        <TextButton
          presetType="text"
          primaryTextColor={!primary}
          onClick={() => setModalOpen(true)}
          text={!user ? `${t('login')}` : `${t('logout')}`}
        />
      </div>
    </StyledDrawerWrapper>
  );
}
