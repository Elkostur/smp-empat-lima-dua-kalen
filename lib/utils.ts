import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const ID_MONTHS: Record<string, number> = {
  januari: 0,
  jan: 0,
  februari: 1,
  feb: 1,
  maret: 2,
  mar: 2,
  april: 3,
  apr: 3,
  mei: 4,
  may: 4,
  juni: 5,
  jun: 5,
  juli: 6,
  jul: 6,
  agustus: 7,
  agu: 7,
  ags: 7,
  september: 8,
  sep: 8,
  oktober: 9,
  okt: 9,
  november: 10,
  nov: 10,
  desember: 11,
  des: 11,
};

/**
 * Robustly parses various date formats used in news articles:
 * - ISO: "2026-10-10", "2026-10-10T00:00:00.000Z"
 * - Indonesian: "10 Oktober 2026", "14 Desember 2025"
 */
export function parseNewsDate(dateStr?: string): number {
  if (!dateStr) return 0;
  const trimmed = dateStr.trim();

  // 1. Standard Date.parse (ISO, RFC)
  const parsed = Date.parse(trimmed);
  if (!isNaN(parsed)) {
    return parsed;
  }

  // 2. Parse Indonesian date strings e.g. "10 Oktober 2026"
  const parts = trimmed.toLowerCase().split(/[\s,/-]+/);
  if (parts.length >= 3) {
    const day = parseInt(parts[0], 10);
    const month = parts[1];
    const year = parseInt(parts[2], 10);
    if (!isNaN(day) && !isNaN(year) && ID_MONTHS[month] !== undefined) {
      return new Date(year, ID_MONTHS[month], day).getTime();
    }
    // "Oktober 10, 2026"
    if (ID_MONTHS[parts[0]] !== undefined && !isNaN(parseInt(parts[1], 10)) && !isNaN(parseInt(parts[2], 10))) {
      return new Date(parseInt(parts[2], 10), ID_MONTHS[parts[0]], parseInt(parts[1], 10)).getTime();
    }
  }

  return 0;
}

/**
 * Sorts news items in reverse chronological order (newest date first).
 */
export function sortNewsByDateDesc<T extends { date?: string; id?: string; slug?: string }>(items: T[]): T[] {
  if (!Array.isArray(items)) return [];
  return [...items].sort((a, b) => {
    const timeA = parseNewsDate(a.date);
    const timeB = parseNewsDate(b.date);
    if (timeB !== timeA) {
      return timeB - timeA;
    }
    // Secondary sort: extract 13-digit timestamp if present in id or slug
    const tsMatchA = `${a.id || ''} ${a.slug || ''}`.match(/(\d{13})/);
    const tsMatchB = `${b.id || ''} ${b.slug || ''}`.match(/(\d{13})/);
    const tsA = tsMatchA ? parseInt(tsMatchA[1], 10) : 0;
    const tsB = tsMatchB ? parseInt(tsMatchB[1], 10) : 0;
    if (tsB !== tsA) {
      return tsB - tsA;
    }
    // Tertiary sort: title or id stability
    return (b.id || '').localeCompare(a.id || '');
  });
}

