import type { Metadata } from 'next';
import '@/styles/globals.css';
import MainHeader from '@/components/layouts/header';
import { geistMono, geistSans } from '@/lib/fonts';
import { ThemeProvider } from '@/providers/theme';
import NextTopLoader from '@/components/next-toploader';
import MainFooter from '@/components/layouts/footer';
import { Toaster } from 'sonner';

import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export const metadata: Metadata = {
  title: 'HIUT LIB - Thư viện trường Cao đẳng Công Thương TP.Hồ Chí Minh',
  description: 'Thư viện trường Cao đẳng Công Thương TP.Hồ Chí Minh',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <NextTopLoader />
            <MainHeader />
            {children}
            <MainFooter />
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
