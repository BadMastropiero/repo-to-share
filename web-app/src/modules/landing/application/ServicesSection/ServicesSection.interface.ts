import CIService from 'modules/services/domain/types';

export default interface ServicesSectionProps {
  mainImg?: ContentfulImgAsset;
  secondImg?: ContentfulImgAsset;
  title?: string;
  subtitle?: string;
  body?: string;
  services?: CIService[];
}

export interface ContentfulImgAsset {
  title: string;
  url: string;
}
