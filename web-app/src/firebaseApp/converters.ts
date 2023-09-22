// Reference from https://medium.com/swlh/using-firestore-with-typescript-65bd2a602945
import {QueryDocumentSnapshot, DocumentData, collection} from 'firebase/firestore';
import {getFirestoreInstance} from './firebase';

const firestoreInstance = getFirestoreInstance();

/**
 * Generic converter
 *
 * @returns typed `FirestoreDataConverter` object
 */
export const genConverter = <T>() => ({
  toFirestore: (data: T) => data as DocumentData,
  fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as T,
});

/**
 * Abstracts out the lengthy path to a collection reference
 * with a data converter
 *
 * @param collectionPath Path to collection in firestore
 * @returns Typed firestore `CollectionReference`
 */
export const typedCollection = <T>(collectionPath: string) =>
  collection(firestoreInstance, collectionPath).withConverter(genConverter<T>());
