export type MfeRouteContract = {
  slug: string;
  title: string;
  path: string;
  enabled: boolean;
};

export type LocaleContract = {
  locale: 'en' | 'hi' | 'te';
  defaultLocale: 'en';
};

export type ProviderContract = {
  type: 'database' | 'auth' | 'storage' | 'ai' | 'payment' | 'cloud';
  name: string;
  enabled: boolean;
};
