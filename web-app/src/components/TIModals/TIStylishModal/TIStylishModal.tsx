import Image from 'next/image';

// Hooks
import {useTranslation} from 'next-i18next';

// Components
import Logo from 'components/Logo/Logo';
import {CloseButton} from 'components/Navbar/UserAuthControl/UserAuthControl.styles';

// Styles
import Loader from 'components/Loader/Loader';
import {
  ImageCircleBackground,
  ModalIllustration,
  ModalContainer,
  StyledModal,
  ModalTitle,
  ModalDescription,
  ContentLayout,
  ContentContainer,
} from './TIStylishModal.styles';

// Interfaces
import {TIStylishModalProps} from './TIStylishModal.interface';

export default function TIStylishModal({
  isOpen,
  title,
  description,
  mainImage,
  setIsOpen,
  lowerImageBg,
  children,
  imageLaptopStyles,
  imageStyles,
  style,
  isWorking,
}: TIStylishModalProps) {
  const {t} = useTranslation();

  return (
    <StyledModal setIsOpen={setIsOpen} isOpen={isOpen}>
      <Loader loading={isWorking} />
      <ModalContainer style={style}>
        <ContentLayout>
          <Logo height="40px" width="100%" />
          <ImageCircleBackground lowerTop={lowerImageBg || false} />
          <ModalIllustration style={imageStyles} laptopStyles={imageLaptopStyles}>
            {mainImage?.url && (
              <Image
                fill
                src={mainImage?.url || ''}
                alt={mainImage?.alt || ''}
                style={{objectFit: 'contain'}}
              />
            )}
          </ModalIllustration>
          <ContentContainer>
            <ModalTitle colorPreset="secondary" variant="h1" preset="title">
              {title}
            </ModalTitle>
            <ModalDescription colorPreset="secondary" variant="p" preset="content">
              {description}
            </ModalDescription>
          </ContentContainer>

          {children}

          <CloseButton
            onClick={() => setIsOpen(false)}
            aria-label={t('modal-close-button') || ''}
            text="&times;"
            presetType="text"
          />
        </ContentLayout>
      </ModalContainer>
    </StyledModal>
  );
}
