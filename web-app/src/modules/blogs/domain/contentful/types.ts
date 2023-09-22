interface AuthorCollection {
  name: string;
  avatar: {
    url: string;
    title: string;
  };
}

interface BlogEntry {
  sys: {
    id: string;
  };
  mainImg: {
    title: string;
    url: string;
  };
  authorCollection: {items: AuthorCollection[]};
  title: string;
  subtitle: string;
  body: string;
  summary: string;
  contentfulMetadata: {
    tags: {
      id: string;
      name: string;
    }[];
  };
}

export interface CIArticle {
  views: number;
  upvotes: number;
  keywords: string[];
  slug: string;
  sys: {
    firstPublishedAt: string;
  };
  blogEntry: BlogEntry;
}

interface Date {
  day: number;
  month: number;
  year: number;
}

export interface FIComment {
  id: string;
  author: {
    id: string;
    name: string;
    avatar?: string | null;
  };
  content: string;
  created: Date;
}
