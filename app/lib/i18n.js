import enTranslations from '../locales/en.json';
import arTranslations from '../locales/ar.json';

const translations = {
  en: enTranslations,
  ar: arTranslations,
};

export function getTranslations(locale) {
  return translations[locale] || translations.en;
}

export function t(locale, key) {
  const keys = key.split('.');
  let value = translations[locale] || translations.en;
  
  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) {
      return key; // Return the key if translation not found
    }
  }
  
  return value;
}

export const locales = ['en', 'ar'];
export const defaultLocale = 'en'; 