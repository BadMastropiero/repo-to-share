import {axiosI} from 'apiHandlers/axiosI';
import {getAbsoluteUrl} from 'utils/routes';
import {apiUrls} from 'config/pagesUrls';
import {FeaturedBlog} from 'modules/landing/domain/contentful/types';

async function getRelatedBlogs(
  locale: string = 'en-US',
  keywordSet: string[] | null = null,
  tagSet: string[] | null = null,
  omittedEntryId: string | null = null,
  amount = 3
): Promise<{relatedBlogs: FeaturedBlog[]}> {
  const axiosResponse = await axiosI().get(getAbsoluteUrl(apiUrls.CACHED_BLOGS), {
    params: {
      locale,
    },
  });

  let blogsList: FeaturedBlog[] = axiosResponse.data || [];

  // 4th: Omit specified entry when needed (eg. content related to a blog entry )
  if (omittedEntryId) blogsList = blogsList.filter(b => b.blogEntry.sys.id !== omittedEntryId);

  // 3rd: Fallback order criteria: most viewed (ordering blogList extracted from Contentful)
  blogsList.sort((a: any, b: any) => b.views - a.views);

  // 2nd: Secondary order criteria: most keyword matches
  blogsList.sort((a: any, b: any) => {
    const aKeywordMatchesCount = a.keywords?.filter((keyword: string) =>
      keywordSet?.includes(keyword)
    ).length;
    const bKeywordMatchesCount = b.keywords?.filter((keyword: string) =>
      keywordSet?.includes(keyword)
    ).length;
    return bKeywordMatchesCount - aKeywordMatchesCount;
  });

  // 1st: Main order criteria: most tags matches
  blogsList.sort((a: any, b: any) => {
    const aTagMatchesCount = a.blogEntry.contentfulMetadata.tags?.filter(
      (tag: {id: string; name: string}) => tagSet?.includes(tag.id)
    ).length;
    const bTagMatchesCount = b.blogEntry.contentfulMetadata.tags?.filter(
      (tag: {id: string; name: string}) => tagSet?.includes(tag.id)
    ).length;
    return bTagMatchesCount - aTagMatchesCount;
  });

  /*
   * Since `array.prototype.sort()` is
   * [stable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#sort_stability)
   * we first apply the secondary ordering, then, the main ordering.
   */

  return {relatedBlogs: blogsList.slice(0, amount)};
}

export default getRelatedBlogs;
