import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Generic Product Boilerplate',
  description: 'Reusable product boilerplate foundation',
  manifest: '/manifest.webmanifest',
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
