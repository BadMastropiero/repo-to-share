import {useEffect, useState} from 'react';
import {ArrowRight, Icon, Input, Typography, Visibility} from 'tetraimpacts-components-library';

// Components
import Logo from 'components/Logo/Logo';
import ForgotPasswordModal from 'components/TIModals/ForgotPassword/ForgotPasswordModal';

// Hooks
import useProvideAuth from 'firebaseApp/hooks/useAuth';
import {useTranslation} from 'next-i18next';

// Styles
import {
  CloseButton,
  Divider,
  LoginCardButton,
  LoginCard,
  LoginCardText,
  LoginFormInput,
  LoginModalLayout,
  TextTitleContainer,
  LogoWrapper,
  TextButton,
  VisibilityButton,
} from './UserAuthControl.styles';

type LoginModalProps = {
  title?: string;
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
};

function LoginModal({isOpen, title, setIsOpen}: LoginModalProps) {
  const {t} = useTranslation();
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const {user} = useProvideAuth();

  useEffect(() => {
    if (user) {
      setIsOpen(false);
    }
  }, [user]);

  return (
    <>
      <LoginModalLayout setIsOpen={setIsOpen} isOpen={isOpen} closeOnBackdropClick>
        <LoginCard modalWithForm>
          <LogoWrapper>
            <Logo primary height="40px" width="104px" />
          </LogoWrapper>
          <TextTitleContainer>
            <Divider />
            <LoginCardText textAlign="center" fontWeight="400">
              {t('sign-in')}
            </LoginCardText>
            <Divider />
          </TextTitleContainer>
          {title && (
            <Typography colorPreset="primary" fontWeight="600" fontSize="18px">
              {title}!
            </Typography>
          )}
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
          </LoginFormInput>
          <LoginCardButton
            text={t('sign-in') || ''}
            primary
            afterIcon={ArrowRight}
            style={{justifyContent: 'flex-end'}}
          />
          <TextButton
            aria-label={t('login-forgot-your-password') || ''}
            text={t('login-forgot-your-password') || ''}
            presetType="text"
            textUnderline
            primary
            onClick={() => {
              setIsOpen(false);
              setIsModalOpen(true);
            }}
          />
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
      <ForgotPasswordModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
}

export default LoginModal;
