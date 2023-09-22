import {PositionTags} from '../domain/contentful/types';

const removeDuplicates = (arr: {id: string; name: string}[]) => {
  const baseObject: {[key: string]: string | boolean} = {};
  return arr.filter(item => {
    if (baseObject[item.id]) return false;
    baseObject[item.id] = true;
    return baseObject[item.id];
  });
};

// Filter all duplicated tags from all positions
const careersTagsFilter = (positionTags: PositionTags[]) => {
  const allTags: {id: string; name: string}[] = [];
  positionTags.forEach(({contentfulMetadata}) => {
    contentfulMetadata.tags.forEach(tag => {
      allTags.push(tag);
    });
  });
  return removeDuplicates(allTags);
};

export default careersTagsFilter;
