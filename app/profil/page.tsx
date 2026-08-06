import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionHeading } from '@/components/common/SectionHeading';
import { schoolInfo, facilitiesData } from '@/data/schoolData';
import {
  CheckCircle2,
  Building,
  GraduationCap,
  Award,
  BookOpen,
  MapPin,
  ShieldCheck,
  Users,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Profil Sekolah - SMP Empat Lima 2 Kedungpring',
  description:
    'Sejarah, Visi Misi, Identitas Lembaga, dan Fasilitas SMP Empat Lima 2 Kedungpring di bawah naungan Yayasan Ma\'arif Empat Lima Kalen.',
};

export default function ProfilPage() {
  return (
    <main>
      <PageHeader
        title="Profil Lembaga & Identitas Sekolah"
        subtitle="Mengenal lebih dekat sejarah, visi-misi, keunggulan, serta sarana prasarana SMP Empat Lima 2 Kedungpring."
        badge="Profil Sekolah"
        breadcrumbs={[{ label: 'Profil' }]}
      />

      {/* Visi & Misi Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Visi & Misi"
            title="Landasan Utama Pendidikan Kami"
            subtitle="Menuntun langkah pembelajaran menuju terwujudnya santri berakhlak mulia dan berprestasi tinggi."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Visi Card */}
            <div className="lg:col-span-5 bg-gradient-school text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden border-2 border-school-gold-500">
              <div className="space-y-4 relative z-10">
                <span className="inline-block px-3 py-1 bg-school-gold-500 text-slate-900 font-extrabold text-xs uppercase tracking-wider rounded-full">
                  Visi Sekolah
                </span>
                <blockquote className="text-xl sm:text-2xl font-extrabold text-amber-300 leading-snug">
                  &quot;{schoolInfo.vision}&quot;
                </blockquote>
              </div>

              <div className="pt-6 border-t border-emerald-800 text-xs text-emerald-200 relative z-10 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-school-gold-400 shrink-0" />
                <span>Terdaftar & Terakreditasi di bawah Kemenag & Kemendikbudristek</span>
              </div>
            </div>

            {/* Misi List */}
            <div className="lg:col-span-7 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <Award className="w-6 h-6 text-school-green-700" />
                <span>Misi Utama SMP Empat Lima 2 Kedungpring</span>
              </h3>

              <div className="space-y-3">
                {schoolInfo.missions.map((misi, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs hover:border-school-green-600 transition-colors"
                  >
                    <span className="w-6 h-6 rounded-full bg-school-green-700 text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-sm font-medium text-slate-700 leading-relaxed">
                      {misi}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sejarah & Identitas Lembaga */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Sejarah Narasi */}
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block px-3 py-1 bg-school-gold-100 text-school-gold-600 font-bold text-xs uppercase rounded-full">
                Sejarah Singkat
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Sejarah Perjalanan & Naungan Yayasan Ma&apos;arif Empat Lima Kalen
              </h2>

              <div className="prose prose-slate text-slate-600 text-sm sm:text-base leading-relaxed space-y-3">
                <p>
                  SMP &quot;Empat Lima&quot; 2 Kedungpring didirikan sebagai bentuk komitmen nyata Yayasan Pendidikan Ma&apos;arif Empat Lima Kalen dalam menghadirkan sarana pendidikan menengah pertama berkualitas berbasis nilai-nilai Islam Ahlussunnah wal Jama&apos;ah An-Nahdliyah di wilayah Kedungpring dan sekitarnya.
                </p>
                <p>
                  Sejak awal berdiri, sekolah kami konsisten memadukan Kurikulum Nasional (Kurikulum Merdeka) dengan pembiasaan keagamaan khas pesantren, seperti Sholat Dhuha berjamaah, Istighosah rutin, hafalan Al-Qur&apos;an Juz 30, dan penguatan karakter kemandirian santri.
                </p>
                <p>
                  Didukung oleh tenaga pendidik profesional lulusan perguruan tinggi ternama serta sarana pendukung digital, SMP Empat Lima 2 Kedungpring terus berkembang menjadi sekolah pilihan utama masyarakat Kedungpring, Sugio, Kalen, dan sekitarnya.
                </p>
              </div>
            </div>

            {/* Identitas Table */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md space-y-4">
              <h3 className="text-lg font-extrabold text-slate-900 border-b-2 border-school-gold-500 pb-2 flex items-center gap-2">
                <Building className="w-5 h-5 text-school-green-700" />
                <span>Data Identitas Sekolah</span>
              </h3>

              <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                <div className="py-2.5 flex justify-between gap-4">
                  <span className="font-semibold text-slate-500">Nama Sekolah</span>
                  <span className="font-bold text-slate-900 text-right">{schoolInfo.name}</span>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <span className="font-semibold text-slate-500">Naungan Yayasan</span>
                  <span className="font-bold text-slate-900 text-right">{schoolInfo.foundation}</span>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <span className="font-semibold text-slate-500">NPSN</span>
                  <span className="font-bold text-slate-900">{schoolInfo.npsn}</span>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <span className="font-semibold text-slate-500">Status Akreditasi</span>
                  <span className="font-bold text-school-green-700 bg-school-green-50 px-2 py-0.5 rounded">
                    {schoolInfo.accreditation}
                  </span>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <span className="font-semibold text-slate-500">Kepala Sekolah</span>
                  <span className="font-bold text-slate-900 text-right">{schoolInfo.principal}</span>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <span className="font-semibold text-slate-500">Alamat Lengkap</span>
                  <span className="font-medium text-slate-700 text-right">{schoolInfo.address}, {schoolInfo.district}, {schoolInfo.regency}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fasilitas Sekolah */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Sarana & Prasarana"
            title="Fasilitas Sekolah yang Nyaman & Modern"
            subtitle="Mendukung seluruh kegiatan belajar mengajar, ibadah, dan pengembangan bakat siswa."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilitiesData.map((facility) => (
              <div
                key={facility.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-school-green-600 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-48 w-full bg-slate-100">
                  <Image
                    src={facility.imageUrl}
                    alt={facility.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-3 left-3 bg-slate-900/90 text-amber-300 font-bold text-xs px-2.5 py-1 rounded-md backdrop-blur-md">
                    {facility.count}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <h4 className="font-extrabold text-slate-900 text-base">{facility.name}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
