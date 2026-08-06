/**
 * Converts any image file (JPEG, PNG, GIF, BMP, etc.) to compressed WebP Data URL format.
 * Reduces file size and speeds up page load performance.
 */
export async function convertFileToWebP(
  file: File,
  maxWidth = 1400,
  quality = 0.80
): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith('image/')) {
      reject(new Error('File harus berupa gambar (JPEG, PNG, WEBP, dll)'));
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let { width, height } = img;

        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          // Fallback if canvas context fails
          resolve(e.target?.result as string);
          return;
        }

        // Draw and compress to WebP
        ctx.drawImage(img, 0, 0, width, height);
        const webpDataUrl = canvas.toDataURL('image/webp', quality);
        resolve(webpDataUrl);
      };

      img.onerror = () => {
        reject(new Error('Gagal memuat file gambar'));
      };

      img.src = e.target?.result as string;
    };

    reader.onerror = () => {
      reject(new Error('Gagal membaca file'));
    };

    reader.readAsDataURL(file);
  });
}
