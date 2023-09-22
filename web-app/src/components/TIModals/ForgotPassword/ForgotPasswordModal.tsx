import {FormEvent} from 'react';
import {ArrowRight, Button, Input} from 'tetraimpacts-components-library';

// Hooks
import {useTranslation} from 'next-i18next';

// Components
import TIStylishModal from '../TIStylishModal/TIStylishModal';
import {InputWrapper} from './ForgotPasswordModal.styles';

// Interfaces
import {SubscriptionModalProps} from './ForgotPasswordModal.interface';

export default function ForgotPasswordModal({
  isOpen,
  setIsOpen,
  onSubscribeFormSubmit,
}: SubscriptionModalProps) {
  const {t} = useTranslation();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const verificationEmail = e.currentTarget.getElementsByTagName('input')[0].value;
    if (!verificationEmail) return undefined;
    if (onSubscribeFormSubmit) onSubscribeFormSubmit(verificationEmail);
    return undefined;
  };

  return (
    <TIStylishModal
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      title={t('forgot-password-modal-title')}
      description={t('forgot-password-modal-description')}
      mainImage={{
        url: '/illustrations/modal/manThinking.svg',
        alt: '',
      }}
      imageLaptopStyles={{
        // maxWidth: '400px',
        top: 'calc(50% - 175px)',
      }}
      imageStyles={{
        left: '0px',
        maxHeight: '350px',
      }}
    >
      <InputWrapper onSubmit={onSubmit}>
        <Input
          aria-label="email"
          maskPreset="email"
          text={t('footer-subscriber-input-text') || 'Your e-mail address'}
          type="text"
          required
        />
      </InputWrapper>

      <Button
        form="forgot-password-modal-form"
        text={t('forgot-password-modal-button') || ''}
        afterIcon={ArrowRight}
        style={{alignSelf: 'end'}}
      />
    </TIStylishModal>
  );
}
