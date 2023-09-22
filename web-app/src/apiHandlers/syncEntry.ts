import {Entry, createClient} from 'contentful-management';
import Logger from 'utils/logger';

type SyncResponseType = {
  syncedEntry: Entry | null;
  status: 'added' | 'updated' | 'published' | 'unchanged' | 'not-added' | 'failed';
};

/**
 * Re-creates an entry using the [CMA](https://www.contentful.com/developers/docs/references/content-management-api/#/reference/entries/entry).
 * @warning This operation is not read-only, it will update the entry if it already exists in the target env
 * @param entryId The id of the entry to be recreated
 * @param spaceId The space where look for the entry or `NEXT_PUBLIC_CONTENTFUL_SPACE_ID`
 * @param targetEnvId The environment where look for the entry 'features'
 * @returns The entry if no error occurs, otherwise null
 */
export async function syncEntry(
  originalEntry: Entry,
  spaceId: string = `${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
  targetEnvId: string = 'features'
): Promise<SyncResponseType> {
  const entryId = originalEntry.sys.id;
  if (!entryId) throw new Error('No entryId provided');

  const client = createClient({
    accessToken: `${process.env.CONTENTFUL_MANAGEMENT_TOKEN}`,
  });

  let response: SyncResponseType = {syncedEntry: null, status: 'failed'};
  await client
    .getSpace(spaceId)
    .then(space => space.getEnvironment(targetEnvId))
    .then(environment =>
      environment
        .getEntry(entryId)
        // If the entry exists, we attempt to update it
        .then(async entryToUpdate => {
          // eslint-disable-next-line no-param-reassign
          entryToUpdate.fields = originalEntry.fields;
          // ! If the tags on the original entry are not present on the target env,
          // ! they wont be added to the syncedEntry due to Contentful restrictions,
          // ! creating them would be to expensive and perhaps even out of the scope
          // ! of this function.
          originalEntry.metadata?.tags.forEach(tag => {
            // @ts-ignore
            // eslint-disable-next-line no-param-reassign
            entryToUpdate.metadata.tags.push(tag);
          });
          await entryToUpdate
            .update()
            // If we can update it, we attempt to publish it
            .then(async entryToPublish => {
              Logger.Info(`Entry ${entryId} contents successfully updated on ${targetEnvId} env`);
              if (originalEntry.isPublished() && !originalEntry.isUpdated())
                await entryToPublish
                  .publish()
                  // If it was published
                  .then(() => {
                    Logger.Info(`Entry ${entryId} successfully published on ${targetEnvId} env`);
                    response = {syncedEntry: entryToPublish, status: 'published'};
                  })
                  // If it was not published
                  .catch(() => {
                    Logger.Info(`Entry ${entryId} could not be published on ${targetEnvId} env`);
                    response = {syncedEntry: entryToUpdate, status: 'updated'};
                  });
            })
            // If we could not update it, it has not changed
            .catch(() => {
              Logger.Info(`Entry ${entryId} could not be updated on ${targetEnvId} env`);
              response = {syncedEntry: entryToUpdate, status: 'unchanged'};
            });
        })
        // If the entry is not present, we create it
        .catch(async () => {
          Logger.Warn(
            `Entry ${entryId} does not exists on ${targetEnvId} env. Trying to add it...`
          );
          await environment
            .createEntryWithId(originalEntry.sys.contentType.sys.id, entryId, {
              metadata: originalEntry.metadata,
              fields: originalEntry.fields,
            })
            // If we could create it, we attempt to publish it
            .then(async entryToAdd => {
              Logger.Info(`Entry ${entryId} successfully added on ${targetEnvId} env`);
              /*
               * Although this function was mainly designed for being fired from a API endpoint
               * request made by a Contentful webhook after an entry was published, we still make
               * the verification in case we want to reuse this functionality outside the current
               * scope.
               */
              if (originalEntry.isPublished() && !originalEntry.isUpdated())
                await entryToAdd
                  .publish()
                  // If was published
                  .then(() => {
                    Logger.Info(`Entry ${entryId} successfully published on ${targetEnvId} env`);
                    response = {syncedEntry: entryToAdd, status: 'published'};
                  })
                  // If was not published
                  .catch(e => {
                    Logger.Error(e);
                    response = {syncedEntry: entryToAdd, status: 'added'};
                  });
            })
            // If we could not create it, nothing else can be done
            .catch(() => {
              Logger.Error(`Entry ${entryId} could not be created on ${targetEnvId} env`);
              response = {syncedEntry: null, status: 'not-added'};
            });
        })
    );

  return response;
}

export default syncEntry;
