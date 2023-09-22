/* eslint-disable no-console */
import {createClient, Entry} from 'contentful-management';
import {collectionGroup, getDocs} from 'firebase/firestore';
import Logger from '../utils/logger';
import getBlogsIDsCollection, {BlogsIDsCollection} from './getBlogsIDsCollection';
import {getFirestoreInstance} from '../firebaseApp/firebase';

const firestoreInstance = getFirestoreInstance();

export const getAllBlogPostsMetrics = async (
  metric: 'views' | 'likes'
): Promise<{[key: string]: number}> => {
  const collectionRef = collectionGroup(firestoreInstance, metric);

  const result: {[key: string]: number} = {};

  await getDocs(collectionRef).then(res => {
    res.docs.forEach(docItem => {
      const blogPostSlug: string = docItem.ref.path.split('/')[1];
      result[blogPostSlug] = (result[blogPostSlug] || 0) + 1;
    });
  });
  return result;
};

export const updateContentfulMetrics = async (entry_id: string, views: number, likes: number) => {
  if (!entry_id) throw new Error('No entry_id provided');

  const client = createClient({
    accessToken: `${process.env.CONTENTFUL_MANAGEMENT_TOKEN}`,
  });

  let updatedEntry: Entry | null = null;
  await client
    .getSpace(`${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`)
    .then(space => space.getEnvironment(`${process.env.CONTENTFUL_SPACE_ENV_ID}`))
    .then(environment => environment.getEntry(entry_id))
    .then(entry =>
      entry.patch([
        {
          op: 'replace',
          path: '/fields/views/en-US',
          value: views,
        },
        {
          op: 'replace',
          path: '/fields/upvotes/en-US',
          value: likes,
        },
      ])
    )
    .then(entry => {
      updatedEntry = entry;
    })
    // .then(entry => entry.publish())
    // .then(entry => Logger.Info(`Entry ${entry.sys.id} successfully updated.`))
    .catch(Logger.Error);

  return updatedEntry as Entry | null;
};

export const updateBlogsMetrics = async () => {
  const {blogPostCollection} = await getBlogsIDsCollection();
  const viewsCollection = await getAllBlogPostsMetrics('views');
  const likesCollection = await getAllBlogPostsMetrics('likes');

  const updatedEntriesPromises = blogPostCollection.map((element: BlogsIDsCollection) => {
    const {slug, views, upvotes} = element;
    return updateContentfulMetrics(
      element.sys.id,
      viewsCollection[slug] || views,
      likesCollection[slug] || upvotes
    );
  });

  const updatedEntries: (Entry | null)[] = await Promise.allSettled(updatedEntriesPromises).then(
    promisesResults => {
      const resultData: any[] = [];
      promisesResults.forEach(promiseResult => {
        // @ts-ignore
        resultData.push(promiseResult.value);
      });
      return resultData;
    }
  );

  const client = createClient({
    accessToken: `${process.env.CONTENTFUL_MANAGEMENT_TOKEN}`,
  });

  const entriesToPublish: Entry[] = updatedEntries.filter(e => !!e) as Entry[];
  const bulkActions = [];
  for (let index = 0; index < entriesToPublish.length; index += 200) {
    const newArray = entriesToPublish.slice(index, index + 200);
    bulkActions.push(
      client
        .getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '')
        .then(space => space.getEnvironment(process.env.CONTENTFUL_SPACE_ENV_ID || ''))
        .then(environment =>
          environment.createPublishBulkAction({
            entities: {
              sys: {
                type: 'Array',
              },
              items: newArray.map(e => ({
                sys: {
                  type: 'Link',
                  linkType: 'Entry',
                  id: e.sys.id,
                  version: e.sys.version,
                },
              })),
            },
          })
        )
        .then(bulkActionInProgress => bulkActionInProgress.waitProcessing())
        .then(bulkActionCompleted => Logger.Info(bulkActionCompleted))
        .catch(Logger.Error)
    );
  }

  const result = await Promise.allSettled(bulkActions);
  return result;
};
