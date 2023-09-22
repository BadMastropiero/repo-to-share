// Interfaces
import {calcMDReadingTime} from 'utils/readingTime';
import IArticle from '../application/ArticleDetail/Article.interface';

// Data handler types
import {CIArticle} from '../domain/contentful/types';
// import {getAllBlogPostViews} from './firestore/views';

import enBlogs from '../../../../public/blogs/en.json';

export default async function articleInfoMapper(articles: CIArticle[]) {
  // const viewsFromFirestore = await getAllBlogPostViews(articles[0].slug);
  const hydratedViewsCount = enBlogs.find(b => b.slug === articles[0].slug)?.views || 0;
  const {
    blogEntry: {
      authorCollection: {items: Authors},
      body,
      mainImg,
      subtitle,
      summary,
      sys: {id},
      title,
      contentfulMetadata: {tags},
    },
    keywords,
    sys,
    upvotes,
    slug,
  } = articles[0];

  const date = new Date(sys.firstPublishedAt);
  const entityToMap: IArticle = {
    article: {
      id,
      mainImg: {...mainImg},
      views: hydratedViewsCount,
      upvotes,
      createdDate: {day: date.getDate(), month: date.getMonth() + 1, year: date.getFullYear()},
      title,
      author: Authors,
      body,
      keywords,
      readingTime: body ? calcMDReadingTime(body) : 0,
      subtitle,
      summary,
      slug,
      tags: tags.map(tag => tag.id),
    },
  };

  return entityToMap;
}
