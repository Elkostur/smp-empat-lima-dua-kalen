'use client';

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

interface BlurImageProps extends Omit<ImageProps, 'src'> {
  src?: ImageProps['src'] | string | null;
  fallbackSrc?: string;
}

// Lightweight base64 SVG shimmer / blur placeholder generator
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#05160E" offset="20%" />
      <stop stop-color="#0D2D1D" offset="50%" />
      <stop stop-color="#05160E" offset="80%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)" />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

const defaultBlur = `data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`;
const DEFAULT_FALLBACK = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop';

function resolveValidSrc(
  src: ImageProps['src'] | string | null | undefined,
  fallback: string
): ImageProps['src'] {
  if (typeof src === 'string') {
    const trimmed = src.trim();
    if (trimmed !== '') return trimmed;
  } else if (src && typeof src === 'object') {
    return src;
  }
  return fallback;
}

export const BlurImage: React.FC<BlurImageProps> = ({
  src,
  alt = '',
  className = '',
  placeholder = 'blur',
  blurDataURL,
  fallbackSrc = DEFAULT_FALLBACK,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState<ImageProps['src']>(() => resolveValidSrc(src, fallbackSrc));

  useEffect(() => {
    setImgSrc(resolveValidSrc(src, fallbackSrc));
    setIsLoading(true);
  }, [src, fallbackSrc]);

  if (!imgSrc) {
    return null;
  }

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      placeholder={placeholder}
      blurDataURL={blurDataURL || defaultBlur}
      onLoad={() => setIsLoading(false)}
      onError={() => {
        setImgSrc(fallbackSrc);
        setIsLoading(false);
      }}
      className={`transition-all duration-700 ease-in-out ${
        isLoading ? 'scale-105 blur-md brightness-90' : 'scale-100 blur-0 brightness-100'
      } ${className}`}
      referrerPolicy="no-referrer"
    />
  );
};
