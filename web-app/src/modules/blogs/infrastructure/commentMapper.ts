// Interfaces
import {FIComment} from '../domain/contentful/types';
import {FSComment} from '../domain/firestore/types';

export default function firestoreCommentToFIComment(data: FSComment) {
  const date = data.created ? new Date(data.created) : null;

  const res: FIComment = {
    id: data.id,
    author: {
      id: data.author?.id,
      name: data.author?.name,
      avatar: data.author?.avatar,
    },
    content: data.body,
    created: {
      day: date?.getDate() || 0,
      month: (date ? date.getMonth() + 1 : null) || 0,
      year: date?.getFullYear() || 0,
    },
  };

  return res;
}
