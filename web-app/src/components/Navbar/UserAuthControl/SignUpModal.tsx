import {useEffect, useState} from 'react';
import {
  ArrowRight,
  Icon,
  Input,
  Option,
  Typography,
  Visibility,
} from 'tetraimpacts-components-library';

// Components
import Logo from 'components/Logo/Logo';
import Link from 'components/Link/Link';

// Hooks
import useProvideAuth from 'firebaseApp/hooks/useAuth';
import {useTranslation} from 'next-i18next';

// Config
import {pages} from 'config/pagesUrls';
import {HOST_DOMAIN} from 'config/constants';

// Styles
import {
  CloseButton,
  Divider,
  LoginCardButton,
  LoginCard,
  LoginCardText,
  LoginCardHeader,
  LoginFormInput,
  LoginModalLayout,
  LogoWrapper,
  TextTitleContainer,
  CheckOption,
  VisibilityButton,
} from './UserAuthControl.styles';

type LoginModalProps = {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
};

function SignUpModal({isOpen, setIsOpen}: LoginModalProps) {
  const {t} = useTranslation();
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState<boolean>(false);
  const [isUserAgreement, setIsUserAgreement] = useState<boolean>(false);
  const {user} = useProvideAuth();

  useEffect(() => {
    if (user) {
      setIsOpen(false);
    }
  }, [user]);

  return (
    <LoginModalLayout setIsOpen={setIsOpen} isOpen={isOpen} closeOnBackdropClick>
      <LoginCard modalWithForm>
        <LoginCardHeader>
          <LogoWrapper>
            <Logo primary height="40px" width="104px" />
          </LogoWrapper>
        </LoginCardHeader>
        <TextTitleContainer>
          <Divider />
          <LoginCardText textAlign="center" fontWeight="400">
            {t('sign-up')}
          </LoginCardText>
          <Divider />
        </TextTitleContainer>
        <LoginFormInput method="post">
          <Input
            primary
            required
            autoComplete="email"
            aria-label={t('form-email-text') || ''}
            maskPreset="email"
            text={t('form-email-text') || ''}
            type="text"
          />
          <Input
            primary
            required
            aria-label={t('login-form-password') || ''}
            maskPreset="text"
            text={t('login-form-password') || ''}
            type={isPasswordVisible ? 'text' : 'password'}
            afterComponent={
              <VisibilityButton
                role="button"
                tabIndex={0}
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                <Icon
                  disabled={!isPasswordVisible}
                  icon={Visibility}
                  width="22px"
                  height="35px"
                  primary
                />
              </VisibilityButton>
            }
          />
          <Input
            primary
            required
            aria-label={t('login-form-confirm-password') || ''}
            maskPreset="text"
            text={t('login-form-confirm-password') || ''}
            type={isConfirmPasswordVisible ? 'text' : 'password'}
            afterComponent={
              <VisibilityButton
                role="button"
                tabIndex={0}
                onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
              >
                <Icon
                  disabled={!isConfirmPasswordVisible}
                  icon={Visibility}
                  width="22px"
                  height="35px"
                  primary
                />
              </VisibilityButton>
            }
          />
        </LoginFormInput>
        <LoginCardButton
          text={t('sign-up') || ''}
          primary
          afterIcon={ArrowRight}
          style={{justifyContent: 'flex-end'}}
        />
        <CheckOption>
          <Option
            selected={isUserAgreement}
            onClick={() => setIsUserAgreement(!isUserAgreement)}
            text=""
          />
          <Typography
            fontSize="14px"
            lineHeight="100%"
            fontWeight="400"
            colorPreset="primary"
            style={{overflow: 'visible'}}
          >
            {t('user-agreement-text-start')}{' '}
            <Link
              // Open new tab without modal
              confirmModal={false}
              href={`${HOST_DOMAIN}/${pages.TERMS_CONDITIONS}`}
            >
              {t('user-agreement')}
            </Link>
            {` ${t('user-agreement-text-end')}`}
          </Typography>
        </CheckOption>
        <CloseButton
          onClick={() => setIsOpen(false)}
          aria-label={t('modal-close-button') || ''}
          text="&times;"
          presetType="text"
          primary
          style={{width: 'fit-content'}}
        />
      </LoginCard>
    </LoginModalLayout>
  );
}

export default SignUpModal;
