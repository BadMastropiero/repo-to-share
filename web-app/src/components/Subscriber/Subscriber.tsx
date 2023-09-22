import React from 'react';

// Components
import {Typography} from 'tetraimpacts-components-library';

// Translation
import {useTranslation} from 'next-i18next';

// Hooks
import useProvideAuth from 'firebaseApp/hooks/useAuth';

// Methods
import {handleSubscriptionFlow} from 'components/TIModals/ModalHandler';

// Styles
import {StyledSubscriber, SubscriberButton} from './Subscriber.styles';

function Subscriber() {
  const {t} = useTranslation();
  const {user} = useProvideAuth();

  return (
    <StyledSubscriber>
      <Typography
        colorPreset="secondary"
        fontSize="40px"
        fontWeight="700"
        lineHeight="40px"
        preset="title"
        variant="h1"
      >
        {/* ! Warn: long texts here can cause the footer's SocialMediaContainer
         to spread vertically */}
        {t('footer-subscriber-message-text') || 'Subscribe to get in shape...'}
      </Typography>
      <SubscriberButton
        aria-label="subscribe now"
        presetSize="large"
        text={t('footer-subscriber-button-text') || 'Subscribe now'}
        onClick={() => handleSubscriptionFlow(user)}
        primary
      />
    </StyledSubscriber>
  );
}

export default Subscriber;
