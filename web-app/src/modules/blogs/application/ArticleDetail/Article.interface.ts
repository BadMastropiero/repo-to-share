// Domain types
import {FIComment} from 'modules/blogs/domain/contentful/types';

type Date = {
  day: number;
  month: number;
  year: number;
};

type Author = {
  name: string;
  avatar: {
    title: string;
    url: string;
  } | null;
};

type MainImg = {
  title: string;
  url: string;
};
export default interface IArticle {
  article: {
    id: string;
    title: string;
    summary?: string | null;
    subtitle?: string | null;
    body: string;
    mainImg: MainImg;
    author: Author[];
    createdDate: Date;
    upvotes: number;
    views: number;
    keywords?: string[];
    readingTime?: number;
    slug?: string;
    tags?: string[];
  };
  comments?: FIComment[];
  likes?: number;
  isLiked?: boolean;
  handleLike?: () => void;
  sendComment?: (body: string) => boolean | void;
}
