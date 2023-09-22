/**
 * @todo Improve the click propagation's stopping in the div container to
 * avoid disabling eslint rules.
 *
 * The following rules are set to avoid conflicts with the linter's checks
 * when attempting to commit the changes introduced at this point.
 * Setting the both rules disabled for the line of interest makes that only
 * one of them works, so it had to be disabled for the whole file
 */
import React from 'react';
import { ModalProps } from './Modal.interface';
declare const Modal: React.FC<ModalProps>;
export default Modal;
