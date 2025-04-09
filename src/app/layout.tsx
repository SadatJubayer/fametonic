import type { Metadata } from 'next';
import { Figtree, Urbanist } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

// Load Figtree font for body text
const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figtree',
});

// Load Urbanist font for headings
const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist',
});

export const metadata: Metadata = {
  title: 'Fametonic - Turn Social Media Into a Profitable Career',
  description:
    'Discover your way to success with Fametonic. Start growing your influence with AI-powered tools and expert-led courses.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={cn(
          figtree.variable,
          urbanist.variable,
          'min-h-screen antialiased overflow-x-hidden'
        )}
      >
        {children}
      </body>
    </html>
  );
}
