import {OrderBy} from 'modules/landing/domain/contentful/types';
import {axiosI} from 'apiHandlers/axiosI';
import {getAbsoluteUrl} from 'utils/routes';
import {apiUrls} from 'config/pagesUrls';
import {BlogEntryMinimalData} from 'apiHandlers/getBlogsListMinData';

async function getFeaturedBlogsLocally(
  locale: string = 'en-US',
  limit: number = 5,
  page: number = 1,
  titleFilter: string = '',
  orderBy: OrderBy | undefined = OrderBy.DATE,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  keywordFilter: string[] | null = null, // TODO: Not in use in page for now
  tagsFilters: string[] | null = null
) {
  const axiosResponse = await axiosI().get(getAbsoluteUrl(apiUrls.CACHED_BLOGS), {
    params: {
      locale,
    },
  });

  let blogsList: BlogEntryMinimalData[] = axiosResponse.data || [];

  if (titleFilter) blogsList = blogsList.filter(b => b.blogEntry.title.includes(titleFilter));
  // if(keywordFilter) blogsList = blogsList.filter(b=>b.keywords.some(k=>keywordFilter?.includes(k)));
  if (tagsFilters)
    blogsList = blogsList.filter(b =>
      b.blogEntry.contentfulMetadata.tags.some(t => tagsFilters?.includes(t.id))
    );

  if (orderBy) {
    if (orderBy === OrderBy.DATE)
      blogsList = blogsList.sort(
        (a, b) =>
          new Date(b.sys.firstPublishedAt).getTime() - new Date(a.sys.firstPublishedAt).getTime()
      );
    if (orderBy === OrderBy.LIKES) blogsList = blogsList.sort((a, b) => b.upvotes - a.upvotes);
    if (orderBy === OrderBy.READS) blogsList = blogsList.sort((a, b) => b.views - a.views);
  }

  const total = blogsList.length;

  if (limit && page) {
    const start = (page - 1) * limit;
    const end = start + limit;
    blogsList = blogsList.slice(start, end);
  }

  return {featuredBlogs: blogsList, total};
}

export default getFeaturedBlogsLocally;
