import {Button} from 'tetraimpacts-components-library';

// Hooks
import {useTranslation} from 'next-i18next';

// Interfaces
import {SubscribeConfirmationModalProp} from './SubscribeConfirmationModal.interface';
import TIStylishModal from '../TIStylishModal/TIStylishModal';

export default function SubscribeConfirmationModal({
  isOpen,
  onSubscribeButtonClick,
  setIsOpen,
  disableSubmit,
}: SubscribeConfirmationModalProp) {
  const {t} = useTranslation();

  return (
    <TIStylishModal
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
        top: 'calc(50% - 150.5px)',
        left: '-20px',
      }}
    >
      <Button
        disabled={disableSubmit}
        text={t('subscription-modal-button-title') || ''}
        type="button"
        onClick={onSubscribeButtonClick}
      />
    </TIStylishModal>
  );
}
