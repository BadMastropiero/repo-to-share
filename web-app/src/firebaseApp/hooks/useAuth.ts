import {useEffect, useState} from 'react';
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut as signOutFirebase,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail as sendPasswordResetEmailFirebase,
  confirmPasswordReset as confirmPasswordResetFirebase,
  User,
} from 'firebase/auth';

// Config
import {firebaseAppInstance} from 'firebaseApp/firebase';

import isMobile from 'utils/deviceInfo';

// Interfaces
// import { User } from "auth/firebase.interface";

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const auth = getAuth(firebaseAppInstance);
  const googleAuthProvider = new GoogleAuthProvider();
  const facebookAuthProvider = new FacebookAuthProvider();

  const [user, setUser] = useState<User | null>(null);

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signIn = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password).then(response => {
      setUser(response.user as unknown as User);
      return response.user;
    });

  const signInGoogle = () => {
    // Check the user agent to determine if browsing from mobile
    if (isMobile()) {
      signInWithRedirect(auth, googleAuthProvider);
      getRedirectResult(auth)
        .then(response => {
          setUser(response?.user as unknown as User);
        })
        .catch(
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          error => {
            // console.warn("We've got an error while authenticating:\n", error.message)
          }
        );
      return;
    }
    signInWithPopup(auth, googleAuthProvider)
      .then(response => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(response);
        // const token = credential?.accessToken;
        setUser(response.user as unknown as User);
        // ...
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch(error => {
        // // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error?.customData?.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // // ...
      });
  };

  const signInFacebook = () => {
    // Check the user agent to determine if browsing from mobile
    if (isMobile()) {
      signInWithRedirect(auth, facebookAuthProvider);
      getRedirectResult(auth).then(response => {
        console.log('🚀 ~ file: useAuth.ts:84 ~ getRedirectResult ~ response:', response);
        setUser(response?.user as unknown as User);
      });
      return;
    }
    signInWithPopup(auth, facebookAuthProvider)
      .then(response => {
        console.log('🚀 ~ file: useAuth.ts:110 ~ signInFacebook ~ response:', response);
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // const credential = FacebookAuthProvider.credentialFromResult(response);
        // const token = credential?.accessToken;
        setUser(response.user as unknown as User);
        // ...
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch(error => {
        console.log('🚀 ~ file: useAuth.ts:111 ~ signInFacebook ~ error:', error);
        // // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error?.customData?.email;
        // // The AuthCredential type that was used.
        // const credential = FacebookAuthProvider.credentialFromError(error);
        // // ...
      });
  };

  const signUp = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password).then(response => {
      setUser(response.user as unknown as User);
      return response.user;
    });

  const signOut = () =>
    signOutFirebase(auth).then(() => {
      setUser(null);
    });

  const sendPasswordResetEmail = (email: string) =>
    sendPasswordResetEmailFirebase(auth, email).then(() => true);

  const confirmPasswordReset = (code: string, password: string) =>
    confirmPasswordResetFirebase(auth, code, password).then(() => true);

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (returnedUser: User | null) => {
      if (returnedUser) {
        setUser(returnedUser);
      } else {
        setUser(null);
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Return the user object and auth methods
  return {
    user,
    signIn,
    signInGoogle,
    signInFacebook,
    signUp,
    signOut,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}

export default useProvideAuth;
