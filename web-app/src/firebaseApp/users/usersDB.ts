import {typedCollection} from 'firebaseApp/converters';

export interface UserDataLikedBlog {
  // subscribedToNewsletter: boolean;
  slug: string;
}
export interface UserData {
  // subscribedToNewsletter: boolean;
  blogsLiked: UserDataLikedBlog[];
}

const usersDB = {
  usersData: typedCollection<UserData>('usersData'),
  usersDataLikedBlogs: (userId: string) =>
    typedCollection<UserDataLikedBlog>(`usersData/${userId}/blogsLiked`),
};

export {usersDB};
export default usersDB;
