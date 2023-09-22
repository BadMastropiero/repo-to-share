export interface SubscribeConfirmationModalProp {
  isOpen: boolean;
  onSubscribeButtonClick?: () => void;
  setIsOpen: (isOpen: boolean) => void;
  disableSubmit?: boolean;
}
