export type LocaleCode = 'en' | 'hi' | 'te';

export type NavItem = {
  label: string;
  href: string;
};

export type AppConfig = {
  appName: string;
  appDescription: string;
  defaultLocale: LocaleCode;
  supportedLocales: LocaleCode[];
  navigation: NavItem[];
};
