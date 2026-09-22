export const i18nConfig = {
  defaultLocale: 'en',
  locales: ['en', 'hi', 'te'],
  messages: {
    en: {
      welcome: 'Welcome',
      dashboard: 'Welcome to Dashboard',
      moduleA: 'Welcome to Module A',
      moduleB: 'Welcome to Module B',
    },
    hi: {
      welcome: 'स्वागत है',
      dashboard: 'डैशबोर्ड में आपका स्वागत है',
      moduleA: 'मॉड्यूल ए में आपका स्वागत है',
      moduleB: 'मॉड्यूल बी में आपका स्वागत है',
    },
    te: {
      welcome: 'స్వాగతం',
      dashboard: 'డాష్‌బోర్డ్కు స్వాగతం',
      moduleA: 'మాడ్యూల్ Aకి స్వాగతం',
      moduleB: 'మాడ్యూల్ Bకి స్వాగతం',
    },
  },
} as const;

export type Locale = keyof typeof i18nConfig.messages;

export function getMessage(
  locale: Locale,
  key: keyof (typeof i18nConfig)['messages']['en'],
) {
  return i18nConfig.messages[locale][key];
}
