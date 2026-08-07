export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          role: 'admin' | 'guru';
          nip: string | null;
          avatar_url: string | null;
          is_active: boolean;
          created_at: string;
          updated_at: string | null;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          role?: 'admin' | 'guru';
          nip?: string | null;
          avatar_url?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          role?: 'admin' | 'guru';
          nip?: string | null;
          avatar_url?: string | null;
          is_active?: boolean;
          updated_at?: string | null;
        };
      };
      school_info: {
        Row: {
          id: number;
          name: string;
          short_name: string | null;
          foundation: string | null;
          npsn: string | null;
          accreditation: string | null;
          address: string | null;
          district: string | null;
          regency: string | null;
          province: string | null;
          postal_code: string | null;
          phone: string | null;
          whatsapp: string | null;
          email: string | null;
          operating_hours: string | null;
          principal_name: string | null;
          principal_title: string | null;
          principal_quote: string | null;
          principal_photo_url: string | null;
          tagline: string | null;
          vision: string | null;
          missions: string[] | null;
          history: string | null;
          google_maps_embed_url: string | null;
          facebook_url: string | null;
          instagram_url: string | null;
          youtube_url: string | null;
          tiktok_url: string | null;
          updated_at: string | null;
          updated_by: string | null;
        };
        Insert: Partial<Database['public']['Tables']['school_info']['Row']>;
        Update: Partial<Database['public']['Tables']['school_info']['Row']>;
      };
      news: {
        Row: {
          id: string;
          slug: string;
          title: string;
          category: string;
          published_date: string;
          author_name: string;
          author_role: string | null;
          author_id: string | null;
          read_time_minutes: number;
          image_url: string | null;
          summary: string;
          content: string;
          tags: string[] | null;
          is_featured: boolean;
          is_published: boolean;
          views_count: number;
          created_at: string;
          updated_at: string | null;
          created_by: string | null;
        };
        Insert: Omit<Database['public']['Tables']['news']['Row'], 'id' | 'created_at' | 'updated_at' | 'views_count'> & {
          id?: string;
          views_count?: number;
        };
        Update: Partial<Database['public']['Tables']['news']['Row']>;
      };
      ppdb_applicants: {
        Row: {
          id: string;
          registration_no: string;
          period_id: string | null;
          registration_type: 'express' | 'full';
          full_name: string;
          nisn: string | null;
          gender: 'Laki-Laki' | 'Perempuan';
          birth_place: string | null;
          birth_date: string | null;
          address: string | null;
          origin_school: string;
          track: 'Reguler' | 'Prestasi' | 'Tahfidz Quran' | 'Undangan Yayasan';
          parent_name: string;
          father_name: string | null;
          mother_name: string | null;
          parent_occupation: string | null;
          phone: string;
          status: 'Menunggu Verifikasi' | 'Diterima' | 'Perlu Perbaikan' | 'Ditolak';
          admin_notes: string | null;
          is_data_complete: boolean;
          verified_by: string | null;
          verified_at: string | null;
          registration_date: string;
          updated_at: string | null;
        };
        Insert: Partial<Database['public']['Tables']['ppdb_applicants']['Row']> & {
          registration_no: string;
          full_name: string;
          gender: 'Laki-Laki' | 'Perempuan';
          origin_school: string;
          track: 'Reguler' | 'Prestasi' | 'Tahfidz Quran' | 'Undangan Yayasan';
          parent_name: string;
          phone: string;
        };
        Update: Partial<Database['public']['Tables']['ppdb_applicants']['Row']>;
      };
    };
  };
}
