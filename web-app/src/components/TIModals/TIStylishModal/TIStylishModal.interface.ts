import {CSSProperties, ReactNode} from 'react';

export interface TIStylishModalProps {
  title: string;
  description: string;
  mainImage?: {
    url: string;
    alt: string;
  };
  isOpen: boolean;
  lowerImageBg?: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: ReactNode | ReactNode[];
  imageStyles?: CSSProperties;
  imageLaptopStyles?: CSSProperties;
  style?: CSSProperties;
  isWorking?: boolean;
}
