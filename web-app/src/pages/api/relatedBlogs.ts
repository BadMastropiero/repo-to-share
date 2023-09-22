import {NextApiRequest, NextApiResponse} from 'next';
import {BlogEntryMinimalData} from 'apiHandlers/getBlogsListMinData';

// Data
import {axiosI} from 'apiHandlers/axiosI';
import {getAbsoluteUrl} from 'utils/routes';
import {apiUrls} from 'config/pagesUrls';
import {blogsSimpleMapper} from 'modules/landing/infrastructure/responseMappers';

type RelatedBlogsListRequestParams = {
  blogSlug?: string;
  locale?: string;
};

export default async function getRelatedBlogsListAPI(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({error: 'Method Not Allowed'});
  }

  // eslint-disable next-line
  const {blogSlug, locale}: RelatedBlogsListRequestParams = req.query;

  if (!blogSlug || !locale) {
    return res.status(400).json({error: 'Bad Request'});
  }

  const axiosResponse = await axiosI().get(getAbsoluteUrl(apiUrls.CACHED_BLOGS), {
    params: {
      locale,
    },
  });

  const blogsList: BlogEntryMinimalData[] = axiosResponse.data || [];

  const keywordSet = blogsList.find(b => b.slug === blogSlug)?.keywords;
  const tagSet = blogsList
    .find(b => b.slug === blogSlug)
    ?.blogEntry.contentfulMetadata.tags.map(tag => tag.id);

  // 4th: Omit specified entry
  const filteredList = blogsList.filter(b => b.slug !== blogSlug);

  // 3rd: Fallback order criteria: most viewed (ordering blogList extracted from Contentful)
  filteredList.sort((a: any, b: any) => b.views - a.views);

  // 2nd: Secondary order criteria: most keyword matches
  filteredList.sort((a: any, b: any) => {
    const aKeywordMatchesCount = a.keywords?.filter((keyword: string) =>
      keywordSet?.includes(keyword)
    ).length;
    const bKeywordMatchesCount = b.keywords?.filter((keyword: string) =>
      keywordSet?.includes(keyword)
    ).length;
    return bKeywordMatchesCount - aKeywordMatchesCount;
  });

  // 1st: Main order criteria: most tags matches
  filteredList.sort((a: any, b: any) => {
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

  const relatedBlogs = blogsSimpleMapper(filteredList.slice(0, 3));

  return res.status(200).json({relatedBlogs});
}
