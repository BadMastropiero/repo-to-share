/* eslint-disable no-console */
/* eslint-disable import/no-named-default */
import * as path from 'path';
import * as fs from 'fs';
import Logger from '../utils/logger';
import getBlogsListMinData from './getBlogsListMinData';
import {getAllBlogPostsMetrics} from './updateBlogsMetrics';

const hydrateList = process.env.NEXT_PUBLIC_DISABLE_BLOGS_METRICS_HYDRATION_ON_BUILD !== 'true';

// TODO: implement workaround to fetch more than 2000 entries
export default async function updateLocalBlogsList(pathToPublicFolder: string) {
  const esFilePath = path.join(pathToPublicFolder, '/blogs/es.json');
  const enFilePath = path.join(pathToPublicFolder, '/blogs/en.json');

  const {blogPostCollection: esData} = await getBlogsListMinData('es-419', 2000);
  const {blogPostCollection: enData} = await getBlogsListMinData('en-US', 2000);

  if (hydrateList) {
    try {
      // Hydrating with likes and views
      Logger.Info('Hydrating blogs list');
      const viewsCollection = await getAllBlogPostsMetrics('views');
      const likesCollection = await getAllBlogPostsMetrics('likes');
      esData.forEach((el, i) => {
        esData[i].views = viewsCollection[el.slug] || 0;
        esData[i].upvotes = likesCollection[el.slug] || 0;
      });
      enData.forEach((el, i) => {
        enData[i].views = viewsCollection[el.slug] || 0;
        enData[i].upvotes = likesCollection[el.slug] || 0;
      });
    } catch (err) {
      // Disabling returning 500 to avoid broken page if firestore cuota is exhausted
      // return res.status(500).json({error: 'Internal Server Error', message: err});
      Logger.Error(err);
    }
  } else {
    Logger.Warn('Hydrating blogs list skipped');
  }

  fs.writeFileSync(esFilePath, JSON.stringify(esData, null, 2));
  fs.writeFileSync(enFilePath, JSON.stringify(enData, null, 2));
}
