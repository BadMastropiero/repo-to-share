interface SocialMedia {
  facebook: string;
  twitter: string;
  instagram: string;
  linkedIn: string;
  github: string;
}

interface Info {
  sys: {id: string};
  email: string;
  phone: string;
  website: string;
  socialMedia: SocialMedia;
}

interface Avatar {
  title: string;
  url: string;
}

export default interface AuthorCollection {
  name: string;
  slug: string;
  info: Info;
  shortBio: string;
  avatar: Avatar;
}
