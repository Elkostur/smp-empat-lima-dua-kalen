import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'Tidak ada file yang diunggah' }, { status: 400 });
    }

    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;
    const preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'smp45_unsigned';

    // Strategy 1: Attempt unsigned upload preset if available
    const cloudFormData = new FormData();
    cloudFormData.append('file', file);
    cloudFormData.append('upload_preset', preset);
    cloudFormData.append('folder', 'smp45/uploads');

    let res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: 'POST',
      body: cloudFormData,
    });

    if (res.ok) {
      const data = await res.json();
      return NextResponse.json(data);
    }

    // Strategy 2: Signed upload using API Key & Secret if unsigned fails
    if (apiKey && apiSecret) {
      const timestamp = Math.floor(Date.now() / 1000);
      const folder = 'smp45/uploads';
      const strToSign = `folder=${folder}&timestamp=${timestamp}${apiSecret}`;

      // Crypto SHA-1 signature
      const encoder = new TextEncoder();
      const data = encoder.encode(strToSign);
      const hashBuffer = await crypto.subtle.digest('SHA-1', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const signature = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');

      const signedFormData = new FormData();
      signedFormData.append('file', file);
      signedFormData.append('api_key', apiKey);
      signedFormData.append('timestamp', String(timestamp));
      signedFormData.append('folder', folder);
      signedFormData.append('signature', signature);

      res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: signedFormData,
      });

      if (res.ok) {
        const signedData = await res.json();
        return NextResponse.json(signedData);
      }
    }

    const errorText = await res.text();
    console.error('Cloudinary API Error:', errorText);
    return NextResponse.json({ error: 'Gagal upload ke Cloudinary', details: errorText }, { status: 500 });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Server error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
