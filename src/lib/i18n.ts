import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslation from '@/locales/en.json';
import khTranslation from '@/locales/kh.json';

// Define available languages
export const languages = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧',
    dir: 'ltr' as const,
  },
  kh: {
    code: 'kh',
    name: 'Khmer',
    nativeName: 'ភាសាខ្មែរ',
    flag: '🇰🇭',
    dir: 'ltr' as const, // Khmer is actually LTR, not RTL
  },
} as const;

export type LanguageCode = keyof typeof languages;

// Initialize i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      kh: {
        translation: khTranslation,
      },
    },
    fallbackLng: 'en',
    defaultNS: 'translation',
    
    // Language detection options
    detection: {
      // Order of detection methods
      order: ['localStorage', 'cookie', 'navigator', 'htmlTag'],
      
      // Keys to use for storage
      lookupLocalStorage: 'ds-education-language',
      lookupCookie: 'ds-education-language',
      
      // Cache user language
      caches: ['localStorage', 'cookie'],
      
      // Cookie settings
      cookieMinutes: 10080, // 7 days
      cookieOptions: { path: '/', sameSite: 'strict' },
    },
    
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    
    // React specific options
    react: {
      useSuspense: true,
    },
  });

// Function to change language and persist preference
export const changeLanguage = (lang: LanguageCode) => {
  i18n.changeLanguage(lang);
  
  // Update document direction based on language
  const dir = languages[lang].dir;
  document.documentElement.dir = dir;
  document.documentElement.lang = lang;
  
  // Store preference
  localStorage.setItem('ds-education-language', lang);
  
  // Set cookie for SSR support
  document.cookie = `ds-education-language=${lang}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Strict`;
};

// Get current language config
export const getCurrentLanguage = (): typeof languages[LanguageCode] => {
  const currentLang = i18n.language as LanguageCode;
  return languages[currentLang] || languages.en;
};

export default i18n;
