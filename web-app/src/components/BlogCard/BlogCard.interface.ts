type DateProps = {
  day: number;
  month: number;
  year: number;
};

type TagsProps = {
  id: string;
  text: string;
};

export default interface BlogCardProps {
  id: string;
  imageUrl: string;
  imageAlt: string;
  views?: number;
  likes?: number;
  likedByUser?: boolean;
  date: DateProps;
  title: string;
  tags: TagsProps[];
  slug: string;
  hasImagePriority?: boolean;
  primary?: boolean;
  shareButtonAction?: () => void;
  onPillClicked?: (value: string) => void;
}
