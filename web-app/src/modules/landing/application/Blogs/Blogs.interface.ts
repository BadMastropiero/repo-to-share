import {Blog} from 'modules/blogs/application/BlogsList/BlogsList.interface';
// import {FeaturedBlog} from 'modules/landing/domain/contentful/types';

export default interface BlogsSectionProps {
  blogsList: Blog[];
}

export interface BlogsCardProps {
  title?: string;
  views?: number;
  readings?: number;
  mainImgUrl?: string;
}
