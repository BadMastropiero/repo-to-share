import {User} from 'firebase/auth';
import {collection, deleteDoc, doc, getCountFromServer, getDoc, setDoc} from 'firebase/firestore';
import {db} from 'firebaseApp/db';
import {getFirestoreInstance} from 'firebaseApp/firebase';

const firestoreInstance = getFirestoreInstance();

export const verifyBlogIsLiked = (user: User, slug: string): Promise<boolean> => {
  // Debuging theoreticals hits to firestore db
  console.count('fb-verifyBlogIsLiked');

  const docRef = doc(firestoreInstance, `blogPosts/${slug}/likes/${user.uid}`);
  const docSnap = getDoc(docRef)
    .then(res => res.exists())
    .catch(() => false);

  return docSnap;
};

export async function getAllPostLikes(slug: string) {
  // Debuging theoreticals hits to firestore db
  console.count('fb-getAllPostLikes');
  const collectionRef = collection(firestoreInstance, `blogPosts/${slug}/likes`);

  const snapshot = await getCountFromServer(collectionRef);
  const allLikes = snapshot.data().count;
  return allLikes;
}

/**
 *
 * @param user User liking the blog post
 * @param slug Slug of the blog post
 * @param liking Want to like or unlike the blog post
 * @returns
 */
export const handleLike = async (user: User, slug: string, liking: boolean): Promise<boolean> => {
  // TODO: Refactor this to use db abstraction approach
  const blogRef = doc(firestoreInstance, `blogPosts/${slug}/likes/${user.uid}`);
  const userDataLiekdBlogDocRef = doc(db.users.usersDataLikedBlogs(user.uid), slug);

  if (liking) {
    await setDoc(blogRef, {userId: user.uid});
    await setDoc(userDataLiekdBlogDocRef, {slug});
    return true;
  }
  await deleteDoc(blogRef).then(() => false);
  await deleteDoc(userDataLiekdBlogDocRef).then(() => false);
  return false;
};
