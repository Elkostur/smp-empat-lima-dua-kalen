import type { Metadata } from 'next';
import { ProfilContent } from '@/components/profil/ProfilContent';

export const metadata: Metadata = {
  title: 'Profil Sekolah - SMP Empat Lima 2 Kedungpring',
  description:
    'Sejarah, Visi Misi, Identitas Lembaga, dan Fasilitas SMP Empat Lima 2 Kedungpring di bawah naungan Yayasan Ma\'arif Empat Lima Kalen.',
};

export default function ProfilPage() {
  return <ProfilContent />;
}
