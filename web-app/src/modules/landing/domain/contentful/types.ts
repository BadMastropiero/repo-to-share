export interface StaticSectionContent {
  // GraphQL contract
  title: string;
  content: {
    body: string;
    subtitle: string;
    mediaCollection: {
      items: {
        title: string;
        mediaType: string;
        img: {
          title: string;
          url: string;
        };
      }[];
    };
  };
}

export interface FeaturedBlog {
  views: number;
  upvotes: number;
  slug: string;
  keywords: string[];
  sys: {
    firstPublishedAt: string;
  };
  blogEntry: {
    contentfulMetadata: {
      tags: {
        id: string;
        name: string;
      }[];
    };
    sys: {
      id: string;
    };
    title: string;
    subtitle: string;
    mainImg: {
      title: string;
      url: string;
    };
  };
}

export interface PositionTags {
  contentfulMetadata: {
    tags: {name: string; id: string}[];
  };
}

export enum OrderBy {
  DATE = 'date',
  READS = 'reads',
  LIKES = 'likes',
}
