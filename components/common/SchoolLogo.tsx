'use client';

import React from 'react';
import Image from 'next/image';

interface SchoolLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  lightText?: boolean;
}

export const SchoolLogo: React.FC<SchoolLogoProps> = ({
  className = '',
  size = 'md',
  showText = false,
  lightText = false,
}) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  const dimMap = {
    sm: 32,
    md: 44,
    lg: 64,
    xl: 96,
  };

  const currentSize = sizeMap[size];
  const dimension = dimMap[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`relative ${currentSize} shrink-0 transition-transform duration-300 hover:scale-105`}>
        <Image
          src="/logo.png"
          alt="Logo SMP Empat Lima 2 Kedungpring"
          width={dimension}
          height={dimension}
          className="object-contain w-full h-full drop-shadow-md"
          priority
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-semibold tracking-wide uppercase text-xs sm:text-sm ${
              lightText ? 'text-amber-300' : 'text-school-gold-600'
            }`}
          >
            Yayasan Ma&apos;arif Empat Lima
          </span>
          <span
            className={`font-extrabold text-base sm:text-lg leading-tight tracking-tight ${
              lightText ? 'text-white' : 'text-slate-900'
            }`}
          >
            SMP &quot;EMPAT LIMA&quot; 2
          </span>
          <span
            className={`text-xs font-medium tracking-wider uppercase ${
              lightText ? 'text-emerald-100/90' : 'text-emerald-800'
            }`}
          >
            Kedungpring - Lamongan
          </span>
        </div>
      )}
    </div>
  );
};
