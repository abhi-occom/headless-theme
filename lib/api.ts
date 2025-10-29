/**
 * WordPress Post type definition
 */
export interface Post {
  id?: number;
  title?: { rendered?: string };
  excerpt?: { rendered?: string };
  slug?: string;
  link?: string;
  guid?: { rendered?: string };
  featured_media?: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url?: string;
    }>;
  };
  [key: string]: unknown;
}

/**
 * Response type including cache information
 */
export interface PostsResponse {
  data: Post[];
  cacheInfo: {
    isCached: boolean;
    timestamp: string;
    age: number;
  };
}

/**
 * Options for getPosts function
 */
export type GetPostsOptions = {
  per_page?: number;
  fields?: string;
  revalidate?: number | false; // in seconds, or false for no cache
  _embed?: boolean; // Include embedded content like featured media
};

/**
 * Fetches posts from WordPress with cache information
 */
// In-memory cache for ultra-fast responses
let memoryCache: {
  data: PostsResponse | null;
  lastFetched: number;
} = {
  data: null,
  lastFetched: 0
};

const CACHE_TTL = 60 * 1000; // 1 minute in milliseconds
const STALE_TTL = 5 * 60 * 1000; // 5 minutes - will serve stale data up to this age

export async function getPosts(options: GetPostsOptions = {}): Promise<PostsResponse> {
  const { per_page = 3, fields, revalidate = 60 } = options;
  
  // Build URL with query parameters
  const params = new URLSearchParams();
  params.set('per_page', String(per_page));
  if (fields) params.set('_fields', fields);
  
  const url = `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp/v2/posts?${params}`;
  
  const startTime = Date.now();
  const now = Date.now();
  const cacheAge = now - memoryCache.lastFetched;

  // Serve from memory cache if fresh
  if (memoryCache.data && cacheAge < CACHE_TTL) {
    console.log(`[getPosts] Serving from memory cache (${cacheAge}ms old)`);
    return memoryCache.data;
  }

  // If we have stale data, serve it but revalidate in background
  if (memoryCache.data && cacheAge < STALE_TTL) {
    console.log(`[getPosts] Serving stale data (${cacheAge}ms old) and revalidating`);
    // Revalidate in background
    revalidateCache(url).catch(console.error);
    return memoryCache.data;
  }

  console.log(`[getPosts] Fetching ${per_page} posts...`);
  
  try {
    const response = await fetch(url, {
      next: {
        revalidate: revalidate === false ? 0 : revalidate,
        tags: ['posts']
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const duration = Date.now() - startTime;
      console.error(`[getPosts] HTTP error after ${duration}ms:`, response.status, response.statusText);
      throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
    }

    const posts = await response.json();
    const duration = Date.now() - startTime;

    // Get cache information from response headers
    const cacheStatus = response.headers.get('x-vercel-cache') || 'MISS';
    const cacheTimestamp = response.headers.get('date') || new Date().toUTCString();
    const cacheAge = parseInt(response.headers.get('age') || '0', 10);

    // Update memory cache
    const result = {
      data: posts,
      cacheInfo: {
        isCached: cacheStatus === 'HIT',
        timestamp: cacheTimestamp,
        age: cacheAge
      }
    };
    
    memoryCache = {
      data: result,
      lastFetched: Date.now()
    };

    console.log(`[getPosts] Fetched ${posts.length} posts in ${duration}ms (Cache: ${cacheStatus})`);
    
    return result;
  } catch (error) {
    const duration = Date.now() - startTime;
    console.error(`[getPosts] Error after ${duration}ms:`, error);
    
    // On error, serve stale data if available
    if (memoryCache.data) {
      console.log(`[getPosts] Serving stale data after error`);
      return memoryCache.data;
    }
    
    throw error;
  }
}

// Background revalidation function
async function revalidateCache(url: string): Promise<void> {
  try {
    const response = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`Failed to revalidate: ${response.status}`);
    }

    const posts = await response.json();
    const now = Date.now();
    
    memoryCache = {
      data: {
        data: posts,
        cacheInfo: {
          isCached: true,
          timestamp: new Date().toUTCString(),
          age: 0
        }
      },
      lastFetched: now
    };
    
    console.log('[getPosts] Background revalidation complete');
  } catch (error) {
    console.error('[getPosts] Background revalidation failed:', error);
  }
}
