import type { Metadata } from 'next';
import { Chakra_Petch, Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { siteConfig } from '@/lib/site-config';
import './globals.css';

const chakra = Chakra_Petch({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-chakra',
  display: 'swap'
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'JunAI — An AI That Understands, Learns & Acts',
    template: '%s · JunAI'
  },
  description:
    'JunAI is an AI assistant designed to understand intent, retrieve knowledge, interact with devices, and learn supported workflows.',
  icons: {
    icon: '/images/jun-bot.png'
  },
  openGraph: {
    title: 'JunAI — An AI That Understands, Learns & Acts',
    description:
      'JunAI is an AI assistant designed to understand intent, retrieve knowledge, interact with devices, and learn supported workflows.',
    url: siteConfig.url,
    siteName: 'JunAI',
    images: [{ url: siteConfig.ogImage, width: 819, height: 1456 }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JunAI — An AI That Understands, Learns & Acts',
    description:
      'JunAI is an AI assistant designed to understand intent, retrieve knowledge, interact with devices, and learn supported workflows.',
    images: [siteConfig.ogImage]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${chakra.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen bg-void font-body antialiased">
        <div className="crt-texture" />
        <div className="grain-texture" />
        <a
          href="#main-content"
          className="fixed left-3 top-3 z-[100] -translate-y-24 rounded-lg bg-signal-500 px-4 py-2 text-sm text-white transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="relative">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
