import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q')?.trim();

    if (!query || query.length < 3) {
      return NextResponse.json(
        { found: false, message: 'Nomor pendaftaran atau nomor WhatsApp harus diisi.' },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Call secure RPC check_ppdb_status_public
    const { data: rpcData, error: rpcError } = await supabase.rpc('check_ppdb_status_public', {
      search_query: query,
    });

    if (rpcError) {
      console.warn('[PPDB STATUS RPC ERROR]', rpcError);

      // Fallback: If service role key exists, run safe selective query directly
      if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
        const cleanQuery = query.toLowerCase();
        const { data: row } = await supabase
          .from('ppdb_applicants')
          .select('id, registration_no, full_name, gender, origin_school, track, registration_date, status, admin_notes, registration_type')
          .or(`registration_no.ilike.%${cleanQuery}%,phone.ilike.%${cleanQuery}%`)
          .limit(1)
          .maybeSingle();

        if (row) {
          return NextResponse.json({
            found: true,
            applicant: {
              id: row.id,
              registrationNo: row.registration_no,
              fullName: row.full_name,
              gender: row.gender,
              originSchool: row.origin_school,
              track: row.track,
              registrationDate: row.registration_date,
              status: row.status,
              notes: row.admin_notes || undefined,
              registrationType: row.registration_type,
            },
          });
        }
      }

      return NextResponse.json({ found: false, message: 'Data tidak ditemukan.' });
    }

    if (rpcData && rpcData.found) {
      return NextResponse.json({
        found: true,
        applicant: {
          id: rpcData.id,
          registrationNo: rpcData.registrationNo,
          fullName: rpcData.fullName,
          gender: rpcData.gender,
          originSchool: rpcData.originSchool,
          track: rpcData.track,
          registrationDate: rpcData.registrationDate,
          status: rpcData.status,
          notes: rpcData.notes || undefined,
          registrationType: rpcData.registrationType,
        },
      });
    }

    return NextResponse.json({ found: false, message: 'Data pendaftaran tidak ditemukan.' });
  } catch (err: any) {
    console.error('[PPDB STATUS GET ERROR]', err);
    return NextResponse.json({ found: false, error: err?.message }, { status: 500 });
  }
}
