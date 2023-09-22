import {useEffect, useState} from 'react';
import {axiosI} from 'apiHandlers/axiosI';

// Hooks
import {useTranslation, i18n} from 'next-i18next';
import useProvideAuth from 'firebaseApp/hooks/useAuth';

// Auth Data
import {User} from 'firebase/auth';
import {isEmailEnrolled, isSubscribed, subscribeUser} from 'firebaseApp/users/userData';

// TICL Components
import EventEmitter from 'tetraimpacts-components-library/dist/cjs/src/utils/EventEmitter/EventEmitter';
import {toast} from 'tetraimpacts-components-library';

// Components
import {NotificationItem} from 'tetraimpacts-components-library/dist/cjs/src/components/Notification/Notification.interface';
import SubscribeConfirmationModal from './SubscribeConfirmation/SubscribeConfirmationModal';
import SubscribeWithEmail from './SubscribeWithEmail/SubscribeWithEmail';
import SuccessModal from './SuccessModal/SuccessModal';

export enum ModalEvents {
  MODAL_TYPE = 'showModal',
}

export type ModalType =
  | 'subscriptionWithEmail'
  | 'subscriptionConfirmation'
  | 'successModal'
  | 'none';

const alreadySubscribedToast: NotificationItem = {
  message: i18n?.t('toast-already-subscribed-title') || 'Info',
  description: i18n?.t('toast-already-subscribed-description') || 'You are already subscribed',
  actionLabel: 'ACTION',
  noCloseButton: true,
  noIcon: true,
  noAction: true,
  type: 'info',
  isSnackbar: false,
};

const subscriptionErrorToast: NotificationItem = {
  message: i18n?.t('toast-error-subscribed-title') || 'An error happened',
  description: i18n?.t('toast-error-subscribed-description') || 'Please try again later',
  actionLabel: 'ACTION',
  noCloseButton: true,
  noIcon: true,
  noAction: true,
  type: 'error',
  isSnackbar: false,
};

export const modalEmitter = new EventEmitter<ModalEvents, ModalType>();

export const launchSubscriptionWithEmailModal = () =>
  modalEmitter.emit(ModalEvents.MODAL_TYPE, 'subscriptionWithEmail');

export const launchSubscriptionConfirmationModal = () =>
  modalEmitter.emit(ModalEvents.MODAL_TYPE, 'subscriptionConfirmation');

export const launchSuccessModal = () => modalEmitter.emit(ModalEvents.MODAL_TYPE, 'successModal');

export const closeModal = () => modalEmitter.emit(ModalEvents.MODAL_TYPE, 'none');

export function ModalHandler() {
  // TODO Change children type
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [modalType, setModalType] = useState<ModalType>('none');
  const [loading, setLoading] = useState(false);
  const {t} = useTranslation();

  useEffect(() => {
    modalEmitter.listen(ModalEvents.MODAL_TYPE, data => setModalType(data));
  }, []);

  const handlerOpen = (value: boolean, mtype: ModalType) => {
    if (!value && mtype === modalType) {
      closeModal();
    }
  };

  const {user} = useProvideAuth();

  const handleRegisteredUserSubscription = async (
    currUser?: {
      email?: string | null;
      displayName?: string | null;
    },
    checkEnrollment: boolean = false
  ) => {
    if (!currUser) return;

    if (checkEnrollment) {
      const isEnrolled = await isEmailEnrolled(currUser.email);
      if (isEnrolled) {
        toast(alreadySubscribedToast);
        return;
      }
      if (isEnrolled === undefined) {
        toast(subscriptionErrorToast);
        return;
      }
    }
    setLoading(true);
    if (await subscribeUser(currUser)) {
      closeModal();
      launchSuccessModal();
      axiosI()
        .post('/api/sendSubscribedEmail', {email: currUser?.email, name: currUser?.displayName})
        .then(() => {
          toast({
            message: t('toast-subscribed-success-message'),
            description: t('success-sending-subscribed-email') || '',
            actionLabel: 'ACTION',
            noCloseButton: true,
            noIcon: true,
            noAction: true,
            type: 'success',
            isSnackbar: false,
          });
        })
        .catch(() => {
          toast({
            message: t('toast-subscribed-error-message'),
            description: t('error-sending-subscribed-email') || '',
            actionLabel: 'ACTION',
            noCloseButton: true,
            noIcon: true,
            noAction: true,
            type: 'error',
            isSnackbar: false,
          });
        });
      setLoading(false);
      return;
    }

    setLoading(false);
    toast(subscriptionErrorToast);
  };

  return (
    <>
      <SubscribeWithEmail
        isOpen={modalType === 'subscriptionWithEmail'}
        setIsOpen={val => handlerOpen(val, 'subscriptionWithEmail')}
        onSubscribeFormSubmit={(email, name) =>
          handleRegisteredUserSubscription({email, displayName: name}, true)
        }
      />
      <SubscribeConfirmationModal
        disableSubmit={loading}
        isOpen={modalType === 'subscriptionConfirmation'}
        setIsOpen={val => handlerOpen(val, 'subscriptionConfirmation')}
        onSubscribeButtonClick={() =>
          handleRegisteredUserSubscription({email: user?.email, displayName: user?.displayName})
        }
      />
      <SuccessModal
        isOpen={modalType === 'successModal'}
        mainImage={{
          url: '/illustrations/modal/sentMail.svg',
          alt: '',
        }}
        setIsOpen={val => handlerOpen(val, 'successModal')}
        title={t('sent-welcome-email-title')}
        description={t('sent-welcome-email-body')}
      />
    </>
  );
}

export const handleSubscriptionFlow = async (user: User | null | undefined) => {
  if (!user || !user.email) {
    launchSubscriptionWithEmailModal();
    return;
  }

  if (await isSubscribed(user)) {
    toast(alreadySubscribedToast);
    return;
  }

  launchSubscriptionConfirmationModal();
};

export default ModalHandler;
