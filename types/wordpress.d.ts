export interface WPPost {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media?: number;
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
}

export interface ACFFields {
  hero_title?: string;
  hero_image?: string;
  description?: string;
}

export interface WPPostWithACF extends WPPost {
  acf?: ACFFields;
}
