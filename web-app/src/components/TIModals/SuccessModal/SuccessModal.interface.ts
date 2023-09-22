export interface SuccessModalProps {
  title: string;
  description: string;
  mainImage?: {
    url: string;
    alt: string;
  };
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
