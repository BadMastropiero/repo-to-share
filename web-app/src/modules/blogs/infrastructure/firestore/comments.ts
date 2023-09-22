import {User} from 'firebase/auth';
import {collection, addDoc} from 'firebase/firestore';
import {getFirestoreInstance} from 'firebaseApp/firebase';

const firestoreInstance = getFirestoreInstance();

export const sendComment = async (
  user: User | null,
  blogSlug: string,
  comment: string
): Promise<boolean> => {
  if (!user) return false;
  console.count('fb-sendComment');
  const blogCommentsRef = collection(firestoreInstance, `blogPosts/${blogSlug}/comments`);
  await addDoc(blogCommentsRef, {
    author: {
      id: user.uid,
      name: user.displayName,
      avatar: user.photoURL,
    },
    body: comment,
    created: new Date().toISOString(),
  });

  return true;
};

export default sendComment;
