// app/home/page.tsx
import { getPosts } from '@/lib/api';

export default async function HomePage() {
  const posts = await getPosts();

  console.log("Fetched posts:", posts); // ✅ For debugging in server console

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Latest Posts</h1>
      <ul className="space-y-6">
        {posts && posts.length > 0 ? (
          posts.map((post: any) => (
            <li key={post.id}>
              <h2
                className="text-xl font-semibold"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <div
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
            </li>
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </ul>
    </main>
  );
}
