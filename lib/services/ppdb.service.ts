import { PpdbApplicant } from '@/lib/adminStore';

export interface SubmitPpdbOptions extends Partial<PpdbApplicant> {
  honeypot?: string;
  captchaAnswer?: string | number;
  expectedCaptcha?: string | number;
}

export async function submitPpdbApplication(
  applicantData: SubmitPpdbOptions
): Promise<{ success: boolean; registrationNo: string; error?: string }> {
  try {
    const response = await fetch('/api/ppdb/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(applicantData),
    });

    const resJson = await response.json().catch(() => ({}));

    if (!response.ok || !resJson.success) {
      return {
        success: false,
        registrationNo: '',
        error: resJson.error || 'Terjadi kendala saat memproses pendaftaran. Silakan coba lagi.',
      };
    }

    return {
      success: true,
      registrationNo: resJson.registrationNo,
    };
  } catch (e: any) {
    console.error('Error submitting PPDB via API:', e);
    return {
      success: false,
      registrationNo: '',
      error: e?.message || 'Gagal menghubungi server pendaftaran. Silakan periksa koneksi internet Anda.',
    };
  }
}

export async function checkApplicantStatus(query: string): Promise<PpdbApplicant | null> {
  try {
    const cleanQuery = query.trim();
    if (!cleanQuery) return null;

    const response = await fetch(`/api/ppdb/status?q=${encodeURIComponent(cleanQuery)}`);
    if (!response.ok) return null;

    const resJson = await response.json().catch(() => ({}));
    if (resJson.found && resJson.applicant) {
      return resJson.applicant as PpdbApplicant;
    }

    return null;
  } catch (e) {
    console.error('Error checking PPDB status via API:', e);
    return null;
  }
}
