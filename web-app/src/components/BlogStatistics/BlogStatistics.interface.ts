type Date = {
  day: number;
  month: number;
  year: number;
};

export default interface IBlogStatistics {
  readingTime: number;
  views: number;
  isLiked?: boolean;
  allLikes: number;
  createdDate: Date;
  title: string;
  shareUrl: string;
  handleLike?: () => void;
}
