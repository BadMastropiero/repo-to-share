interface CoverImage {
  title: string;
  url: string;
}

interface Provider {
  name: string;
  slug: string;
  providerType: {
    name: string;
    description: string;
  };
}

interface Contact {
  email: string;
  phone: string;
  website: string;
  address: string;
}

export enum EServiceOrderBy {
  PRICE = 'price',
  CURRENCY = 'currency',
  FIRST_PUBLISHED_AT = 'first_published',
  TIMES_REQUESTED = 'times_requested',
}

export default interface CIService {
  sys: {
    id: string;
  };
  title: string;
  shortDescription: string;
  detailedInfo: string;
  slug: string;
  price: number;
  currency: string;
  cardImg: CoverImage;
  provider: Provider;
  categoriesCollection: {
    items: {name: string; description: string; objective: string; sys: {id: string}}[];
  };
  contactInfo: Contact;
}
