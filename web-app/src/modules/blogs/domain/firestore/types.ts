export interface FSComment {
  id: string;
  author: {
    id: string;
    name: string;
    avatar?: string | null;
  };
  body: string;
  created: string;
}
