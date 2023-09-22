import {createContext, ReactNode, useContext, useEffect, useMemo, useState} from 'react';
import useProvideAuth from 'firebaseApp/hooks/useAuth';
import {UserData} from 'firebaseApp/users/usersDB';
import {getUserData} from 'firebaseApp/users/userData';
import {handleLike} from 'modules/blogs/infrastructure/firestore/likes';

interface IContextState {
  userData: UserData | undefined | null;
  updateUserLikedBlogs: (slug: string, liked: boolean) => Promise<boolean>;
}

const initialState: IContextState = {
  userData: null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateUserLikedBlogs: async (slug, liked) => false,
};

export const UserDataContext = createContext<IContextState>(initialState);

export function UserDataProvider({children}: {children?: ReactNode | ReactNode[]}) {
  const {user} = useProvideAuth();

  const [userData, setUserData] = useState<UserData | undefined | null>(null);

  const updateUserLikedBlogs = async (slug: string, liked: boolean) => {
    if (!user) return false;
    const success = await handleLike(user, slug, liked);
    if (!success) return false;
    setUserData(prev => {
      const newData: UserData = prev || {blogsLiked: []};
      const slugIndex = newData?.blogsLiked?.findIndex(b => b.slug === slug) || -1;
      if (slugIndex === -1 && liked) {
        newData.blogsLiked?.push({slug});
      }
      if (slugIndex !== -1 && !liked) {
        newData.blogsLiked?.splice(slugIndex, 1);
      }
      return newData;
    });
    return true;
  };

  useEffect(() => {
    if (!user) {
      setUserData(initialState.userData);
      return;
    }
    getUserData(user)
      .then(res => {
        setUserData(res);
      })
      .catch(() => {});
  }, [user]);

  const state = useMemo(
    () => ({
      userData,
      updateUserLikedBlogs,
    }),
    [userData, user]
  );

  return <UserDataContext.Provider value={state}>{children}</UserDataContext.Provider>;
}

export function useUserData() {
  const state = useContext(UserDataContext);

  if (state === undefined) {
    throw new Error('useUserData must be used within a UserDataProvider');
  }

  return state;
}
