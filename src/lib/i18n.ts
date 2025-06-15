'use client';

import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

// Import translations directly
import enTranslation from '../../public/locales/en/translation.json';

// Initialize i18next with static resources
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes
    }
  });

// Function to change language
export const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
  if (typeof window !== 'undefined') {
    localStorage.setItem('i18nextLng', lng);
  }
};

// Export the initialized i18n instance
export default i18n;

// Maintain compatibility with existing code
export function t(key: string): string {
  return i18n.t(key);
}

// Export useTranslation hook for components that need more i18n features
export { useTranslation };
