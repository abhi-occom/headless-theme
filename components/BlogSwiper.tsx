// components/BlogSwiper.tsx
'use server';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getPosts, type Post } from '@/lib/api';
import { warmPostsCache } from '@/lib/cache-warmer';
import BlogImage from '@/components/BlogImage';

// Warm the cache when this module loads
warmPostsCache().catch(console.error);

function CacheStatus({ isCached, timestamp, age }: { isCached: boolean; timestamp: string; age: number }) {
  return (
    <div className="text-xs text-gray-500 mt-2 flex gap-2 d-none">
      <span className={`px-2 py-0.5 rounded ${isCached ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
        {isCached ? 'Cached' : 'Fresh'}
      </span>
      <span title={new Date(timestamp).toLocaleString()}>
        {age > 0 ? `${age}s old` : 'Just cached'}
      </span>
    </div>
  );
}

export default async function BlogSwiper() {
  try {
    const { data: posts, cacheInfo } = await getPosts({ 
      per_page: 3, 
      fields: 'id,title,excerpt,featured_media,link,guid,_embedded,_links',
      revalidate: 60, // Cache for 1 minute
      _embed: true // Ensure we get embedded media
    });

    if (!posts?.length) {
      return (
        <main className="container mx-auto p-6">
          {/* <h1 className="text-2xl font-bold mb-4" style={{ color: "#000" }}>Latest Posts</h1> */}
          <p className="text-gray-600">No posts available at the moment.</p>
          <CacheStatus {...cacheInfo} />
        </main>
      );
    }

    
    return (
    <main className="container mx-auto px-4 sm:px-6 py-8">
      <div className="flex justify-between items-center mb-8">
        {/* <h1 className="text-3xl font-bold text-gray-900">Latest Posts</h1> */}
        <CacheStatus {...cacheInfo} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post: Post) => {
          // Get the featured image URL from _embedded with more detailed fallback handling
          let featuredImage = '/images/placeholder-blog.jpg'; // default fallback
          try {
            if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
              featuredImage = post._embedded['wp:featuredmedia'][0].source_url;
            } else if (post.featured_media) {
              // If we have a featured_media ID but no _embedded data, construct the URL
              featuredImage = `/wp-content/uploads/${post.featured_media}.jpg`;
            }
          } catch (e) {
            console.error('Error getting featured image:', e);
          }

          // Safely access nested properties with fallbacks
          const postUrl = (post?.link || post?.guid?.rendered || `#post-${post?.id || 'unknown'}`)
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .toLowerCase(); // Convert to lowercase for consistency

          const title = post?.title?.rendered || 'Untitled Post';
          const excerpt = post?.excerpt?.rendered || 'No excerpt available';

          return (
            <article key={post?.id || Math.random()} className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-200">
              {/* <Link 
                href={postUrl} 
                className="block relative aspect-[16/9] overflow-hidden bg-gray-100"
              >
                <BlogImage
                  src={featuredImage}
                  alt={title}
                />
              </Link> */}
              <div className="p-6">
                <Link 
                  href={postUrl}
                  className="block"
                >
                  <h2 
                    className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-200"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                </Link>
                <div
                  className="text-gray-600 text-base mb-4 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: excerpt }}
                />
                <Link 
                  href={postUrl}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Read More
                  {/* <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg> */}
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
  } catch (error) {
    console.error('[BlogSwiper] Error:', error);
    return (
      <main className="container mx-auto p-6">
        {/* <h1 className="text-2xl font-bold mb-4" style={{ color: "#000" }}>Latest Posts</h1> */}
        <p className="text-red-600">Sorry, we couldn't load the latest posts. Please try again later.</p>
      </main>
    );
  }
}




