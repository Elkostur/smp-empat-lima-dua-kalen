import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileQuickBar } from '@/components/layout/MobileQuickBar';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#08582b',
};

export const metadata: Metadata = {
  title: {
    default: 'SMP Empat Lima 2 Kedungpring - Website Resmi Sekolah',
    template: '%s | SMP Empat Lima 2 Kedungpring',
  },
  description:
    'Website Resmi SMP "Empat Lima" 2 Kedungpring - Yayasan Pendidikan Ma\'arif Empat Lima Kalen Kedungpring, Lamongan. Informasi Sekolah, Profil, PPDB Online 2026, Program Tahfidz, Berita, & Ekstrakurikuler.',
  keywords: [
    'SMP Empat Lima 2 Kedungpring',
    'SMP 45 2 Kedungpring',
    'Yayasan Ma\'arif Empat Lima Kalen',
    'Sekolah SMP Kedungpring Lamongan',
    'PPDB SMP Kedungpring 2026',
    'SMP Ma\'arif Lamongan',
    'Sekolah Islam Kedungpring',
  ],
  authors: [{ name: 'SMP Empat Lima 2 Kedungpring' }],
  creator: 'SMP Empat Lima 2 Kedungpring',
  publisher: 'Yayasan Pendidikan Ma\'arif Empat Lima Kalen',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://smp452kedungpring.sch.id',
    title: 'SMP Empat Lima 2 Kedungpring - Website Resmi Sekolah',
    description:
      'Sekolah Menengah Pertama unggulan berakhlak mulia, cerdas, & berkarakter Islami di Kedungpring - Lamongan.',
    siteName: 'SMP Empat Lima 2 Kedungpring',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-school-gold-500 selection:text-slate-900 overflow-x-hidden max-w-full">
        <Navbar />
        <main className="flex-1 w-full max-w-full overflow-x-hidden pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileQuickBar />
      </body>
    </html>
  );
}
