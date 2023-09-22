import {CSSProperties} from 'react';

export default interface ServiceCardProps {
  id?: string;
  imageUrl: string;
  imageAlt: string;
  title?: string;
  body?: string;
  showCategories?: boolean;
  categories?: {name: string}[];
  topDistance?: boolean;
  width?: string;
  height?: string;
  invertedFooterContent?: boolean;
  slug?: string;
  showGoToButton?: boolean;
  redirectable?: boolean;
  style?: CSSProperties;
  onClick?: () => void;
}
