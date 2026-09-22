import type { AppConfig, LocaleCode } from '@repo/types';

export const appConfig: AppConfig = {
  appName: 'Generic Product Boilerplate',
  appDescription: 'Reusable product boilerplate foundation',
  defaultLocale: 'en',
  supportedLocales: ['en', 'hi', 'te'],
  navigation: [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Module A', href: '/module-a' },
    { label: 'Module B', href: '/module-b' },
  ],
};

export const defaultLocale: LocaleCode = 'en';
