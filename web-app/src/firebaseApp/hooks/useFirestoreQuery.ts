import {useMemoCompare} from 'hooks/memoCompare';
import {useEffect, useReducer} from 'react';
import {
  FirestoreError,
  onSnapshot,
  QuerySnapshot,
  Query,
  QueryDocumentSnapshot,
  DocumentData,
} from 'firebase/firestore';

enum Status {
  LOADING = 'loading',
  ERROR = 'error',
  SUCCESS = 'success',
  IDLE = 'idle',
}

type UseFirestoreQueryReturn<T> = {
  status: Status;
  data: T;
  error: FirestoreError;
};

// Get doc data and merge doc.id
function getDocData<T>(doc: QueryDocumentSnapshot<T>) {
  return doc.exists() === true ? {id: doc.id, ...doc.data()} : null;
}

// Get array of doc data from collection
function getCollectionData<T>(collection: QuerySnapshot<T>) {
  return collection.docs.map(getDocData);
}

// Reducer for hook state and actions
function reducer<T>(state: UseFirestoreQueryReturn<T>, action: {type: Status; payload?: any}) {
  return {
    status: action.type,
    data: action.type === Status.SUCCESS ? action.payload : undefined,
    error: action.type === Status.ERROR ? action.payload : undefined,
  };
}

// Hook
function useFirestoreQuery<R, T = DocumentData>(query: Query<T>): UseFirestoreQueryReturn<R> {
  // Our initial state
  // Start with an "idle" status if query is falsy, as that means hook consumer is
  // waiting on required data before creating the query object.
  // Example: useFirestoreQuery(uid && firestore.collection("profiles").doc(uid))
  const initialState = {
    status: query ? Status.LOADING : Status.IDLE,
    data: undefined,
    error: undefined,
  };
  // Setup our state and actions
  const [state, dispatch] = useReducer(reducer, initialState);

  // Get cached Firestore query object with useMemoCompare (https://usehooks.com/useMemoCompare)
  // Needed because firestore.collection("profiles").doc(uid) will always being a new object reference
  // causing effect to run -> state change -> rerender -> effect runs -> etc ...
  // This is nicer than requiring hook consumer to always memoize query with useMemo.
  const queryCached = useMemoCompare<Query<T>>(
    query,
    prevQuery =>
      // Use built-in Firestore isEqual method to determine if "equal"
      //  prevQuery && query && query.isEqual(prevQuery)
      prevQuery && query && JSON.stringify(query) === JSON.stringify(prevQuery)
  );

  useEffect(() => {
    // Return early if query is falsy and reset to "idle" status in case
    // we're coming from "success" or "error" status due to query change.
    if (!queryCached) {
      dispatch({type: Status.IDLE});
      return undefined;
    }

    dispatch({type: Status.LOADING});
    // Subscribe to query with onSnapshot
    // Will unsubscribe on cleanup since this returns an unsubscribe function
    return onSnapshot(
      queryCached,
      (response: QuerySnapshot<T>) => {
        const data = getCollectionData(response);
        dispatch({type: Status.SUCCESS, payload: data});
      },
      (error: FirestoreError) => {
        dispatch({type: Status.ERROR, payload: error});
      }
    );
  }, [queryCached]); // Only run effect if queryCached changes
  return state;
}

export default useFirestoreQuery;
