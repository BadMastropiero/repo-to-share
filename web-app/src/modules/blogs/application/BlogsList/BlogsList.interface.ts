import {OrderBy} from 'modules/landing/domain/contentful/types';
import {ParsedUrlQuery} from 'querystring';

type DateProps = {
  day: number;
  month: number;
  year: number;
};

export type TagsProps = {
  id: string;
  text: string;
};

export type KeywordsProps = {
  id: number;
  text: string;
};

export interface BlogPageParams extends ParsedUrlQuery {
  page: string;
}

export interface Blog {
  id: string;
  mainImg: {
    title: string;
    url: string;
  };
  views?: number;
  favorites?: number;
  date: DateProps;
  title: string;
  slug: string;
  tags: TagsProps[];
  keywords: KeywordsProps[];
}
export default interface BlogsProps {
  blogs: Blog[];
  totalBlogs: number;
  totalPages: number;
  page: number;
  searchTerm?: string;
  orderBy?: OrderBy;
  selectedTags: TagsProps[];
}
