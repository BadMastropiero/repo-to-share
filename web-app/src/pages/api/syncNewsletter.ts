import {NextApiRequest, NextApiResponse} from 'next';
import {validNewsletterPayload} from 'apiHandlers/validNewsletterPayload';
import {getEntryById} from 'apiHandlers/getEntryById';
import {syncEntry} from 'apiHandlers/syncEntry';
import {Entry} from 'contentful-management';
import Logger from 'utils/logger';

/**
 * Synchronize a newsletter entry published in `production` into `features` environment
 * @param req where `req.body` should be an object of `NewsletterRequestBody` type
 * @param res
 * @returns
 */
export default async function syncNewsletterAPI(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({error: 'Method Not Allowed'});
  }

  // If the payload is not valid, we return the res modified by this checking function
  if (!validNewsletterPayload(req, res)) return res;

  const {entityId} = req.body;

  // Get the entry in the prod env of the Contentful space
  let baseEntry: Entry | null = null;
  try {
    // !!! Please add: 'vodagxaz0zi3', 'production' params for testing
    baseEntry = await getEntryById(entityId);
  } catch (error) {
    res.status(404).json('The entry to be synced was not found');
  }

  if (baseEntry) {
    try {
      // !!! Please add: 'vodagxaz0zi3', 'features' params for testing
      const {syncedEntry, status} = await syncEntry(baseEntry);
      switch (status) {
        case 'published':
          return res.status(200).json(syncedEntry);
        case 'updated' || 'added':
          return res.status(417).json({
            error: 'Newsletter was updated/created (but not published)',
            body: syncedEntry,
            status,
          });
        default:
          return res
            .status(424)
            .json({error: 'Newsletter could not be synced', body: syncedEntry, status});
      }
    } catch (error) {
      Logger.Error(error);
    }
  }
  return res.status(500).json('Unknown error when syncing the entry');
}
