import type { Metadata, Viewport } from 'next';
import { Inter, Fraunces, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import Cursor from '@/components/ui/Cursor';

// Premium font pairing:
// - Fraunces (display): high-contrast modern serif — barber-shop sign elegance
// - Inter (sans): geometric workhorse — SaaS clarity
// - JetBrains Mono: for chess notation accents
const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
});

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  axes: ['opsz', 'SOFT']
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'E8 Square — The Final Move in Grooming & Digital Pass',
  description:
    'A barber studio that thinks like a SaaS. E8 Square pairs heritage cuts with a digital pass system — chess-grade strategy, square by square.',
  keywords: ['barber', 'grooming', 'digital pass', 'membership', 'SaaS', 'E8 Square'],
  authors: [{ name: 'E8 Square' }],
  openGraph: {
    title: 'E8 Square',
    description: 'Where the chair meets the chain. Heritage barbering, modern membership.',
    type: 'website'
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5efe6' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0c' }
  ],
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <Cursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
