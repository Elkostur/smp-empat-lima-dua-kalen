import { createClient } from '@/lib/supabase/client';
import { PpdbApplicant } from '@/lib/adminStore';

export async function submitPpdbApplication(applicantData: Partial<PpdbApplicant>): Promise<{ success: boolean; registrationNo: string; error?: string }> {
  try {
    const supabase = createClient();
    const regCode = `PPDB2027-${Math.floor(1000 + Math.random() * 9000)}`;

    const { error } = await supabase.from('ppdb_applicants').insert({
      registration_no: regCode,
      registration_type: applicantData.registrationType || 'express',
      full_name: applicantData.fullName!,
      nisn: applicantData.nisn || '',
      gender: applicantData.gender || 'Laki-Laki',
      birth_place: applicantData.birthPlace || '',
      birth_date: applicantData.birthDate || null,
      address: applicantData.address || '',
      origin_school: applicantData.originSchool!,
      track: applicantData.track || 'Reguler',
      parent_name: applicantData.parentName!,
      father_name: applicantData.fatherName || '',
      mother_name: applicantData.motherName || '',
      parent_occupation: applicantData.parentOccupation || '',
      phone: applicantData.phone!,
      status: 'Menunggu Verifikasi',
      is_data_complete: applicantData.isDataComplete ?? false,
    });

    if (error) {
      console.error('Supabase error inserting PPDB:', error);
      return { success: false, registrationNo: '', error: error.message };
    }

    return { success: true, registrationNo: regCode };
  } catch (e: any) {
    return { success: false, registrationNo: '', error: e?.message || 'Gagal menyimpan pendaftaran' };
  }
}

export async function checkApplicantStatus(query: string): Promise<PpdbApplicant | null> {
  try {
    const supabase = createClient();
    const cleanQuery = query.trim();

    const { data, error } = await supabase
      .from('ppdb_applicants')
      .select('*')
      .or(`registration_no.ilike.%${cleanQuery}%,phone.ilike.%${cleanQuery}%`)
      .limit(1)
      .single();

    if (error || !data) return null;

    return {
      id: data.id,
      registrationNo: data.registration_no,
      fullName: data.full_name,
      nisn: data.nisn || '-',
      gender: data.gender as PpdbApplicant['gender'],
      originSchool: data.origin_school,
      parentName: data.parent_name,
      phone: data.phone,
      track: data.track as PpdbApplicant['track'],
      registrationDate: data.registration_date,
      status: data.status as PpdbApplicant['status'],
      notes: data.admin_notes || undefined,
      registrationType: data.registration_type as PpdbApplicant['registrationType'],
      birthPlace: data.birth_place || '',
      birthDate: data.birth_date || '',
      address: data.address || '',
      fatherName: data.father_name || '',
      motherName: data.mother_name || '',
      parentOccupation: data.parent_occupation || '',
      isDataComplete: data.is_data_complete,
    };
  } catch {
    return null;
  }
}
