export interface SubscriptionModalProps {
  isOpen: boolean;
  onSubscribeFormSubmit?: (email: string, name?: string) => void;
  setIsOpen: (isOpen: boolean) => void;
}
