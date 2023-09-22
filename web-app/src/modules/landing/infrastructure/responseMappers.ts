import {BlogEntryMinimalData} from 'apiHandlers/getBlogsListMinData';
import {Blog} from 'modules/blogs/application/BlogsList/BlogsList.interface';
import {FeaturedBlog} from 'modules/landing/domain/contentful/types';
import {i18n} from 'next-i18next';

export function blogsMapper(featureToMap: FeaturedBlog[]) {
  const mappedFeature: Blog[] = featureToMap.map(feature => {
    const entityToMap: Blog = {
      id: '',
      mainImg: {
        title: '',
        url: '',
      },
      views: 0,
      favorites: 0,
      date: {day: 0, month: 0, year: 0},
      title: '',
      slug: '',
      tags: [],
      keywords: [],
    };
    entityToMap.id = feature.blogEntry.sys.id;
    entityToMap.mainImg = feature.blogEntry.mainImg || {title: '', url: ''};
    entityToMap.title = feature.blogEntry.title;
    entityToMap.views = feature.views;
    entityToMap.favorites = feature.upvotes;
    entityToMap.slug = feature.slug;
    feature.keywords?.map((keyword, idx) => entityToMap.keywords.push({id: idx, text: keyword}));
    feature.blogEntry?.contentfulMetadata?.tags?.map(tag =>
      entityToMap.tags.push({id: tag.id, text: i18n?.t(tag.id) || ''})
    );

    const firstPublishedAt = new Date(feature.sys.firstPublishedAt);
    entityToMap.date = {
      day: firstPublishedAt.getDate(),
      month: firstPublishedAt.getMonth() + 1,
      year: firstPublishedAt.getFullYear(),
    };

    return {...entityToMap};
  });

  return mappedFeature;
}

export function blogsSimpleMapper(featureToMap: BlogEntryMinimalData[]) {
  const mappedFeature: Blog[] = featureToMap.map(feature => {
    const entityToMap: Blog = {
      id: '',
      mainImg: {
        title: '',
        url: '',
      },
      views: 0,
      favorites: 0,
      date: {day: 0, month: 0, year: 0},
      title: '',
      slug: '',
      tags: [],
      keywords: [],
    };
    // entityToMap.id = feature.blogEntry.sys.id;
    entityToMap.mainImg = feature.blogEntry.mainImg || {title: '', url: ''};
    entityToMap.title = feature.blogEntry.title;
    entityToMap.views = feature.views;
    entityToMap.favorites = feature.upvotes;
    entityToMap.slug = feature.slug;
    // feature.keywords?.map((keyword, idx) => entityToMap.keywords.push({id: idx, text: keyword}));
    feature.blogEntry?.contentfulMetadata?.tags?.map(tag =>
      entityToMap.tags.push({id: tag.id, text: i18n?.t(tag.id) || ''})
    );

    const firstPublishedAt = new Date(feature.sys.firstPublishedAt);
    entityToMap.date = {
      day: firstPublishedAt.getDate(),
      month: firstPublishedAt.getMonth() + 1,
      year: firstPublishedAt.getFullYear(),
    };

    return {...entityToMap};
  });

  return mappedFeature;
}
