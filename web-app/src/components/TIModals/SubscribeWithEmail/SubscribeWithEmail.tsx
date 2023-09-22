import {FormEvent, useState} from 'react';
import {Button, Input, MailEnvelope, MailSend} from 'tetraimpacts-components-library';

// Hooks
import {useTranslation} from 'next-i18next';

// Components
import TIStylishModal from '../TIStylishModal/TIStylishModal';

// Styles
import {InputWrapper} from './SubscribeWithEmail.styles';

// Interfaces
import {SubscriptionModalProps} from './SubscribeWithEmail.interface';

export default function SubscribeWithEmail({
  isOpen,
  setIsOpen,
  onSubscribeFormSubmit,
}: SubscriptionModalProps) {
  const {t} = useTranslation();
  const [isWorking, setIsWorking] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsWorking(true);
    // Logic to handle the 'subscription' form submit
    // @ts-ignore
    const userName = e.target?.elements?.user_name?.value;
    // @ts-ignore
    const userEmail = e.target?.elements?.user_email?.value;
    if (!userName || !userEmail) return;
    if (onSubscribeFormSubmit) await onSubscribeFormSubmit(userEmail, userName);
    setIsWorking(false);
  };

  return (
    <TIStylishModal
      isWorking={isWorking}
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      title={t('subscription-modal-title')}
      description={t('subscription-modal-description')}
      mainImage={{
        url: '/illustrations/modal/womanWorking.svg',
        alt: '',
      }}
      imageLaptopStyles={{
        maxWidth: '400px',
        left: '-20px',
        top: 'calc(50% - 150.5px)',
      }}
    >
      <InputWrapper onSubmit={onSubmit}>
        <Input
          id="user_name"
          aria-label="name"
          maskPreset="text"
          text={t('modal-username-input-text') || 'Your name'}
          type="text"
          required
        />
        <Input
          id="user_email"
          aria-label="email"
          maskPreset="email"
          text={t('footer-subscriber-input-text') || 'Your e-mail address'}
          type="text"
          required
          afterComponent={
            <Button
              type="submit"
              afterIcon={isWorking ? MailEnvelope : MailSend}
              style={{height: '36px', width: '36px'}}
              aria-label="submit"
              disabled={isWorking}
            />
          }
        />
      </InputWrapper>
    </TIStylishModal>
  );
}
