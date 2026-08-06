'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PageHeader } from '@/components/layout/PageHeader';
import { staffData, StaffItem } from '@/data/schoolData';
import { GraduationCap, BookOpen, Quote, Mail, Phone, Award } from 'lucide-react';

const departments = [
  'Semua',
  'Kepala Sekolah',
  'Guru Mata Pelajaran',
  'Guru BK',
  'Tenaga Kependidikan',
];

export default function StaffPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('Semua');

  const filteredStaff = staffData.filter(
    (staff) =>
      selectedDepartment === 'Semua' || staff.department === selectedDepartment
  );

  return (
    <main className="min-h-screen bg-slate-50/50 pb-20">
      <PageHeader
        title="Direktori Pendidik & Tenaga Kependidikan"
        subtitle="Mengenal dewan guru dan staff pengelola SMP Empat Lima 2 Kedungpring yang berdedikasi tinggi."
        badge="Staff & Guru"
        breadcrumbs={[{ label: 'Staff' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Department Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none w-full max-w-full">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap shrink-0 inline-flex items-center justify-center transition-all min-h-[40px] leading-tight ${
                selectedDepartment === dept
                  ? 'bg-school-green-700 text-white shadow-md font-extrabold'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>{dept}</span>
            </button>
          ))}
        </div>

        {/* Staff Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStaff.map((staff) => (
            <div
              key={staff.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-school-green-600 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="p-6 space-y-4">
                {/* Photo Header */}
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-school-gold-400 shadow-md bg-slate-100 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={staff.photo}
                    alt={staff.name}
                    fill
                    className="object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="text-center space-y-1">
                  <span className="inline-block px-3 py-0.5 text-[10px] font-extrabold bg-school-green-50 text-school-green-700 rounded-full border border-school-green-200 uppercase">
                    {staff.role}
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-school-green-700 transition-colors">
                    {staff.name}
                  </h3>
                  {staff.subject && (
                    <p className="text-xs font-semibold text-school-gold-600 flex items-center justify-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{staff.subject}</span>
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100 text-center space-y-2">
                  <p className="text-xs text-slate-500 font-medium flex items-center justify-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-school-green-700 shrink-0" />
                    <span>{staff.education}</span>
                  </p>

                  {staff.quote && (
                    <div className="bg-slate-50 p-3 rounded-xl italic text-xs text-slate-600 border border-slate-100 relative">
                      &quot;{staff.quote}&quot;
                    </div>
                  )}
                </div>
              </div>

              <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 text-center text-[11px] font-bold text-slate-500">
                <span>SMP Empat Lima 2 Kedungpring</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
