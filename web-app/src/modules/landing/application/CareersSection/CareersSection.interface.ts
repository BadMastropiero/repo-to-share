export default interface CareersSectionProps {
  title: string;
  body?: string;
  mainImage?: {url: string; title: string};
  positionsList?: {
    id: string;
    name: string;
  }[];
}
