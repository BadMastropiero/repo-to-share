export interface AlertProps {
  title?: string;
  description?: string;
  acceptText?: string;
  rejectText?: string;
  noCloseButton?: boolean;
  onAccept?: () => void;
  onReject?: () => void;
  isOpen?: boolean;
  setIsOpen: (val: boolean) => void;
  backdropBgColor?: string;
  primary?: boolean;
}
