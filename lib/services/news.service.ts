import { createClient } from '@/lib/supabase/client';
import { NewsItem, newsData as defaultNewsItems } from '@/data/schoolData';

export async function fetchNewsList(): Promise<NewsItem[]> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('is_published', true)
      .order('published_date', { ascending: false });

    if (error || !data || data.length === 0) return defaultNewsItems;

    return data.map((item) => ({
      id: item.id,
      slug: item.slug,
      title: item.title,
      category: item.category as NewsItem['category'],
      date: item.published_date,
      author: item.author_name,
      authorRole: item.author_role || '',
      readTime: `${item.read_time_minutes} menit`,
      imageUrl: item.image_url || 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
      image: item.image_url || 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
      summary: item.summary,
      content: item.content,
      tags: item.tags || [],
      featured: item.is_featured,
    }));
  } catch {
    return defaultNewsItems;
  }
}
