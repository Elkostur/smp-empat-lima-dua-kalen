import { NextResponse } from 'next/server';

function extractCloudinaryPublicId(url: string): string | null {
  if (!url || !url.includes('cloudinary.com')) return null;
  try {
    const parts = url.split('/upload/');
    if (parts.length < 2) return null;
    let path = parts[1];
    // Strip version prefix if present (e.g., v1723000000/)
    path = path.replace(/^v\d+\//, '');
    // Strip file extension (.jpg, .webp, .png, etc.)
    const lastDotIndex = path.lastIndexOf('.');
    if (lastDotIndex !== -1) {
      path = path.substring(0, lastDotIndex);
    }
    return decodeURIComponent(path);
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { publicId, imageUrl } = body;

    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    if (!cloudName || !apiKey || !apiSecret) {
      return NextResponse.json({ error: 'Kredensial Cloudinary belum dikonfigurasi' }, { status: 400 });
    }

    let targetPublicId = publicId;
    if (!targetPublicId && imageUrl) {
      targetPublicId = extractCloudinaryPublicId(imageUrl);
    }

    if (!targetPublicId) {
      return NextResponse.json({ error: 'Public ID atau URL Cloudinary tidak valid' }, { status: 400 });
    }

    const timestamp = Math.floor(Date.now() / 1000);
    const strToSign = `public_id=${targetPublicId}&timestamp=${timestamp}${apiSecret}`;

    // SHA-1 Signature
    const encoder = new TextEncoder();
    const data = encoder.encode(strToSign);
    const hashBuffer = await crypto.subtle.digest('SHA-1', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const signature = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');

    const formData = new FormData();
    formData.append('public_id', targetPublicId);
    formData.append('api_key', apiKey);
    formData.append('timestamp', String(timestamp));
    formData.append('signature', signature);

    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`, {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
      const errText = await res.text();
      return NextResponse.json({ error: 'Cloudinary Destroy API Gagal', details: errText }, { status: 500 });
    }

    const result = await res.json();
    return NextResponse.json({ success: true, result });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Delete failed';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
