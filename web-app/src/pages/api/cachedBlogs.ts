import {NextApiRequest, NextApiResponse} from 'next';
import Logger from 'utils/logger';
import {getAllBlogPostsMetrics} from 'apiHandlers/updateBlogsMetrics';
import {BlogEntryMinimalData} from 'apiHandlers/getBlogsListMinData';

// Data
import esBlogs from '../../../public/blogs/es.json';
import enBlogs from '../../../public/blogs/en.json';

type CachedBlogsListRequestParams = {
  locale?: string;
};

export default async function getCachedBlogsListAPI(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({error: 'Method Not Allowed'});
  }

  const {locale}: CachedBlogsListRequestParams = req.query;

  let blogs: BlogEntryMinimalData[];
  switch (locale) {
    case 'es-419':
      blogs = esBlogs;
      break;
    default:
      blogs = enBlogs;
      break;
  }

  if (process.env.NEXT_PUBLIC_DISABLE_BLOGS_METRICS_HYDRATION !== 'true') {
    Logger.Info('Hydrating blogs list');
    try {
      // Hydrating with likes and views
      // await updateLocalBlogsList('public');
      const viewsCollection = await getAllBlogPostsMetrics('views');
      const likesCollection = await getAllBlogPostsMetrics('likes');
      blogs.forEach((el, i) => {
        blogs[i].views = viewsCollection[el.slug] || 0;
        blogs[i].upvotes = likesCollection[el.slug] || 0;
      });
    } catch (err) {
      // Disabling returnong 500 to avoid broken page if firestore cuota is exhausted
      // return res.status(500).json({error: 'Internal Server Error', message: err});
      Logger.Error(err);
    }
  } else {
    Logger.Warn('Hydrating blogs list skipped');
  }

  Logger.Warn('Cached blogs did not hit cache');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=86400');
  return res.status(200).json(blogs);
}
