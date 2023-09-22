import {BlogEntryMinimalData} from 'apiHandlers/getBlogsListMinData';
import esBlogs from '../../../../../public/blogs/es.json';
import enBlogs from '../../../../../public/blogs/en.json';

export function getPromotedBlogs(
  locale: string = 'en-US',
  amount: number = 4
): BlogEntryMinimalData[] {
  const relatedBlogs = locale === 'es-419' ? esBlogs : enBlogs;
  relatedBlogs.sort((a: any, b: any) => b.views - a.views);

  return relatedBlogs.slice(0, amount);
}

export default getPromotedBlogs;
