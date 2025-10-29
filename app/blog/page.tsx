// app/blog/[[...slug]]/page.tsx

import Link from "next/link";

export async function generateStaticParams() {
  const res = await fetch("http://localhost/occom/staging/wp-json/wp/v2/posts");
  const posts = await res.json();

  return posts.map((post: any) => ({
    slug: [post.slug],
  }));
}

async function getData(slug?: string[]) {
  if (!slug) {
    const res = await fetch("http://localhost/occom/staging/wp-json/wp/v2/posts", {
      next: { revalidate: 60 }, // ISR
    });
    return { posts: await res.json(), post: null };
  }

  const singleRes = await fetch(
    `http://localhost/occom/staging/wp-json/wp/v2/posts?slug=${slug[0]}`,
    { next: { revalidate: 60 } }
  );
  const data = await singleRes.json();

  if (!data.length) return { posts: null, post: null };

  return { posts: null, post: data[0] };
}

export default async function BlogPage({ params }: { params: { slug?: string[] } }) {
  const { posts, post } = await getData(params.slug);

  if (posts) {
    return (
      <main>
        <h1>Blog</h1>
        <ul>
          {posts.map((p: any) => (
            <li key={p.id}>
              <Link href={`/blog/${p.slug}`}>
                <h2 dangerouslySetInnerHTML={{ __html: p.title.rendered }} />
              </Link>
              <p dangerouslySetInnerHTML={{ __html: p.excerpt.rendered }} />
            </li>
          ))}
        </ul>
      </main>
    );
  }

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <article>
      <Link href="/blog">← Back to Blog</Link>
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </article>
  );
}
