import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Program Unggulan - SMP Empat Lima 2 Kedungpring',
  description:
    'Detail Program Tahfidz Al-Qur\'an Juz 30, Pembiasaan Sholat Dhuha, Smart School Digital Class, dan Klub Olimpiade Sains SMP 45 2 Kedungpring.',
};

export default function ProgramLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
