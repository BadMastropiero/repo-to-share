/**
 * @todo Improve the click propagation's stopping in the div container to
 * avoid disabling eslint rules.
 *
 * The following rules are set to avoid conflicts with the linter's checks
 * when attempting to commit the changes introduced at this point.
 * Setting the both rules disabled for the line of interest makes that only
 * one of them works, so it had to be disabled for the whole file
 */

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, {useEffect, useRef} from 'react';

// Interfaces
import {ModalProps} from './Modal.interface';

// Styles
import StyledModal from './Modal.styles';

const Modal: React.FC<ModalProps> = ({
  children,
  /** Controls whether the modal is open or close */
  isOpen = false,
  /** A setter to override default behavior */
  setIsOpen,
  /** When true, pressing Esc key won't close the modal */
  noDismissOnEsc: preventDismissOnEsc = false,
  /** When true, clicking outside the modal (aka backdrop, overlay) closes the modal */
  closeOnBackdropClick = false,
  /** backdrop's custom background color, use rgba format to control backdrop's opacity */
  backdropBgColor,
  ...rest
}) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.addEventListener('cancel', e => {
        e.preventDefault();
        if (!preventDismissOnEsc) if (setIsOpen) setIsOpen(false);
      });
    }
  }, [modalRef.current]);

  useEffect(() => {
    if (modalRef.current) {
      if (isOpen) {
        if (modalRef.current.showModal) modalRef.current.showModal();
      } else {
        if (setIsOpen) setIsOpen(false); // should we have this?
        if (modalRef.current.close) modalRef.current.close();
      }
    }
  }, [isOpen]);

  return (
    <StyledModal
      role="dialog"
      ref={modalRef}
      onClick={(e: React.MouseEvent<HTMLDialogElement>) => {
        e.stopPropagation();
        if (closeOnBackdropClick) {
          if (setIsOpen) setIsOpen(false);
        }
      }}
      backdropBgColor={backdropBgColor}
      {...rest}
    >
      <div
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
        }}
      >
        {isOpen && children}
      </div>
    </StyledModal>
  );
};

export default Modal;
