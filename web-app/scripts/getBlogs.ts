import * as path from 'path';
import Logger from '../src/utils/logger';
import updateLocalBlogsList from '../src/apiHandlers/getBlogs';
import deleteFolderRecursive from './utils';

Logger.Info('Generating blogs list information files from Contentful...');

const pathToPublicFolder = path.join(__dirname, '../../public');

updateLocalBlogsList(pathToPublicFolder)
  .then(() => Logger.Info('Successfully generated blogs list information files.'))
  .catch(err => Logger.Error(err))
  .finally(() => {
    Logger.Info('Deleting tempScripts directory...');
    deleteFolderRecursive('./tempScripts');
    Logger.Info('Successfully deleted tempScripts directory.');
  });
