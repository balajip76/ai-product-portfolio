import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Journey of an AI-Native Product Leader',
  description:
    '12 months. 7 stages of learning. 13 prototypes built. A showcase of AI-native product development by Balaji.',
  metadataBase: new URL('https://ai-prod-portfolio.neyar.one'),
  openGraph: {
    title: 'Journey of an AI-Native Product Leader',
    description:
      '12 months. 7 stages of learning. 13 prototypes built. A showcase of AI-native product development.',
    url: 'https://ai-prod-portfolio.neyar.one',
    siteName: 'Balaji Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Journey of an AI-Native Product Leader',
    description: '12 months. 7 stages of learning. 13 prototypes built.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
