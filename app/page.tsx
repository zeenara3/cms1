import { getAllPosts } from "@/lib/wordpress";
import Hero from "@/components/Hero";
import PostCard from "@/components/PostCard";

export const revalidate = 600; // Revalidate every 10 minutes

export default async function Home() {
  const posts = await getAllPosts(20);

  if (!posts || posts.length === 0) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-bold">No posts found</h1>
        <p className="text-gray-500 mt-2">Please check your WordPress connection.</p>
      </div>
    );
  }

  const [heroPost, ...recentPosts] = posts;

  return (
    <div className="space-y-12 pb-20">
      <Hero post={heroPost} />

      <section className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Recent Articles</h2>
          <div className="h-1 flex-1 bg-gray-100 dark:bg-gray-800 ml-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
