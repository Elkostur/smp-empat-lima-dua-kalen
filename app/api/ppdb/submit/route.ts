import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Secret token shared between Next.js server and Supabase secure RPC
const SERVER_PPDB_SECRET = 'smp45_sec_ppdb_88a91b42ef19945';

// In-memory IP rate limiter: max 3 submissions per IP per 10 minutes (600,000 ms)
interface RateLimitEntry {
  timestamps: number[];
}
const rateLimitMap = new Map<string, RateLimitEntry>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 3;

// Helper to clean old entries periodically
function cleanupRateLimitMap() {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap.entries()) {
    const valid = entry.timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
    if (valid.length === 0) {
      rateLimitMap.delete(ip);
    } else {
      entry.timestamps = valid;
    }
  }
}

export async function POST(request: Request) {
  try {
    // 1. IP Extraction & Rate Limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const cfIp = request.headers.get('cf-connecting-ip');
    const clientIp = (cfIp || realIp || (forwarded ? forwarded.split(',')[0] : '127.0.0.1')).trim();

    cleanupRateLimitMap();
    const now = Date.now();
    const ipRecord = rateLimitMap.get(clientIp) || { timestamps: [] };
    const recentRequests = ipRecord.timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

    if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        {
          success: false,
          error: 'Terlalu banyak permintaan pendaftaran dari perangkat/jaringan ini. Silakan tunggu 10 menit.',
        },
        { status: 429 }
      );
    }

    const body = await request.json();

    // 2. Server Honeypot Trap
    // Real users will never fill this hidden field; bots and scrapers will automatically populate it.
    if (body.honeypot && String(body.honeypot).trim() !== '') {
      console.warn(`[PPDB BOT BLOCKED] Honeypot triggered by IP: ${clientIp}`);
      // Return a fake 200 so the bot thinks it succeeded and stops retrying with other tactics
      return NextResponse.json({
        success: true,
        registrationNo: `PPDB2027-${Math.floor(1000 + Math.random() * 9000)}`,
        isBotFiltered: true,
      });
    }

    // 3. Strict Server-side Data Sanitization & Validation
    const fullName = String(body.fullName || '').trim();
    if (!fullName || fullName.length < 3 || fullName.length > 100) {
      return NextResponse.json(
        { success: false, error: 'Nama lengkap harus diisi (3 - 100 karakter).' },
        { status: 400 }
      );
    }

    // Disallow URLs, HTML tags, or suspicious casino/phishing keywords in name
    if (/<[^>]*>|https?:\/\/|www\./i.test(fullName) || /slot|gacor|casino|poker|bet/i.test(fullName)) {
      return NextResponse.json(
        { success: false, error: 'Nama mengandung karakter atau kata yang tidak diizinkan.' },
        { status: 400 }
      );
    }

    // Phone number validation (Indonesian formats: 08xx or 628xx, 10-16 digits)
    const rawPhone = String(body.phone || '').replace(/[^0-9+]/g, '');
    const cleanPhone = rawPhone.replace(/^\+/, '');
    if (cleanPhone.length < 10 || cleanPhone.length > 16 || (!cleanPhone.startsWith('08') && !cleanPhone.startsWith('628'))) {
      return NextResponse.json(
        { success: false, error: 'Nomor WhatsApp tidak valid. Gunakan format Indonesia (contoh: 08123456789).' },
        { status: 400 }
      );
    }

    // NISN validation (if provided)
    const nisn = String(body.nisn || '').trim();
    if (nisn && nisn !== '-' && !/^\d{10}$/.test(nisn)) {
      return NextResponse.json(
        { success: false, error: 'NISN harus berupa 10 digit angka.' },
        { status: 400 }
      );
    }

    // Math Captcha validation on server if provided
    if (body.captchaAnswer !== undefined && body.expectedCaptcha !== undefined) {
      if (Number(body.captchaAnswer) !== Number(body.expectedCaptcha)) {
        return NextResponse.json(
          { success: false, error: 'Verifikasi keamanan (CAPTCHA) salah. Silakan coba lagi.' },
          { status: 400 }
        );
      }
    }

    // 4. Save to Database via Supabase
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const payload = {
      fullName,
      phone: rawPhone,
      originSchool: String(body.originSchool || '-').trim(),
      parentName: String(body.parentName || 'Orang Tua / Wali').trim(),
      track: body.track || 'Reguler',
      registrationType: body.registrationType || 'express',
      nisn: nisn || '-',
      gender: body.gender || 'Laki-Laki',
      birthPlace: String(body.birthPlace || '').trim(),
      birthDate: body.birthDate || null,
      address: String(body.address || '').trim(),
      fatherName: String(body.fatherName || '').trim(),
      motherName: String(body.motherName || '').trim(),
      parentOccupation: String(body.parentOccupation || '').trim(),
      isDataComplete: Boolean(body.isDataComplete),
    };

    // If Service Role Key is present, we can insert directly into table safely
    if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
      const regCode = `PPDB2027-${Math.floor(1000 + Math.random() * 9000)}`;
      const { data: inserted, error: insertErr } = await supabase
        .from('ppdb_applicants')
        .insert({
          registration_no: regCode,
          registration_type: payload.registrationType,
          full_name: payload.fullName,
          nisn: payload.nisn,
          gender: payload.gender,
          birth_place: payload.birthPlace,
          birth_date: payload.birthDate,
          address: payload.address,
          origin_school: payload.originSchool,
          track: payload.track,
          parent_name: payload.parentName,
          father_name: payload.fatherName,
          mother_name: payload.motherName,
          parent_occupation: payload.parentOccupation,
          phone: payload.phone,
          status: 'Menunggu Verifikasi',
          is_data_complete: payload.isDataComplete,
        })
        .select('id, registration_no')
        .single();

      if (insertErr) {
        console.error('[PPDB API ERROR]', insertErr);
        return NextResponse.json(
          { success: false, error: 'Gagal menyimpan pendaftaran ke database: ' + insertErr.message },
          { status: 500 }
        );
      }

      // Record successful request for rate limiting
      ipRecord.timestamps.push(now);
      rateLimitMap.set(clientIp, ipRecord);

      return NextResponse.json({
        success: true,
        id: inserted?.id,
        registrationNo: inserted?.registration_no || regCode,
      });
    }

    // Strategy 2: Call secure RPC function with server-side token
    const { data: rpcRes, error: rpcErr } = await supabase.rpc('submit_ppdb_applicant_secure', {
      applicant_data: payload,
      server_token: SERVER_PPDB_SECRET,
    });

    if (rpcErr) {
      console.error('[PPDB RPC ERROR]', rpcErr);
      return NextResponse.json(
        {
          success: false,
          error:
            'Gagal menyimpan pendaftaran. Pastikan script migrasi 008_clean_and_lock_ppdb.sql sudah dijalankan di Supabase SQL Editor.',
        },
        { status: 500 }
      );
    }

    // Record successful request for rate limiting
    ipRecord.timestamps.push(now);
    rateLimitMap.set(clientIp, ipRecord);

    return NextResponse.json({
      success: true,
      id: rpcRes?.id,
      registrationNo: rpcRes?.registrationNo,
    });
  } catch (err: any) {
    console.error('[PPDB UNHANDLED ERROR]', err);
    return NextResponse.json(
      { success: false, error: err?.message || 'Terjadi kesalahan pada server saat memproses pendaftaran.' },
      { status: 500 }
    );
  }
}
