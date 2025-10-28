import { getPostBySlug } from "@/lib/wordpress";
import { WPPost } from "@/types/wordpress";

interface Props {
  params: { slug: string };
}

export default async function SinglePost({ params }: Props) {
  const post: WPPost = await getPostBySlug(params.slug);

  return (
    <main className="container mx-auto p-8">
      <h1
        className="text-3xl font-bold mb-4"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </main>
  );
}
