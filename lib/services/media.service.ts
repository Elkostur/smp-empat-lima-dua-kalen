/**
  * Cloudinary Media Upload Helper
  * Handles browser-side & server-side image upload directly to Cloudinary CDN
  */

export interface CloudinaryUploadResponse {
  public_id: string;
  secure_url: string;
  url: string;
  format: string;
  width: number;
  height: number;
  bytes: number;
}

export async function uploadToCloudinary(
  file: File | Blob,
  folder = 'smp45/uploads'
): Promise<CloudinaryUploadResponse> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('folder', folder);

  const res = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error || 'Failed to upload image to Cloudinary');
  }

  return await res.json();
}

export async function deleteFromCloudinary(imageUrl?: string): Promise<boolean> {
  if (!imageUrl || !imageUrl.includes('cloudinary.com')) return false;
  try {
    const res = await fetch('/api/delete-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageUrl }),
    });
    return res.ok;
  } catch {
    return false;
  }
}
