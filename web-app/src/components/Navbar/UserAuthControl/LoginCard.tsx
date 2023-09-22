import Image from 'next/image';
import {useTranslation} from 'next-i18next';
import {ArrowRight} from 'tetraimpacts-components-library';

// Firebase
import useProvideAuth from 'firebaseApp/hooks/useAuth';

// Config
import {ENABLED_MODULES} from 'config/constants';

// Styles
import {
  LoginCardButton,
  LoginCardText,
  LoginCardHeaderContainer,
  LoginCard as LoginCardStyled,
  SocialLoginButton,
  TextButton,
} from './UserAuthControl.styles';

type LoginCardProps = {
  user: any;
  onLogout?: () => void;
  onLogin?: () => void;
  onSignUp?: () => void;
  onSocialNetworkLogin?: () => void;
  title?: string;
};
export default function LoginCard({
  user,
  title,
  onLogin,
  onSignUp,
  onLogout,
  onSocialNetworkLogin,
}: LoginCardProps) {
  const {signInFacebook, signInGoogle} = useProvideAuth();
  const {t} = useTranslation();
  return (
    <LoginCardStyled isAuthenticated={!!user}>
      {user ? (
        <>
          <LoginCardText fontWeight="700" fontSize="16px" lineHeight="26px">
            {t('signout-info-text')}
          </LoginCardText>
          <LoginCardButton
            primary
            afterIcon={ArrowRight}
            onClick={onLogout}
            text={t('logout') || ''}
          />
        </>
      ) : (
        <>
          <LoginCardHeaderContainer>
            <LoginCardText textAlign="left" fontWeight="700">
              {t('drawer-welcome-text')}!
            </LoginCardText>
            <LoginCardText textAlign="left" fontWeight="400">
              {title || t('login-card-text-action')}
            </LoginCardText>
          </LoginCardHeaderContainer>
          <SocialLoginButton
            onClick={() => {
              signInGoogle();
              if (onSocialNetworkLogin) onSocialNetworkLogin();
            }}
            text={t('login-google') || ''}
            beforeIconComponent={
              <Image src="/icons/social/google.svg" width={24} height={24} alt="" />
            }
            style={{
              width: '230px',
              height: '45px',
            }}
          />
          {ENABLED_MODULES.facebookAuth && (
            <SocialLoginButton
              onClick={() => {
                signInFacebook();
                if (onSocialNetworkLogin) onSocialNetworkLogin();
              }}
              text={t('login-facebook') || ''}
              beforeIconComponent={
                <Image src="/icons/social/facebook.svg" width={24} height={24} alt="" />
              }
              style={{
                width: '230px',
                height: '45px',
              }}
            />
          )}

          {ENABLED_MODULES.emailAuth && (
            <>
              <LoginCardButton
                primary
                afterIcon={ArrowRight}
                style={{justifyContent: 'flex-end'}}
                onClick={onSignUp}
                text={t('sign-up') || ''}
              />
              <LoginCardHeaderContainer userAuthControlModal>
                <LoginCardText textAlign="center" fontWeight="400">
                  {t('login-with-account') || ''}
                </LoginCardText>
                <TextButton
                  onClick={onLogin}
                  text={t('sign-in') || ''}
                  aria-label={t('sign-in') || ''}
                  presetType="text"
                  textFontWeight="700"
                  primary
                />
              </LoginCardHeaderContainer>
            </>
          )}
        </>
      )}
    </LoginCardStyled>
  );
}
