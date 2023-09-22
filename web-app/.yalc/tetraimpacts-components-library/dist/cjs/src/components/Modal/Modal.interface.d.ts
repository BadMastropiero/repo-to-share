import { BaseProps } from '../Base.interface';
export interface ModalProps extends BaseProps<HTMLDialogElement> {
    isOpen?: boolean;
    setIsOpen: (val: boolean) => void;
    backdropBgColor?: string;
    noDismissOnEsc?: boolean;
    closeOnBackdropClick?: boolean;
}
