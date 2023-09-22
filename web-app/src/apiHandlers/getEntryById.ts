import {Entry, createClient} from 'contentful-management';
import Logger from 'utils/logger';

/**
 * Retrieves an entry by its id using the [CMA](https://www.contentful.com/developers/docs/references/content-management-api/#/reference/entries/entry).
 * The operation performed is read-only
 * @param entryId The id of the entry to be retrieved
 * @param spaceId The space where look for the entry or `NEXT_PUBLIC_CONTENTFUL_SPACE_ID`
 * @param environmentId The environment where look for the entry or `CONTENTFUL_SPACE_ENV_ID`
 * @returns The entry if no error occurs, otherwise null
 */
export const getEntryById = async (
  entryId: string,
  spaceId: string = `${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
  environmentId: string = `${process.env.CONTENTFUL_SPACE_ENV_ID}`
) => {
  if (!entryId) throw new Error('No entryId provided');

  const client = createClient({
    accessToken: `${process.env.CONTENTFUL_MANAGEMENT_TOKEN}`,
  });

  let requestedEntry: Entry | null = null;
  await client
    .getSpace(spaceId)
    .then(space => space.getEnvironment(environmentId))
    .then(environment => environment.getEntry(entryId))
    .then(entry => {
      requestedEntry = entry;
      // Logger.Info('getEntryById -> updatedEntry:', requestedEntry);
    })
    .catch(Logger.Error);

  return requestedEntry as Entry | null;
};

export default getEntryById;
