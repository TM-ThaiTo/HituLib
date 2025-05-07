import type { Metadata } from 'next';
import '../styles/globals.css';
import MainHeader from '@/components/layouts/header';
import { geistMono, geistSans } from '@/lib/fonts';
import { ThemeProvider } from '@/providers/theme';

export const metadata: Metadata = {
  title: 'HIUT LIB - Thư viện trường Cao đẳng Công Thương TP.Hồ Chí Minh',
  description: 'Thư viện trường Cao đẳng Công Thương TP.Hồ Chí Minh',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MainHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
