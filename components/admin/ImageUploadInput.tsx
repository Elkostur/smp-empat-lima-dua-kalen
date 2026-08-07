'use client';

import React, { useState, useRef } from 'react';
import { Upload, Link as LinkIcon, Image as ImageIcon, CheckCircle2, Loader2, RefreshCw, Trash2, Zap } from 'lucide-react';
import { convertFileToWebP, convertFileToWebPBlob } from '@/lib/imageUtils';
import { uploadToCloudinary } from '@/lib/services/media.service';

interface ImageUploadInputProps {
  label: string;
  value: string;
  onChange: (url: string) => void;
  required?: boolean;
  maxWidth?: number;
  quality?: number;
  helpText?: string;
}

export const ImageUploadInput: React.FC<ImageUploadInputProps> = ({
  label,
  value,
  onChange,
  required = false,
  maxWidth = 1400,
  quality = 0.80,
  helpText = 'Upload otomatis tersimpan di Cloudinary CDN & dikonversi ke WebP.',
}) => {
  const [activeTab, setActiveTab] = useState<'upload' | 'url'>('upload');
  const [isConverting, setIsConverting] = useState(false);
  const [compressionInfo, setCompressionInfo] = useState<{ origSize: string; webpSize: string; reduction: string } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  const handleFileProcess = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      setErrorMsg('Harap pilih file gambar (JPG, PNG, WEBP, dll)');
      return;
    }

    try {
      setIsConverting(true);
      setErrorMsg(null);
      const origSizeFormatted = formatFileSize(file.size);

      // 1. Convert image to WebP Blob client-side first
      let fileToUpload: File = file;
      try {
        const webpBlob = await convertFileToWebPBlob(file, maxWidth, quality);
        const webpFileName = file.name.replace(/\.[^/.]+$/, '') + '.webp';
        fileToUpload = new File([webpBlob], webpFileName, { type: 'image/webp' });
      } catch (convErr) {
        console.warn('WebP conversion fallback to original file:', convErr);
      }

      // 2. Attempt Cloudinary Upload with compressed WebP file
      try {
        const cloudRes = await uploadToCloudinary(fileToUpload);
        if (cloudRes.secure_url) {
          onChange(cloudRes.secure_url);
          const savedPercent = Math.max(0, Math.round(((file.size - cloudRes.bytes) / file.size) * 100));
          setCompressionInfo({
            origSize: origSizeFormatted,
            webpSize: formatFileSize(cloudRes.bytes),
            reduction: savedPercent > 0 ? `${savedPercent}% (Cloudinary CDN .webp)` : 'Cloudinary CDN .webp',
          });
          setIsConverting(false);
          return;
        }
      } catch (cloudErr) {
        console.warn('Cloudinary upload failed, falling back to local WebP Data URL:', cloudErr);
      }

      // Fallback: WebP Data URL
      const webpDataUrl = await convertFileToWebP(file, maxWidth, quality);
      const base64Length = webpDataUrl.length - (webpDataUrl.indexOf(',') + 1);
      const webpSizeBytes = Math.ceil((base64Length * 3) / 4);
      const webpSizeFormatted = formatFileSize(webpSizeBytes);
      const savedPercent = Math.max(0, Math.round(((file.size - webpSizeBytes) / file.size) * 100));

      setCompressionInfo({
        origSize: origSizeFormatted,
        webpSize: webpSizeFormatted,
        reduction: `${savedPercent}%`,
      });

      onChange(webpDataUrl);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Gagal memproses gambar';
      setErrorMsg(message);
    } finally {
      setIsConverting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileProcess(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileProcess(file);
    }
  };

  return (
    <div className="space-y-2 text-xs">
      <div className="flex items-center justify-between">
        <label className="font-bold text-slate-700 flex items-center gap-1.5">
          <ImageIcon className="w-3.5 h-3.5 text-school-green-700" />
          <span>{label}</span>
          {required && <span className="text-red-500">*</span>}
        </label>

        {/* Tab switcher */}
        <div className="flex items-center bg-slate-100 p-0.5 rounded-lg text-[10px] font-bold">
          <button
            type="button"
            onClick={() => setActiveTab('upload')}
            className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 ${
              activeTab === 'upload' ? 'bg-white text-school-green-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <Upload className="w-3 h-3" />
            <span>Upload File (WebP)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('url')}
            className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 ${
              activeTab === 'url' ? 'bg-white text-school-green-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <LinkIcon className="w-3 h-3" />
            <span>URL Direct</span>
          </button>
        </div>
      </div>

      {activeTab === 'upload' ? (
        <div className="space-y-2">
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`relative border-2 border-dashed rounded-2xl p-4 transition-all duration-200 cursor-pointer flex flex-col items-center justify-center text-center min-h-[140px] overflow-hidden ${
              isDragging
                ? 'border-school-green-600 bg-emerald-50/80 scale-[1.01] ring-4 ring-emerald-100'
                : 'border-slate-300 hover:border-school-green-600 bg-slate-50/60 hover:bg-emerald-50/30'
            }`}
          >
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />

            {/* Drag and Drop Visual Feedback Overlay */}
            {isDragging && (
              <div className="absolute inset-0 bg-school-green-700/10 backdrop-blur-[1px] flex flex-col items-center justify-center text-school-green-800 z-10 pointer-events-none transition-all">
                <div className="p-3 rounded-full bg-white text-school-green-700 shadow-md animate-bounce">
                  <Upload className="w-5 h-5" />
                </div>
                <p className="font-extrabold text-xs mt-2 text-school-green-900">Lepaskan untuk Mengunggah!</p>
                <p className="text-[10px] text-school-green-700 font-medium">Format gambar otomatis dikonversi ke WebP</p>
              </div>
            )}

            {isConverting ? (
              <div className="py-4 flex flex-col items-center space-y-2 text-school-green-700">
                <Loader2 className="w-6 h-6 animate-spin" />
                <p className="font-bold text-xs">Mengonversi Gambar ke Format WebP High Speed...</p>
                <p className="text-[10px] text-slate-400">Kompresi otomatis tanpa merusak kualitas</p>
              </div>
            ) : value ? (
              <div className="w-full space-y-3">
                <div className="relative group rounded-xl overflow-hidden border border-slate-200 bg-slate-900 max-h-44 flex items-center justify-center">
                  <img src={value} alt="Preview" className="max-h-44 object-contain" />
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        fileInputRef.current?.click();
                      }}
                      className="px-3 py-1.5 bg-white text-slate-800 font-extrabold rounded-lg text-xs flex items-center gap-1 shadow-md hover:bg-slate-100"
                    >
                      <RefreshCw className="w-3.5 h-3.5 text-school-green-700" />
                      <span>Ganti Gambar</span>
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onChange('');
                        setCompressionInfo(null);
                      }}
                      className="px-3 py-1.5 bg-red-600 text-white font-extrabold rounded-lg text-xs flex items-center gap-1 shadow-md hover:bg-red-700"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Hapus</span>
                    </button>
                  </div>

                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-600 text-white flex items-center gap-1 shadow">
                    <Zap className="w-3 h-3 text-school-gold-400" />
                    <span>Terkompresi .WEBP</span>
                  </span>
                </div>

                {compressionInfo && (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-2.5 flex items-center justify-between text-[11px] text-emerald-900">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>
                        Selesai dikonversi: <b>{compressionInfo.origSize}</b> ➔ <b>{compressionInfo.webpSize}</b>
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded-md font-extrabold bg-emerald-200 text-emerald-900 text-[10px]">
                      Hemat {compressionInfo.reduction}
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <div className="py-3 flex flex-col items-center space-y-2 text-slate-500">
                <div className="p-3 rounded-full bg-emerald-100/80 text-school-green-700">
                  <Upload className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-extrabold text-slate-800">Klik atau Tarik File Gambar ke Sini</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">Mendukung JPG, PNG, WEBP, GIF (Otomatis konversi ke .WebP hemat memori)</p>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <input
            type="url"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="https://images.unsplash.com/..."
            className="w-full px-3 py-2 rounded-xl border border-slate-300 font-mono text-slate-800 focus:outline-none focus:border-school-green-700"
          />
          {value && (
            <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-900 max-h-36 flex items-center justify-center">
              <img src={value} alt="Preview URL" className="max-h-36 object-contain" />
            </div>
          )}
        </div>
      )}

      {errorMsg && (
        <p className="text-red-600 text-[11px] font-bold">{errorMsg}</p>
      )}

      <p className="text-[10px] text-slate-400">{helpText}</p>
    </div>
  );
};
