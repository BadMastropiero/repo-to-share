import AuthorCollection from '../domain/types';

export default function authorCollectionToStaffMemberCollection(collection: AuthorCollection[]) {
  const authorList = collection.map(element => ({
    id: element.info ? element.info.sys.id : null,
    name: element.name,
    shortBio: element.shortBio,
    slug: element.slug,
    website: element.info ? element.info.website : null,
    contact: [
      {
        name: 'mail',
        url: element.info?.email ? `mailto:${element.info.email}` : null,
      },
      {
        name: 'phone',
        url: element.info?.phone ? `tel:${element.info.phone}` : null,
      },
      {
        name: 'linkedin',
        url: element.info?.socialMedia?.linkedIn ?? null,
      },
      // TODO Github needs an icon in TICL
      // {
      //   name: 'github',
      //   url: element.info?.socialMedia?.github ?? null,
      // },
    ],
    avatar: element.avatar,
  }));
  return authorList;
}
