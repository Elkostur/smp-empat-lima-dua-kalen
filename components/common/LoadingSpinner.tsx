import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  className = '',
  label,
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Loader2 className={`${sizeClasses[size]} animate-spin shrink-0`} />
      {label && <span>{label}</span>}
    </span>
  );
};

interface ButtonSpinnerOverlayProps {
  isLoading: boolean;
  loadingText?: string;
  className?: string;
}

export const ButtonSpinnerOverlay: React.FC<ButtonSpinnerOverlayProps> = ({
  isLoading,
  loadingText = 'Mengirim Pendaftaran...',
  className = '',
}) => {
  if (!isLoading) return null;

  return (
    <div
      role="status"
      aria-label={loadingText}
      className={`absolute inset-0 bg-amber-400/95 backdrop-blur-sm flex items-center justify-center gap-2.5 px-4 text-school-green-950 font-black text-sm z-10 transition-all duration-200 pointer-events-none ${className}`}
    >
      <Loader2 className="w-5 h-5 animate-spin text-school-green-950 shrink-0" />
      <span className="truncate">{loadingText}</span>
    </div>
  );
};
