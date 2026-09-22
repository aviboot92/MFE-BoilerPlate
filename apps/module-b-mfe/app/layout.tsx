import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Module B MFE',
  description: 'Module B microfrontend demo',
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
