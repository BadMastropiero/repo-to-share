import {useEffect, useState} from 'react';
import {
  defaultLanguageObject,
  languageCookieName,
  supportedLanguagesObjects,
} from 'config/language';
import {TiOptions} from 'tetraimpacts-components-library';
import {useRouter} from 'next/router';
import {setCookie} from 'utils/cookiesHandler';

type LanguageSelectorProps = {
  value: string;
  label: string;
};

export default function useLanguageSelector() {
  const router = useRouter();

  const [selectedLanguage, setSelectedLanguage] = useState<LanguageSelectorProps>(
    supportedLanguagesObjects.find(language => language.value === router.locale) ||
      defaultLanguageObject
  );

  useEffect(() => {
    if (!selectedLanguage) return;
    const {locale, pathname, asPath, query} = router;
    const {value} = selectedLanguage as TiOptions;
    if (!value || locale === value) return;
    // Changing the cookie language
    setCookie(languageCookieName, value);
    // change just the locale and maintain all other route information including href's query
    router.push(
      {
        pathname,
        query,
      },
      asPath,
      {
        locale: value,
        scroll: false,
      }
    );
  }, [selectedLanguage]);

  return [selectedLanguage, setSelectedLanguage] as const;
}
