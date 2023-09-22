import Logger from '../src/utils/logger';
import {updateBlogsMetrics} from '../src/apiHandlers/updateBlogsMetrics';
import deleteFolderRecursive from './utils';

Logger.Info('Getting blogs data from Contentful...');

updateBlogsMetrics()
  .then(() => Logger.Info('Successfully updated blogs metrics.'))
  .catch(err => Logger.Error(err))
  .finally(() => {
    Logger.Info('Deleting tempScripts directory...');
    deleteFolderRecursive('./tempScripts');
    Logger.Info('Successfully deleted tempScripts directory.');
  });
