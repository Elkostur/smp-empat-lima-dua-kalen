'use client';

import React from 'react';

interface ArticleBodyProps {
  content?: string;
  className?: string;
}

function formatInline(text: string): React.ReactNode {
  // Support inline **bold** and *italic*
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-bold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return (
        <em key={i} className="italic text-slate-800">
          {part.slice(1, -1)}
        </em>
      );
    }
    return part;
  });
}

export function ArticleBody({ content, className = '' }: ArticleBodyProps) {
  if (!content || !content.trim()) {
    return (
      <div className="py-8 text-center text-slate-400 italic text-sm">
        Belum ada isi berita.
      </div>
    );
  }

  // Check if content is already structured with HTML block tags (<p>, <div>, <h1-6>, <ul>, <ol>, <blockquote>, <table)
  const hasBlockHtml = /<\/?(p|div|h[1-6]|ul|ol|li|blockquote|table|section|article)\b/i.test(content);

  if (hasBlockHtml) {
    return (
      <div
        className={`prose prose-slate max-w-none prose-headings:font-extrabold prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-relaxed sm:prose-p:leading-8 prose-p:text-base sm:prose-p:text-[17px] prose-li:text-slate-700 space-y-4 ${className}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  // Parse plain text content into clean paragraphs and sections
  // Split on single or multiple newlines (\r\n or \n) so every line-break is respected as a paragraph
  const blocks = content
    .split(/\r?\n+/)
    .map((b) => b.trim())
    .filter((b) => b.length > 0);

  return (
    <div className={`space-y-6 text-slate-700 text-base sm:text-[17px] leading-relaxed sm:leading-8 ${className}`}>
      {blocks.map((block, idx) => {
        // 1. Markdown heading (# Heading)
        if (block.startsWith('### ')) {
          return (
            <h4 key={idx} className="text-base sm:text-lg font-bold text-slate-900 pt-3">
              {block.slice(4)}
            </h4>
          );
        }
        if (block.startsWith('## ')) {
          return (
            <h3 key={idx} className="text-lg sm:text-xl font-extrabold text-slate-900 pt-4 border-l-4 border-school-green-700 pl-3">
              {block.slice(3)}
            </h3>
          );
        }
        if (block.startsWith('# ')) {
          return (
            <h2 key={idx} className="text-xl sm:text-2xl font-extrabold text-slate-900 pt-5">
              {block.slice(2)}
            </h2>
          );
        }

        // 2. Bullet list items (- item, • item, * item)
        if (block.startsWith('- ') || block.startsWith('• ') || block.startsWith('* ')) {
          const itemText = block.replace(/^[-•*]\s*/, '');
          return (
            <div key={idx} className="flex items-start gap-3 pl-3 sm:pl-4">
              <span className="w-2 h-2 rounded-full bg-school-green-700 mt-2.5 shrink-0" />
              <p className="flex-1 text-slate-700 leading-relaxed sm:leading-8 font-normal">
                {formatInline(itemText)}
              </p>
            </div>
          );
        }

        // 3. Numbered list item (e.g. "1. ", "2. ")
        const numberedMatch = block.match(/^(\d+)[.)]\s+(.+)$/);
        if (numberedMatch) {
          return (
            <div key={idx} className="flex items-start gap-3 pl-3 sm:pl-4">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-school-green-50 text-school-green-800 font-bold text-xs shrink-0 mt-1 border border-school-green-200">
                {numberedMatch[1]}
              </span>
              <p className="flex-1 text-slate-700 leading-relaxed sm:leading-8 font-normal">
                {formatInline(numberedMatch[2])}
              </p>
            </div>
          );
        }

        // 4. Section subheadings ending with ':' or bold wrapped: e.g. "Jadwal dan Jenis Perlombaan:"
        const isHeading =
          (block.endsWith(':') && block.length < 80) ||
          (block.startsWith('**') && block.endsWith('**') && block.length < 100);
        if (isHeading) {
          const headingText = block.replace(/^\*\*|\*\*$/g, '');
          return (
            <h3 key={idx} className="text-base sm:text-lg font-bold text-slate-900 pt-3 flex items-center gap-2">
              <span className="w-1.5 h-4 rounded-full bg-school-green-700 inline-block" />
              <span>{headingText}</span>
            </h3>
          );
        }

        // 5. Documentation or closing notes e.g. "Dokumentasi kegiatan SPEDA Champions 81..."
        if (/^(Dokumentasi|Catatan|Foto|Sumber|Keterangan)\b/i.test(block) && block.length < 140) {
          return (
            <div
              key={idx}
              className="mt-6 p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-xs sm:text-sm text-slate-600 font-medium italic flex items-center gap-2.5 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-school-green-600 shrink-0" />
              <span>{block}</span>
            </div>
          );
        }

        // 6. Regular clean paragraph
        return (
          <p key={idx} className="text-slate-700 leading-relaxed sm:leading-8 font-normal">
            {formatInline(block)}
          </p>
        );
      })}
    </div>
  );
}

export default ArticleBody;
