import {StaticSectionContent} from 'modules/landing/domain/contentful/types';

const careersStaticContentMapper = (staticContent: StaticSectionContent[]) => {
  const {content, title} = staticContent[0];
  const mappedEntity = {
    title,
    subtitle: content.subtitle,
    body: content.body,
    mainImage: {
      title: content.mediaCollection.items[0]?.title || null,
      url: content.mediaCollection.items[0]?.img.url || null,
    },
  };
  return mappedEntity;
};

export default careersStaticContentMapper;
