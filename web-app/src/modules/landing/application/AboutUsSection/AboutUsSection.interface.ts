export default interface AboutUsProps {
  mainImg?: ContentfulImgAsset;
  secondImg?: ContentfulImgAsset;
  title?: string;
  subtitle?: string;
  body?: string;
}

export interface ContentfulImgAsset {
  title: string;
  url: string;
}
