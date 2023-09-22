const path = require('path');

const defaultLanguage = 'en-US';

const supportedLanguages = ['en-US', 'es-419'];

const defaultLanguageObject = {value: 'en-US', label: 'EN'};

const supportedLanguagesObjects = [
  {value: 'en-US', label: 'EN'},
  {value: 'es-419', label: 'ES'},
];

/**
 * @typedef {Object} Language
 * @property {string} value
 * @property {string} label
 */

/**
 * @typedef {Object} CustomLanguageParams
 * @property {string} defaultLanguage
 * @property {string[]} supportedLanguages
 * @property {Language} defaultLanguageObject
 * @property {Language[]} supportedLanguagesObjects
 */

/**
 * @type {import('next-i18next').UserConfig & CustomLanguageParams}
 */
module.exports = {
  // Non related to next-i18next config
  defaultLanguage,
  supportedLanguages,
  defaultLanguageObject,
  supportedLanguagesObjects,

  // Related to next=i18next config
  i18n: {
    defaultLocale: defaultLanguage,
    locales: supportedLanguages,
  },
  // fallbackLng: {
  //   default: ['en'],
  //   'en-US': ['en'],
  //   'es-419': ['es'],
  // },
  debug: process.env.NEXT_PUBLIC_DEBUG_I18NEXT === 'true',
  nonExplicitSupportedLngs: true,
  localePath: path.resolve('./public/locales'),
  localeStructure: '{{lng}}/{{ns}}',
};
