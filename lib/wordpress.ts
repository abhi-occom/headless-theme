
import { WPPost } from "@/types/wordpress";

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL!;

export async function getPosts(): Promise<WPPost[]> {
  const res = await fetch(`${API_URL}/posts`, {
    next: { revalidate: 60 }, // ISR caching
  });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export async function getPostBySlug(slug: string): Promise<WPPost> {
  const res = await fetch(`${API_URL}/posts?slug=${slug}`);
  const data = await res.json();
  return data[0];
}
