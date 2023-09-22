import {User} from 'firebase/auth';
import {doc, getDoc, deleteDoc, setDoc, collectionGroup, getDocs} from 'firebase/firestore';
import {db} from 'firebaseApp/db';
import {getFirestoreInstance} from 'firebaseApp/firebase';
import {UserData, UserDataLikedBlog} from './usersDB';
import {SubscriptionData} from './subscriptionDB';

export async function getUserDataLikedBlogs(user?: User | null) {
  if (!user) return undefined;

  const collRef = db.users.usersDataLikedBlogs(user.uid);

  const collSnap = await getDocs(collRef);
  const res: UserDataLikedBlog[] = [];
  collSnap.forEach(d => res.push(d.data()));
  return res;
}

export async function getUserData(user?: User | null) {
  if (!user) return undefined;

  const docRef = doc(db.users.usersData, user.uid);
  const docSnap = await getDoc(docRef);
  // Check if the document exists
  if (docSnap.exists()) {
    const blogsLiked = await getUserDataLikedBlogs(user);
    const result: UserData = {...docSnap.data(), blogsLiked: blogsLiked || []};
    return result;
  }
  // The document does not exist, create it with some data
  await setDoc(docRef, {}, {merge: true});
  const cdocSnap = await getDoc(docRef);
  return cdocSnap.data();
}

/**
 *
 * @param user User to update data for
 * @param data New user data
 * @returns `true` on success, false otherwise
 */
export async function updateUserData(user: User | null, data: UserData | null) {
  // Debuging theoreticals hits to firestore db
  // console.count('fb-updateUserData');

  if (!user) return false;

  const docRef = doc(db.users.usersData, user.uid);

  if (!data) {
    await setDoc(docRef, data, {merge: true});
    return true;
  }
  await deleteDoc(docRef);
  return false;
}

export async function isSubscribed(user?: User | null) {
  if (!user) return false;
  if (!user?.email) return false;

  const docRef = doc(db.subscriptions.subscriptionData, user.email);
  return (await getDoc(docRef)).exists();
}

export async function isEmailEnrolled(email?: string | null | undefined) {
  if (!email) return false;

  try {
    const docRef = doc(db.subscriptions.subscriptionData, email);
    return (await getDoc(docRef)).exists();
  } catch (error) {
    // If not have access to Firestore return undefined
    return undefined;
  }
}

type UnregisteredUserData = {
  email: string;
  data: SubscriptionData;
};

export async function subscribeUserWithEmail(user: UnregisteredUserData | null) {
  if (!user?.email) return false;

  const docRef = doc(db.subscriptions.subscriptionData, user.email);

  if (user.data) {
    try {
      await setDoc(docRef, user.data);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  return false;
}

export async function subscribeUser(user: {email?: string | null; displayName?: string | null}) {
  if (!user?.email || !user.displayName) return false;

  const docRef = doc(db.subscriptions.subscriptionData, user.email);

  try {
    await setDoc(docRef, {visibleName: user.displayName});
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

type SubscribedUser = {
  name: string;
  email: string;
};
export async function getSubscribedUsers() {
  const firestoreInstance = getFirestoreInstance();
  const collectionRef = collectionGroup(firestoreInstance, 'subscriptionData');

  const subscribedUserList: SubscribedUser[] = [];

  await getDocs(collectionRef).then(res => {
    res.docs.forEach(docItem => {
      subscribedUserList.push({
        name: docItem.data().visibleName,
        email: docItem.ref.path.split('/')[1],
      });
    });
  });
  return subscribedUserList;
}
