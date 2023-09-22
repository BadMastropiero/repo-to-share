import {ArrowRight, Button} from 'tetraimpacts-components-library';

// Hooks
import {useTranslation} from 'next-i18next';

// Components
import {CloseButton} from 'components/Navbar/UserAuthControl/UserAuthControl.styles';
import Link from 'components/Link/Link';

// Config
import {pages} from 'config/pagesUrls';

// Interfaces
import {SuccessModalProps} from './SuccessModal.interface';
import TIStylishModal from '../TIStylishModal/TIStylishModal';

export default function SuccessModal({
  isOpen,
  title,
  description,
  mainImage,
  setIsOpen,
}: SuccessModalProps) {
  const {t} = useTranslation();

  return (
    <TIStylishModal
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      title={title}
      description={description}
      mainImage={mainImage}
      imageLaptopStyles={{
        maxWidth: '200px',
        top: '40px !important',
      }}
      imageStyles={{
        top: '7px',
      }}
      lowerImageBg
    >
      <Link tabIndex={-1} href={pages.LANDING} style={{alignSelf: 'end'}}>
        <Button
          style={{cursor: 'pointer'}}
          text={t('sent-email-modal-button-title') || ''}
          type="button"
          afterIcon={ArrowRight}
          onClick={() => setIsOpen(false)}
        />
      </Link>

      <CloseButton
        onClick={() => setIsOpen(false)}
        aria-label={t('modal-close-button') || ''}
        text="&times;"
        presetType="text"
      />
    </TIStylishModal>
  );
}
