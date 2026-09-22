import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Module A MFE',
  description: 'Module A microfrontend demo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
