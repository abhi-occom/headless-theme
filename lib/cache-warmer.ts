import { getPosts } from './api';

export async function warmPostsCache(): Promise<void> {
  try {
    console.log('[CacheWarmer] Warming posts cache...');
    await getPosts({ 
      per_page: 3, 
      fields: 'id,title,excerpt',
      revalidate: false // Force fresh fetch
    });
    console.log('[CacheWarmer] Posts cache warmed successfully');
  } catch (error) {
    console.error('[CacheWarmer] Failed to warm posts cache:', error);
  }
}