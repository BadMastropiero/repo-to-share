import {DEVICE_UUID} from 'config/cookies';
import {collection, doc, getCountFromServer, setDoc} from 'firebase/firestore';
import {getFirestoreInstance} from 'firebaseApp/firebase';
import {getCookie, setCookie} from 'utils/cookiesHandler';
import {v4 as uuidv4} from 'uuid';

const firestoreInstance = getFirestoreInstance();

export async function getAllBlogPostViews(slug: string) {
  // Debuging theoreticals hits to firestore db
  console.count('fb-getAllBlogPostViews');

  const collectionRef = collection(firestoreInstance, `blogPosts/${slug}/views`);

  const snapshot = await getCountFromServer(collectionRef);
  const allViews = snapshot.data().count;
  return allViews;
}

export const registerBlogPostView = async (slug: string): Promise<boolean | void> => {
  const prevDeviceUUID = getCookie(DEVICE_UUID);
  if (prevDeviceUUID) return undefined;
  const deviceUUID = prevDeviceUUID || uuidv4();

  const blogRef = doc(firestoreInstance, `blogPosts/${slug}/views/${deviceUUID}`);
  return setDoc(blogRef, {deviceUUID})
    .then(() => {
      // Debuging real hits to firestore db
      console.count('fb-registerBlogPostView');

      const date = new Date();
      // Close to 3 months from now
      date.setTime(date.getTime() + 90 * 24 * 60 * 60 * 1000);
      setCookie(DEVICE_UUID, deviceUUID, date.toUTCString());
    })
    .catch(() => {});
};
