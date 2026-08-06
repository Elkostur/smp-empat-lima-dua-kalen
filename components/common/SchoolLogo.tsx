'use client';

import React from 'react';

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
      {/* High Quality Vector SVG Badge */}
      <svg
        width={dimension}
        height={dimension}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${currentSize} shrink-0 drop-shadow-md transition-transform duration-300 hover:scale-105`}
        aria-label="Logo SMP Empat Lima 2 Kedungpring"
      >
        {/* Outer White Glow/Border */}
        <path
          d="M100 10 C125 10, 140 25, 160 25 C180 25, 190 45, 185 70 C195 90, 195 110, 185 130 C190 155, 180 175, 160 175 C140 175, 125 190, 100 190 C75 190, 60 175, 40 175 C20 175, 10 155, 15 130 C5 110, 5 90, 15 70 C10 45, 20 25, 40 25 C60 25, 75 10, 100 10 Z"
          fill="#FFFFFF"
        />

        {/* Outer Shield - Deep Emerald Green */}
        <path
          d="M100 14 C123 14, 137 28, 156 28 C174 28, 183 46, 179 69 C188 88, 188 107, 179 126 C183 149, 174 167, 156 167 C137 167, 123 181, 100 181 C77 181, 63 167, 44 167 C26 167, 17 149, 21 126 C12 107, 12 88, 21 69 C17 46, 26 28, 44 28 C63 28, 77 14, 100 14 Z"
          fill="#08582B"
          stroke="#D4AF37"
          strokeWidth="3"
        />

        {/* Inner Gold Border Accent */}
        <path
          d="M100 20 C120 20, 133 32, 150 32 C165 32, 173 48, 170 67 C178 84, 178 101, 170 118 C173 137, 165 153, 150 153 C133 153, 120 165, 100 165 C80 165, 67 153, 50 153 C35 153, 27 137, 30 118 C22 101, 22 84, 30 67 C27 48, 35 32, 50 32 C67 32, 80 20, 100 20 Z"
          fill="none"
          stroke="#E5C158"
          strokeWidth="1.5"
          strokeDasharray="4 2"
        />

        {/* Arch Text Top: YAYASAN PENDIDIKAN MA'ARIF */}
        <path id="archTop" d="M 35,92 A 65,65 0 0,1 165,92" fill="none" />
        <text fill="#E5C158" fontSize="8.5" fontWeight="bold" letterSpacing="0.8">
          <textPath href="#archTop" startOffset="50%" textAnchor="middle">
            YAYASAN PENDIDIKAN MA&apos;ARIF
          </textPath>
        </text>

        {/* Sub Arc Text: EMPAT LIMA KALEN */}
        <path id="archSub" d="M 45,108 A 55,55 0 0,1 155,108" fill="none" />
        <text fill="#FFFFFF" fontSize="7.5" fontWeight="bold" letterSpacing="0.5">
          <textPath href="#archSub" startOffset="50%" textAnchor="middle">
            EMPAT LIMA KALEN
          </textPath>
        </text>

        {/* Center Globe Circle */}
        <circle cx="100" cy="104" r="24" fill="#053B1B" stroke="#E5C158" strokeWidth="2" />
        {/* Globe Grid lines */}
        <ellipse cx="100" cy="104" rx="24" ry="10" stroke="#E5C158" strokeWidth="1" fill="none" />
        <line x1="100" y1="80" x2="100" y2="128" stroke="#E5C158" strokeWidth="1.2" />
        <line x1="76" y1="104" x2="124" y2="104" stroke="#E5C158" strokeWidth="1.2" />

        {/* Rope Knot at Globe Base */}
        <path
          d="M 82,126 Q 100,132 118,126 Q 100,136 82,126 Z"
          fill="#E5C158"
          stroke="#053B1B"
          strokeWidth="1"
        />

        {/* 9 Ma'arif Stars */}
        {/* 1. Large Top Center Star */}
        <polygon points="100,64 102.5,70 108,70 103.5,73.5 105,79 100,75.5 95,79 96.5,73.5 92,70 97.5,70" fill="#E5C158" />

        {/* Star Arc Around Globe */}
        <polygon points="70,82 72,86 76,86 73,88.5 74,92.5 70,90 66,92.5 67,88.5 64,86 68,86" fill="#E5C158" />
        <polygon points="130,82 132,86 136,86 133,88.5 134,92.5 130,90 126,92.5 127,88.5 124,86 128,86" fill="#E5C158" />

        <polygon points="62,102 64,105 68,105 65,107 66,111 62,109 58,111 59,107 56,105 60,105" fill="#E5C158" />
        <polygon points="138,102 140,105 144,105 141,107 142,111 138,109 134,111 135,107 132,105 136,105" fill="#E5C158" />

        <polygon points="68,122 70,125 74,125 71,127 72,131 68,129 64,131 65,127 62,125 66,125" fill="#E5C158" />
        <polygon points="132,122 134,125 138,125 135,127 136,131 132,129 128,131 129,127 126,125 130,125" fill="#E5C158" />

        {/* Bottom 2 Stars */}
        <polygon points="88,138 90,141 93,141 91,143 92,146 88,144 84,146 85,143 83,141 86,141" fill="#E5C158" />
        <polygon points="112,138 114,141 117,141 115,143 116,146 112,144 108,146 109,143 107,141 110,141" fill="#E5C158" />

        {/* Bottom Text: SMP "EMPAT LIMA" 2 KEDUNGPRING */}
        <text x="100" y="156" fill="#E5C158" fontSize="8" fontWeight="800" textAnchor="middle" letterSpacing="0.4">
          SMP &quot;EMPAT LIMA&quot; 2
        </text>
        <text x="100" y="165" fill="#FFFFFF" fontSize="7" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">
          KEDUNGPRING
        </text>
      </svg>

      {/* Optional Text Side-by-Side */}
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
