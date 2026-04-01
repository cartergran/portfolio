import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Carter Gran — Software Engineer',
  description:
    'Portfolio of Carter Gran, a software engineer focused on building thoughtful, high-quality products.',
  openGraph: {
    title: 'Carter Gran — Software Engineer',
    description:
      'Portfolio of Carter Gran, a software engineer focused on building thoughtful, high-quality products.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(inter.variable, 'scroll-smooth')}>
      <body className="bg-bg text-text antialiased">{children}</body>
    </html>
  );
}
